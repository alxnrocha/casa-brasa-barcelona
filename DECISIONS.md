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

## Alcance

El proyecto no tendrá backend, autenticación, pagos ni pedidos reales. La
selección de platos será una simulación local claramente identificada.

## Accesibilidad

La implementación priorizará HTML semántico, navegación por teclado, foco
visible, contraste adecuado, nombres accesibles y reducción de movimiento.
