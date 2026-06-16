# Decisiones técnicas - Casa Brasa Barcelona

## 1. Objetivo técnico

El proyecto demuestra una aplicación frontend basada en componentes, datos
tipados y estado local mediante una carta digital realista para un restaurante
ficticio de Barcelona.

La experiencia debía resolver:

- exploración de una carta por categorías;
- búsqueda y filtros combinables;
- consulta detallada de platos;
- preparación de una selección local;
- uso cómodo desde móvil, tablet y escritorio;
- navegación accesible mediante teclado.

## 2. Stack

Se utiliza React con TypeScript y Vite.

React permite dividir la interfaz en componentes y mantener sincronizados
filtros, modales y selección. TypeScript define contratos para platos, filtros y
elementos seleccionados. Vite ofrece una configuración ligera y un build
estático adecuado para el alcance.

Tailwind CSS se integra mediante su plugin para Vite. Los colores y tipografías
principales se declaran como tokens en `src/index.css`.

Lucide React proporciona iconos consistentes sin almacenar SVG extensos dentro
de los componentes.

## 3. Arquitectura de componentes

La aplicación se organiza por responsabilidad:

- `App` mantiene la selección y controla el drawer;
- `Header` gestiona la navegación y abre la selección;
- `MenuSection` concentra categoría, búsqueda, filtros, ordenación y plato
  activo;
- `DishModal` presenta información y añade cantidades;
- `SelectionDrawer` muestra la selección y el subtotal;
- `SelectionItemRow` permite editar o eliminar cada plato;
- componentes menores encapsulan búsqueda, filtros, cards y estados vacíos.

No se añadió Context ni una biblioteca de estado global porque la profundidad
de props es limitada y el estado tiene propietarios claros.

## 4. Modelo de datos

El catálogo contiene veinte platos locales tipados con:

- identificador y slug;
- nombre y descripción;
- categoría y precio;
- ingredientes y alérgenos;
- etiquetas alimentarias;
- nivel de picante;
- estado destacado;
- identificador de imagen.

El modelo guarda un `imageId` en lugar de importar archivos dentro de los datos.
`src/data/menuImages.ts` resuelve cada identificador a su asset y dimensiones.
Así, el catálogo sigue siendo serializable y fácil de sustituir por una API.

## 5. Búsqueda, filtros y ordenación

La búsqueda normaliza texto mediante descomposición Unicode, eliminación de
diacríticos y conversión a minúsculas. Esto permite encontrar resultados sin
diferenciar mayúsculas ni acentos.

El pipeline de la carta sigue este orden:

1. categoría activa;
2. texto de búsqueda;
3. etiquetas alimentarias;
4. nivel de picante;
5. franja de precio;
6. exclusión de alérgenos;
7. ordenación.

Los filtros se combinan entre sí. La ordenación utiliza una copia de los
resultados filtrados y conserva el orden original como desempate estable.

## 6. Estado y selección local

La selección vive en `App` porque debe ser compartida por el modal de plato, el
contador del header y el drawer.

Cada entrada conserva el plato y su cantidad. Al añadir un plato existente se
actualiza la entrada en vez de crear un duplicado. Las cantidades se limitan
entre 1 y 10.

El subtotal se deriva en cada render a partir del precio y la cantidad. No se
almacena como estado independiente para evitar valores desincronizados.

La selección no utiliza `localStorage`: se pierde al recargar por decisión de
alcance y se identifica claramente como demostración sin pedido real.

## 7. Diálogos y control de foco

El detalle del plato y la selección utilizan el elemento nativo `dialog` con
`showModal()`.

Las decisiones principales son:

- bloquear el scroll de fondo mientras el diálogo está abierto;
- mover el foco al botón de cierre;
- cerrar mediante botón, fondo o `Escape`;
- restaurar el foco al elemento que abrió el diálogo;
- mantener contenido interno desplazable en pantallas pequeñas.

El drawer ocupa todo el ancho en móvil y se presenta como panel lateral en
pantallas mayores.

## 8. Accesibilidad

La implementación incluye:

- HTML semántico y un único contenido principal;
- enlace visible al recibir foco para saltar al `main`;
- botones y controles nativos con nombres accesibles;
- `aria-pressed` para filtros y categorías;
- `aria-expanded` y `aria-controls` en el menú móvil;
- foco visible en todos los elementos interactivos;
- regiones `status` limitadas a resultados y resumen de selección;
- imágenes decorativas con alternativa vacía;
- cierre y restauración de foco en diálogos;
- reducción de animaciones y transiciones con
  `prefers-reduced-motion`.

La región viva de resultados no envuelve la cuadrícula completa para evitar que
un lector de pantalla anuncie todos los cards después de cada filtro.

## 9. Responsive

La interfaz sigue una estrategia mobile first con Tailwind CSS.

Las decisiones principales son:

- hero dividido en bloques en móvil y composición superpuesta en desktop;
- categorías con desplazamiento horizontal controlado;
- filtros que se reorganizan sin salir del viewport;
- grid de platos adaptable;
- modal con contenido desplazable;
- drawer de selección a ancho completo en móvil;
- áreas táctiles de tamaño suficiente;
- ausencia de una anchura mínima global que provoque overflow a 320 px.

## 10. Sistema visual

La dirección visual combina crema, carbón, vino, terracota y verde oliva. Los
títulos usan una serif editorial y la interfaz una sans-serif del sistema.

Las tarjetas, paneles translúcidos y sombras suaves construyen una estética
mediterránea contemporánea sin comprometer contraste ni legibilidad.

## 11. Imágenes y marca

El logo fue proporcionado por Alexandre. Se conserva el original y una versión
recortada para uso responsive.

Las fotografías proceden de Unsplash y se almacenan localmente. Ocho imágenes
de menú se reutilizan por afinidad visual entre veinte platos para equilibrar
variedad, coherencia y peso total.

La imagen principal se guarda en WebP. Los assets incluyen dimensiones
explícitas para reducir cambios de layout.

Las fuentes originales de las fotografías están registradas al final de este
documento.

## 12. Limitaciones deliberadas

El proyecto no incluye:

- backend o API;
- autenticación;
- base de datos;
- reservas;
- pedidos o pagos;
- persistencia de la selección;
- información comercial real.

Estas limitaciones mantienen el alcance centrado en frontend, componentes,
tipado, interacción y accesibilidad.

## 13. Flujo de GitHub

El desarrollo utiliza:

- blueprint aprobado antes de la implementación;
- milestones por etapa;
- issues pequeñas con labels y prioridad;
- una branch y un pull request por issue;
- commits inspirados en Conventional Commits;
- revisión visual antes de publicar cada cambio;
- issues y commits en inglés;
- títulos y descripciones de pull requests en español.

Los Proyectos 01 y 02 del portfolio se utilizaron como base operativa.

## 14. Posibles mejoras para producción

Una versión para un restaurante real podría incorporar:

- API o CMS para gestionar la carta;
- persistencia de preferencias;
- disponibilidad y precios administrables;
- integración con reservas o punto de venta;
- gestión legal de alérgenos;
- analítica con consentimiento;
- pruebas automatizadas de componentes y flujos;
- optimización avanzada y CDN de imágenes.

## 15. Estado actual

La experiencia funcional, responsive y accesible está terminada. El proyecto
incluye capturas finales y despliegue automatizado mediante GitHub Pages.

## Fuentes de imágenes

- Hero:
  https://unsplash.com/photos/grilled-octopus-tentacles-served-in-a-creamy-sauce-e14csf8Cuvw
- Carta:
  - https://unsplash.com/photos/burrata-cheese-with-tomatoes-and-basil-kkAW965TiPk
  - https://unsplash.com/photos/two-fried-croquettes-on-a-white-plate-__S2PQuHUjE
  - https://unsplash.com/photos/vegetable-dish-on-white-plate-oFljzK61O1s
  - https://unsplash.com/photos/a-pastry-with-oranges-and-almonds-on-it-KkEB1BDCMBQ
  - https://unsplash.com/photos/a-cooked-octopus-dish-with-potatoes-and-greens-0ezL9Nd679Q
  - https://unsplash.com/photos/black-cooking-pan-on-stove-4B0cLMtJxWw
  - https://unsplash.com/photos/clear-drinking-glass-with-lemon-juice-y_tIrc1Y7eI
  - https://unsplash.com/photos/close-up-of-a-glass-of-white-wine-with-bokeh-lights-SC_ij7uRh8E
