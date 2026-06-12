# Decisiones técnicas

## Stack inicial

Se utiliza React con TypeScript y Vite porque el objetivo principal del proyecto
es trabajar componentes, listas, filtros y estado de interfaz con una base
moderna y ligera.

Tailwind CSS se integra mediante el plugin oficial para Vite. Los tokens
iniciales de color y tipografía se declaran en CSS para mantener una identidad
visual coherente sin crear una configuración innecesariamente compleja.

## Estado

El estado se mantendrá inicialmente en componentes React y se distribuirá
mediante props. No se añadirá una biblioteca de estado global mientras el
alcance no lo justifique.

## Datos

La carta utilizará datos locales tipados. El archivo de datos comienza vacío
durante la etapa de fundación y se completará en el milestone de experiencia de
menú.

## Identidad

El logo fue proporcionado por Alexandre. Se conserva el archivo original y se
genera una segunda versión recortada únicamente para eliminar márgenes
transparentes y facilitar su uso responsive.

La paleta inicial combina crema, carbón, vino, terracota y verde oliva para
mantener una dirección mediterránea contemporánea.

## Imagen del hero

La fotografía principal muestra pulpo a la brasa y procede de Unsplash. Fue
realizada por Paolo Bici y se almacena localmente en formato WebP para evitar
una dependencia externa durante la ejecución.

Fuente:
https://unsplash.com/photos/grilled-octopus-tentacles-served-in-a-creamy-sauce-e14csf8Cuvw

La composición utiliza un degradado lateral para mantener la legibilidad del
texto en desktop. En móvil, texto e imagen se presentan como bloques separados
para evitar superposiciones y conservar el foco gastronómico de la fotografía.

## Imágenes de la carta

La carta utiliza ocho fotografías gratuitas de Unsplash almacenadas localmente
y reutilizadas por afinidad visual entre platos. Esta decisión reduce el peso
del proyecto y evita descargar una imagen distinta para cada uno de los veinte
elementos del catálogo.

Fuentes:

- https://unsplash.com/photos/burrata-cheese-with-tomatoes-and-basil-kkAW965TiPk
- https://unsplash.com/photos/two-fried-croquettes-on-a-white-plate-__S2PQuHUjE
- https://unsplash.com/photos/vegetable-dish-on-white-plate-oFljzK61O1s
- https://unsplash.com/photos/a-pastry-with-oranges-and-almonds-on-it-KkEB1BDCMBQ
- https://unsplash.com/photos/a-cooked-octopus-dish-with-potatoes-and-greens-0ezL9Nd679Q
- https://unsplash.com/photos/black-cooking-pan-on-stove-4B0cLMtJxWw
- https://unsplash.com/photos/clear-drinking-glass-with-lemon-juice-y_tIrc1Y7eI
- https://unsplash.com/photos/close-up-of-a-glass-of-white-wine-with-bokeh-lights-SC_ij7uRh8E

La asociación entre platos e imágenes se mantiene separada de los datos del
menú para que el modelo siga siendo serializable y fácil de sustituir.

## Alcance

El proyecto no tendrá backend, autenticación, pagos ni pedidos reales. La
selección de platos será una simulación local claramente identificada.

## Accesibilidad

La implementación priorizará HTML semántico, navegación por teclado, foco
visible, contraste adecuado, nombres accesibles y reducción de movimiento.
