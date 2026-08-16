# Casa Brasa Barcelona — Carta Digital & Menú Gastronómico

[![Demo GitHub Pages](https://img.shields.io/badge/Demo-GitHub_Pages-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://alxnrocha.github.io/casa-brasa-barcelona/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**Casa Brasa Barcelona** es una aplicación web tipo carta digital interactiva para un restaurante de cocina mediterránea contemporánea en Barcelona. Diseñada con enfoque *mobile-first* para consulta mediante código QR, permite explorar platos, filtrar por alérgenos y dietas, calcular subtotales y gestionar pedidos locales.

- 🌐 **Demo en Vivo (GitHub Pages):** [https://alxnrocha.github.io/casa-brasa-barcelona/](https://alxnrocha.github.io/casa-brasa-barcelona/)
- 📦 **Repositorio GitHub:** [https://github.com/alxnrocha/casa-brasa-barcelona](https://github.com/alxnrocha/casa-brasa-barcelona)

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
├── index.html                     # Entrypoint HTML5
├── screenshots/                   # Capturas de pantalla reales
│   ├── desktop.png
│   └── mobile.png
├── src/
│   ├── assets/                    # Identidad de marca e imágenes de platos
│   ├── components/                # Modales, filtros, cards de menú y comanda
│   ├── data/                      # Catálogo tipado de productos y alérgenos
│   ├── types/                     # Interfaces y tipos TypeScript
│   ├── utils/                     # Utilidades de filtrado y formateo monetario
│   ├── App.tsx                    # Shell principal de la aplicación
│   └── index.css                  # Estilos globales y tokens Tailwind
├── BLUEPRINT.md                   # Planificación técnica
└── DECISIONS.md                   # Registro de decisiones de arquitectura
```

---

## ⚡ Guía de Inicio Rápido

### 1. Clonar e Instalar Dependencias
```bash
git clone https://github.com/alxnrocha/casa-brasa-barcelona.git
cd casa-brasa-barcelona
npm install
```

### 2. Iniciar en Modo Desarrollo
```bash
npm run dev
```

---

## 🧪 Calidad de Código y Pruebas

```bash
# Análisis estático de código
npm run lint

# Compilar para producción
npm run build
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](./LICENSE) para más detalles.

**Autor:** [Alexandre Rocha](https://github.com/alxnrocha)
