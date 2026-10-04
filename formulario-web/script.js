const form = document.getElementById("formRegistro");
const alerta = document.getElementById("alerta");
const fuerzaBarra = document.getElementById("fuerzaBarra");
const comentarios = document.getElementById("comentarios");
const contador = document.getElementById("contador");

const campos = {
  nombre: document.getElementById("nombre"),
  correo: document.getElementById("correo"),
  password: document.getElementById("password"),
  confirmar: document.getElementById("confirmar"),
  edad: document.getElementById("edad"),
  telefono: document.getElementById("telefono"),
  carrera: document.getElementById("carrera"),
  fecha: document.getElementById("fecha"),
  terminos: document.getElementById("terminos"),
};
const radiosModalidad = document.querySelectorAll('input[name="modalidad"]');

const regex = {
  nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{3,60}$/,
  correo: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
  telefono: /^09\d{8}$/,
};

const validadores = {
  nombre(v) {
    if (!v.trim()) return "El nombre es obligatorio.";
    if (v.trim().length < 3) return "Debe tener al menos 3 caracteres.";
    if (!regex.nombre.test(v.trim())) return "Solo se permiten letras y espacios.";
    return "";
  },
  correo(v) {
    if (!v.trim()) return "El correo es obligatorio.";
    if (!regex.correo.test(v.trim())) return "Formato de correo inválido (ej: usuario@dominio.com).";
    return "";
  },
  password(v) {
    if (!v) return "La contraseña es obligatoria.";
    if (v.length < 8) return `Mínimo 8 caracteres (llevas ${v.length}).`;
    if (!/[A-Z]/.test(v)) return "Debe incluir al menos una letra mayúscula.";
    if (!/[0-9]/.test(v)) return "Debe incluir al menos un número.";
    return "";
  },
  confirmar(v) {
    if (!v) return "Confirma tu contraseña.";
    if (v !== campos.password.value) return "Las contraseñas no coinciden.";
    return "";
  },
  edad(v) {
    if (v === "") return "La edad es obligatoria.";
    const n = Number(v);
    if (!Number.isInteger(n)) return "La edad debe ser un número entero.";
    if (n < 16 || n > 99) return "La edad debe estar entre 16 y 99 años.";
    return "";
  },
  telefono(v) {
    if (!v) return "El teléfono es obligatorio.";
    if (!/^\d+$/.test(v)) return "Solo se permiten números.";
    if (!regex.telefono.test(v)) return "Debe tener 10 dígitos y empezar con 09.";
    return "";
  },
  carrera(v) {
    return v ? "" : "Selecciona una carrera.";
  },
  fecha(v) {
    if (!v) return "La fecha de nacimiento es obligatoria.";
    const nacimiento = new Date(v + "T00:00:00");
    const hoy = new Date();
    if (nacimiento > hoy) return "La fecha no puede ser futura.";
    let edadCalc = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) edadCalc--;
    const edad = Number(campos.edad.value);
    if (campos.edad.value !== "" && edadCalc !== edad) {
      return `No coincide con la edad ingresada (según la fecha tendrías ${edadCalc}).`;
    }
    return "";
  },
  terminos() {
    return campos.terminos.checked ? "" : "Debes aceptar los términos y condiciones.";
  },
};

function mostrarEstado(elemento, error) {
  const contenedor = elemento.closest(".campo");
  const mensaje = contenedor.querySelector(".mensaje");
  contenedor.classList.toggle("invalido", !!error);
  contenedor.classList.toggle("valido", !error);
  mensaje.textContent = error || "✔ Correcto";
  if (elemento.type === "checkbox" && !error) mensaje.textContent = "";
}

function validarCampo(nombre) {
  const el = campos[nombre];
  const valor = el.type === "checkbox" ? el.checked : el.value;
  const error = validadores[nombre](valor);
  mostrarEstado(el, error);
  return !error;
}

function validarModalidad() {
  const seleccionado = [...radiosModalidad].some((r) => r.checked);
  const fieldset = radiosModalidad[0].closest(".campo");
  const mensaje = fieldset.querySelector(".mensaje");
  fieldset.classList.toggle("invalido", !seleccionado);
  fieldset.classList.toggle("valido", seleccionado);
  mensaje.textContent = seleccionado ? "" : "Selecciona una modalidad.";
  return seleccionado;
}

function actualizarFuerza(v) {
  let puntos = 0;
  if (v.length >= 8) puntos++;
  if (/[A-Z]/.test(v)) puntos++;
  if (/[0-9]/.test(v)) puntos++;
  if (/[^A-Za-z0-9]/.test(v)) puntos++;
  const colores = ["#dc2626", "#f97316", "#eab308", "#16a34a"];
  fuerzaBarra.style.width = v ? `${(puntos / 4) * 100}%` : "0";
  fuerzaBarra.style.background = colores[Math.max(puntos - 1, 0)];
}

Object.keys(campos).forEach((nombre) => {
  const el = campos[nombre];
  const eventoCambio = el.type === "checkbox" || el.tagName === "SELECT" || el.type === "date" ? "change" : "input";

  el.addEventListener("blur", () => validarCampo(nombre));

  el.addEventListener(eventoCambio, () => {
    const contenedor = el.closest(".campo");
    if (contenedor.classList.contains("invalido") || contenedor.classList.contains("valido") || eventoCambio === "change") {
      validarCampo(nombre);
    }
  });
});

campos.telefono.addEventListener("input", () => {
  campos.telefono.value = campos.telefono.value.replace(/\D/g, "").slice(0, 10);
});

campos.password.addEventListener("input", () => {
  actualizarFuerza(campos.password.value);
  if (campos.confirmar.value) validarCampo("confirmar");
});

campos.edad.addEventListener("input", () => {
  if (campos.fecha.value) validarCampo("fecha");
});

radiosModalidad.forEach((r) => r.addEventListener("change", validarModalidad));

comentarios.addEventListener("input", () => {
  contador.textContent = comentarios.value.length;
});

document.querySelectorAll(".btn-ver").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    input.type = input.type === "password" ? "text" : "password";
    const visible = input.type === "text";
    btn.classList.toggle("activo", visible);
    btn.setAttribute("aria-label", visible ? "Ocultar contraseña" : "Mostrar contraseña");
  });
});

function mostrarAlerta(tipo, texto) {
  alerta.className = `alerta campo-completo ${tipo}`;
  alerta.innerHTML = texto;
  alerta.hidden = false;
  alerta.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const resultados = Object.keys(campos).map(validarCampo);
  const modalidadOk = validarModalidad();
  const errores = resultados.filter((ok) => !ok).length + (modalidadOk ? 0 : 1);

  if (errores > 0) {
    mostrarAlerta("error", `❌ No se pudo enviar: hay <strong>${errores}</strong> campo(s) con errores. Revisa los mensajes en rojo.`);
    const primerError = form.querySelector(".invalido input, .invalido select");
    if (primerError) primerError.focus();
    return;
  }

  const datos = Object.fromEntries(new FormData(form));
  delete datos.password;
  delete datos.confirmar;
  console.log("Datos enviados:", datos);

  mostrarAlerta("exito", `✅ ¡Registro exitoso! Bienvenido/a, <strong>${escaparHTML(datos.nombre)}</strong>.`);

  resetPorEnvio = true;
  form.reset();
});

let resetPorEnvio = false;
form.addEventListener("reset", () => {
  const mantenerAlerta = resetPorEnvio;
  resetPorEnvio = false;
  setTimeout(() => {
    limpiarEstados();
    if (!mantenerAlerta) alerta.hidden = true;
  }, 0);
});

function limpiarEstados() {
  form.querySelectorAll(".campo").forEach((c) => {
    c.classList.remove("valido", "invalido");
    const m = c.querySelector(".mensaje");
    if (m) m.textContent = "";
  });
  actualizarFuerza("");
  contador.textContent = "0";
}

function escaparHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}
