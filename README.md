# Formulario Web de Registro — HTML, CSS y JavaScript

Proyecto académico de la Universidad Estatal de Milagro (UNEMI). Consiste en un formulario de registro de estudiantes **funcional, responsivo y con validaciones en tiempo real** implementadas con JavaScript puro.

##  Tecnologías utilizadas

- **HTML5** – estructura semántica del formulario (`form`, `label`, `input`, `select`, `textarea`, `fieldset`, `button`).
- **CSS3** – estilos personalizados, variables CSS, **CSS Grid** para la distribución del formulario, **Flexbox** para los campos y botones, y *media queries* para el diseño adaptable.
- **JavaScript (ES6+)** – manipulación del DOM, manejo de eventos y validaciones del lado del cliente.

##  Estructura del proyecto

```
formulario-web/
├── index.html   # Estructura del formulario
├── style.css    # Estilos y diseño responsivo
├── script.js    # Lógica de validación
└── README.md    # Documentación
```

##  Funcionalidades implementadas

### Sesión 1 – HTML5
- Formulario con 11 campos: nombre, correo, contraseña, confirmación de contraseña, edad, teléfono, carrera (`select`), fecha de nacimiento, modalidad (`radio`), comentarios (`textarea`) y aceptación de términos (`checkbox`).
- Atributos HTML: `required`, `placeholder`, `min`, `max`, `minlength`, `maxlength`, `pattern`, `step`, `autocomplete`, `inputmode`.

### Sesión 2 – CSS
- Tipografía, paleta de colores, bordes redondeados, sombras y espaciados consistentes.
- Estilos de foco, estados válido (verde) e inválido (rojo) en los campos.
- Distribución en dos columnas con **CSS Grid** y alineación interna con **Flexbox**.
- Diseño responsivo: 2 columnas en escritorio, 1 columna en tablet y móvil (≤ 768 px), botones a ancho completo en pantallas pequeñas (≤ 480 px).

### Sesión 3 – JavaScript y validaciones
- Eventos **`input`**, **`blur`**, **`change`**, **`submit`** y **`reset`**.
- Validaciones:
  - Campos obligatorios.
  - **Nombre:** solo letras y espacios, mínimo 3 caracteres.
  - **Correo:** formato válido (`usuario@dominio.com`).
  - **Contraseña:** mínimo 8 caracteres, al menos una mayúscula y un número, con barra de fuerza.
  - **Confirmación:** debe coincidir con la contraseña.
  - **Edad:** numérica, entera, entre 16 y 99.
  - **Teléfono:** solo números, 10 dígitos, inicia con `09` (formato Ecuador).
  - **Fecha de nacimiento:** no futura y coherente con la edad ingresada.
  - **Carrera, modalidad y términos:** selección obligatoria.
- Mensajes de error y de éxito por campo y un mensaje general al enviar.
- **Se bloquea el envío** mientras existan datos inválidos (`preventDefault`) y se enfoca el primer campo con error.
- Extras: mostrar/ocultar contraseña, contador de caracteres y botón para limpiar el formulario.

## ▶ Cómo ejecutarlo

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/USUARIO/formulario-web.git
   ```
2. Abrir `index.html` en cualquier navegador moderno (o usar la extensión *Live Server* de VS Code).

##  Autor

German Riera — Ingeniería de Software, UNEMI
Jordy Vergara — Ingeniería de Software, UNEMI
Hector Tenelema — Ingeniería de Software, UNEMI
Pataron Steven — Ingeniería de Software, UNEMI