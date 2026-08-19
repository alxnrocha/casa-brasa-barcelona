# Casa Brasa Barcelona — Carta Digital & Menú Gastronómico

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-success?style=flat-square&logo=github&logoColor=white)](https://alxnrocha.github.io/casa-brasa-barcelona/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Proyecto 03 del Portafolio Profesional** — Aplicación web de carta digital interactiva para restaurante de cocina mediterránea contemporánea en Barcelona.  
> 🔗 **Demo en Vivo en GitHub Pages:** [https://alxnrocha.github.io/casa-brasa-barcelona/](https://alxnrocha.github.io/casa-brasa-barcelona/)

---

## 🌟 Visión General & Propuesta de Valor

**Casa Brasa Barcelona** es una Single Page Application (SPA) interactiva diseñada para la consulta gastronómica ágil en mesa mediante código QR.

Permite a los comensales explorar platos categorizados, filtrar por intolerancias o preferencias dietéticas, calcular subtotales de comanda en tiempo real y visualizar detalles de cada elaboración en una interfaz Dark Elegance optimizada para móviles.

---

## ✨ Características Principales

- **Catálogo Gastronómico Interactivo:** 20 platos divididos en 5 categorías con información de ingredientes y alérgenos.
- **Búsqueda y Filtros Combinados:** Búsqueda normalizada por texto y filtros multicriterio (vegetariano, sin gluten, picante, rango de precio).
- **Gestión de Comanda y Subtotal Local:** Control de cantidades (1 a 10 unidades), cálculo automático en Euros (€) y panel lateral de selección.
- **Modales Accesibles (WCAG):** Diálogos de detalle de plato accesibles por teclado con control de foco y cierre con tecla `Escape`.
- **Diseño Mobile-First & Dark Elegance:** Paleta cromática cálida inspirada en cocina a la brasa con tipografía moderna y micro-animaciones fluidas.

---

## 🏛️ Arquitectura del Proyecto

```text
03-casa-brasa-barcelona/
├── index.html
├── src/
│   ├── components/                # Componentes React (MenuGrid, PlateModal, OrderPanel)
│   ├── data/                      # Fixtures gastronómicas estructuradas
│   ├── types/                     # Definiciones e interfaces TypeScript
│   ├── App.tsx                    # Componente raíz de la aplicación
│   └── main.tsx                   # Punto de entrada de React
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Node.js `>= 20.0.0`
- npm `>= 10.0.0`

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alxnrocha/casa-brasa-barcelona.git
   cd casa-brasa-barcelona
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🛡️ Calidad de Código & Testing

- **Tipado Estricto:** TypeScript en modo estricto garantizando seguridad de tipos en todo el catálogo y comanda.
- **Accesibilidad (a11y):** Diálogos modales con roles ARIA, trampas de foco y cierre con `Escape`.
- **Rendimiento:** Carga optimizada de imágenes con Vite y Tailwind CSS v4.

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
