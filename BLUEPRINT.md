# Blueprint — Casa Brasa Barcelona

## Identidad

- Nombre: Casa Brasa Barcelona.
- Tipo: carta digital responsive para restaurante.
- Segmento: cocina mediterránea contemporánea.
- Idioma de la interfaz: español.
- Público: clientes locales y turistas en Barcelona.
- Uso simulado: consulta desde móvil o código QR.

## Objetivo

Crear una aplicación que permita consultar la carta, buscar platos, combinar
filtros y montar una selección antes de realizar un pedido presencial.

El objetivo técnico es demostrar React, TypeScript, componentes reutilizables,
listas, filtros y estado local.

## Stack

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- Lucide React para iconos.
- Datos locales tipados.
- GitHub Pages o Vercel para deploy.

No se utilizarán backend, autenticación, base de datos ni pagos.

## Estructura de la interfaz

### Header

- Logo.
- Navegación.
- Identificación visual del idioma español.
- Botón para abrir la selección.

### Hero

- Presentación de Casa Brasa.
- Fotografía gastronómica.
- Llamada para explorar la carta.
- Información breve de ubicación y horario.

### Carta digital

- Campo de búsqueda.
- Categorías.
- Filtros alimentarios.
- Ordenación.
- Contador de resultados.
- Cuadrícula de platos.

### Detalle del plato

- Imagen.
- Nombre y descripción.
- Ingredientes.
- Precio.
- Alérgenos.
- Características alimentarias.
- Control de cantidad.
- Acción para añadir a la selección.

### Selección

- Platos añadidos.
- Cambio de cantidad.
- Eliminación.
- Subtotal estimado.
- Estado vacío.
- Aviso de que no es un pedido real.

### Sobre el restaurante

- Concepto gastronómico.
- Uso de ingredientes locales.
- Ambiente y propuesta.

### Información

- Dirección ficticia en Barcelona.
- Horarios.
- Contacto identificado como demostración.
- Mapa visual sin integración externa obligatoria.

### Footer

- Navegación.
- Información del proyecto.
- Indicación de proyecto ficticio de portfolio.

## Categorías

- Entrantes.
- Tapas.
- Principales.
- Postres.
- Bebidas.

## Filtros

- Vegetariano.
- Vegano.
- Sin gluten.
- Picante.
- Franja de precio.
- Alérgenos.

Los filtros podrán combinarse y existirá una acción para limpiar todos.

## Modelo de datos

Cada plato tendrá identificador, nombre, descripción, categoría, precio, imagen,
ingredientes, alérgenos, etiquetas alimentarias, nivel de picante y estado
destacado.

La carta tendrá aproximadamente veinte platos para demostrar listas y filtros
sin añadir contenido innecesario.

## Componentes previstos

- `Header`.
- `Hero`.
- `SearchBar`.
- `CategoryTabs`.
- `FilterPanel`.
- `ActiveFilters`.
- `MenuGrid`.
- `MenuCard`.
- `DishModal`.
- `SelectionDrawer`.
- `SelectionItem`.
- `EmptyState`.
- `RestaurantInfo`.
- `Footer`.

## Estados de la aplicación

- Categoría seleccionada.
- Texto de búsqueda.
- Filtros activos.
- Ordenación.
- Plato abierto.
- Selección de platos.
- Menú móvil abierto.
- Panel de selección abierto.
- Estado sin resultados.

No se utilizarán Zustand o Context sin una necesidad real. El estado comenzará
en el componente principal y se distribuirá mediante props.

## Dirección visual

- Estilo mediterráneo contemporáneo y editorial.
- Paleta crema, vino, terracota, verde oliva y carbón.
- Tipografía serif expresiva en títulos.
- Tipografía sans-serif legible en la interfaz.
- Fotografías gastronómicas procedentes de Unsplash, descargadas y optimizadas.
- Prioridad mobile first.
- Cuadrícula más amplia y filtros adaptados en desktop.

## Iconos e imágenes

- Lucide React para iconos de interfaz.
- SVG local cuando exista una necesidad específica.
- Imágenes de Unsplash almacenadas como assets locales optimizados.
- Logo proporcionado por Alexandre, sin rediseño automático.

## Accesibilidad

- Navegación completa por teclado.
- Foco visible.
- Botones con nombres accesibles.
- Modal con control de foco.
- Cierre mediante `Escape`.
- Filtros con estado perceptible.
- Contraste adecuado.
- Textos alternativos coherentes.
- Mensajes accesibles para resultados y selección.
- Soporte para `prefers-reduced-motion`.

## Reglas funcionales

- Búsqueda sin diferenciar mayúsculas ni acentos.
- Filtros combinados.
- Categoría y búsqueda funcionando juntas.
- Selección sin envío real.
- Subtotal calculado localmente.
- Cantidades limitadas a valores razonables.
- Información ficticia claramente identificada.
- Sin persistencia en esta versión.

## Milestones

### Milestone 1 — Project foundation

Repositorio, Vite, React, TypeScript, Tailwind CSS, estructura base y
documentación inicial.

### Milestone 2 — Digital menu experience

Identidad, datos locales, categorías, tarjetas, detalles de platos y experiencia
visual principal.

### Milestone 3 — Filters, selection and quality

Búsqueda, filtros combinados, selección, responsividad, accesibilidad y pruebas.

### Milestone 4 — Documentation and release

Revisión final, capturas, README, decisiones técnicas, deploy y presentación de
portfolio.

## Criterios de conclusión

- Búsqueda y filtros funcionando correctamente.
- Interfaz responsive sin overflow.
- Selección local sin simular pagos.
- TypeScript sin errores.
- Consola limpia.
- Accesibilidad validada.
- Imágenes optimizadas.
- README y decisiones en español.
- Capturas desktop y mobile.
- Deploy público.
- Organización de GitHub basada en los Proyectos 01 y 02.
