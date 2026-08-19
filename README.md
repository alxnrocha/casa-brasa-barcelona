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

## ✨ Características Principales

### 🚀 Experiencia de Usuario & Frontend
- **Catálogo Gastronómico Interactivo:** 20 platos divididos en 5 categorías con información detallada de ingredientes y alérgenos.
- **Búsqueda y Filtros Combinados:** Búsqueda normalizada por texto sin distinción de acentos y filtros multicriterio (vegetariano, sin gluten, picante, rango de precio).
- **Gestión de Comanda y Subtotal Local:** Control de cantidades (1 a 10 unidades), cálculo automático de precios en Euros y panel lateral de selección.
- **Modales Accesibles (WCAG):** Diálogos de detalle de plato accesibles por teclado con control de foco y cierre mediante tecla `Escape`.
- **Diseño Mobile-First & Dark Elegance:** Paleta de colores cálida inspirada en brasa y gastronomía con tipografía moderna y micro-animaciones fluidas.

---

## 🏛️ Estructura del Proyecto

```text
03-casa-brasa-barcelona/
├── index.html
├── src/
│   ├── components/                # Componentes React (MenuGrid, PlateModal, OrderPanel)
│   ├── data/                      # Fixtures gastronómicas estructuradas
│   ├── types/                     # Definiciones e interfaces TypeScript
│   ├── App.tsx                    # Componente raíz de la aplicación
│   └── main.tsx                   # Punto de entrada de React
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Guía de Inicio Rápido

### 1. Clonar el Repositorio
```bash
git clone https://github.com/alxnrocha/casa-brasa-barcelona.git
cd casa-brasa-barcelona
```

### 2. Instalar Dependencias y Ejecutar
```bash
npm install
npm run dev
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](./LICENSE) para más detalles.
