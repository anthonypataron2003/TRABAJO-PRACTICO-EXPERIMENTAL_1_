# 📝 Formulario Web de Registro

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  🎓 <strong>Proyecto académico — Universidad Estatal de Milagro (UNEMI)</strong>
</p>

---

## 📌 Descripción

Aplicación web desarrollada como proyecto académico para la **Universidad Estatal de Milagro (UNEMI)**.

El proyecto consiste en un **formulario web de registro de estudiantes**, diseñado para ser funcional, intuitivo y responsivo, incorporando **validaciones en tiempo real mediante JavaScript** para garantizar que la información ingresada sea correcta antes de enviar el formulario.

### ✨ Características principales

* 📋 Formulario completo de registro.
* 📱 Diseño **responsive** para escritorio, tablet y dispositivos móviles.
* ⚡ Validaciones en tiempo real.
* 🔐 Validación de contraseña y confirmación.
* 📧 Validación de correo electrónico.
* 📞 Validación de teléfono con formato de Ecuador.
* 🎂 Validación de edad y fecha de nacimiento.
* 🚨 Mensajes de error y éxito por campo.
* 🔄 Botón para limpiar el formulario.
* 👁️ Mostrar u ocultar contraseña.
* 📊 Barra de fuerza de contraseña.
* 🔢 Contador de caracteres.

---

## 🛠️ Tecnologías utilizadas

### 🌐 Frontend

* 🟧 **HTML5** — Estructura semántica del formulario mediante `form`, `label`, `input`, `select`, `textarea`, `fieldset` y `button`.
* 🎨 **CSS3** — Diseño visual, variables CSS, sombras, bordes, estados de validación y estilos personalizados.
* ⚡ **JavaScript ES6+** — Manipulación del DOM, manejo de eventos y validaciones del lado del cliente.

### 🎨 Diseño y maquetación

* 🧩 **CSS Grid** — Distribución principal del formulario.
* 📐 **Flexbox** — Alineación de campos y botones.
* 📱 **Media Queries** — Adaptación a diferentes tamaños de pantalla.
* 🎯 Estados visuales para campos válidos e inválidos.

---

## 📂 Estructura del proyecto

```text
formulario-web/
│
├── 📄 index.html       # Estructura del formulario
├── 🎨 style.css        # Estilos y diseño responsive
├── ⚡ script.js        # Lógica y validaciones
└── 📖 README.md        # Documentación del proyecto
```

---

## 🚀 Funcionalidades

### 🧱 Sesión 1 — HTML5

Implementación de un formulario compuesto por **11 campos**:

* 👤 Nombre
* 📧 Correo electrónico
* 🔐 Contraseña
* 🔁 Confirmación de contraseña
* 🎂 Edad
* 📱 Teléfono
* 🎓 Carrera
* 📅 Fecha de nacimiento
* 🏫 Modalidad
* 💬 Comentarios
* ☑️ Aceptación de términos y condiciones

También se utilizan diferentes atributos HTML5:

```text
required
placeholder
min
max
minlength
maxlength
pattern
step
autocomplete
inputmode
```

---

### 🎨 Sesión 2 — CSS3

El diseño incorpora:

* 🎨 Paleta de colores personalizada.
* 🔤 Tipografía y jerarquía visual.
* 🟢 Estados visuales para campos válidos.
* 🔴 Estados visuales para campos inválidos.
* 🔲 Bordes redondeados.
* 🌑 Sombras y espaciados consistentes.
* 🧩 Distribución mediante **CSS Grid**.
* 📐 Alineación mediante **Flexbox**.
* 📱 Diseño completamente responsive.

#### 📱 Adaptabilidad

| Dispositivo      | Diseño                   |
| ---------------- | ------------------------ |
| 🖥️ Escritorio   | 2 columnas               |
| 💻 Tablet        | 1 columna                |
| 📱 Móvil ≤ 768px | 1 columna                |
| 📱 Móvil ≤ 480px | Botones a ancho completo |

---

### ⚡ Sesión 3 — JavaScript

Se implementan los siguientes eventos:

```javascript
input
blur
change
submit
reset
```

#### 🔍 Validaciones implementadas

| Campo           | Validación                                       |
| --------------- | ------------------------------------------------ |
| 👤 Nombre       | Solo letras y espacios, mínimo 3 caracteres      |
| 📧 Correo       | Formato válido `usuario@dominio.com`             |
| 🔐 Contraseña   | Mínimo 8 caracteres, una mayúscula y un número   |
| 🔁 Confirmación | Debe coincidir con la contraseña                 |
| 🎂 Edad         | Número entero entre 16 y 99 años                 |
| 📱 Teléfono     | 10 dígitos e inicia con `09`                     |
| 📅 Fecha        | No puede ser futura y debe coincidir con la edad |
| 🎓 Carrera      | Selección obligatoria                            |
| 🏫 Modalidad    | Selección obligatoria                            |
| ☑️ Términos     | Aceptación obligatoria                           |

---

## 🔐 Control de validaciones

El formulario utiliza:

* 🚫 `preventDefault()` para bloquear el envío cuando existen errores.
* 🎯 Enfoque automático en el primer campo con error.
* 🟢 Mensajes de éxito por campo.
* 🔴 Mensajes de error específicos.
* 📢 Mensaje general al intentar enviar el formulario.
* ⚡ Validación en tiempo real mientras el usuario escribe.

---

## ✨ Funcionalidades adicionales

### 👁️ Mostrar / ocultar contraseña

Permite visualizar u ocultar la contraseña ingresada para facilitar su verificación.

### 💪 Indicador de fuerza

La contraseña cuenta con una barra visual que indica su nivel de seguridad.

### 🔢 Contador de caracteres

Se muestra la cantidad de caracteres ingresados en los campos correspondientes.

### 🧹 Limpiar formulario

Permite restablecer todos los campos y eliminar los mensajes de validación.

---

## ▶️ Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/USUARIO/formulario-web.git
```

### 2️⃣ Ingresar al proyecto

```bash
cd formulario-web
```

### 3️⃣ Ejecutar

Puedes abrir directamente:

```text
index.html
```

en cualquier navegador moderno.

También puedes utilizar **Live Server** desde Visual Studio Code para ejecutar el proyecto localmente.

---

## 🎯 Objetivo académico

El objetivo del proyecto es aplicar conocimientos fundamentales de desarrollo web mediante la construcción de un formulario funcional que integre:

* 🧱 Estructuración con HTML5.
* 🎨 Diseño responsive con CSS3.
* ⚡ Programación con JavaScript.
* 🔍 Validación de datos.
* 🖥️ Manipulación del DOM.
* 📱 Adaptabilidad multiplataforma.
* 🧑‍💻 Buenas prácticas de desarrollo frontend.

---

## 👨‍💻 Autores

**German Riera**
🎓 Ingeniería de Software — UNEMI

**Jordy Vergara**
🎓 Ingeniería de Software — UNEMI

**Hector Tenelema**
🎓 Ingeniería de Software — UNEMI

**Anthony Pataron**
🎓 Ingeniería de Software — UNEMI

---

<p align="center">
  ⭐ Proyecto académico desarrollado para la <strong>Universidad Estatal de Milagro (UNEMI)</strong> ⭐
</p>
