import almondCitrusTart from '../assets/images/menu/almond-citrus-tart.jpg'
import burrataTomatoes from '../assets/images/menu/burrata-tomatoes.jpg'
import croquettes from '../assets/images/menu/croquettes.jpg'
import octopusPotatoes from '../assets/images/menu/octopus-potatoes.jpg'
import roastedVegetables from '../assets/images/menu/roasted-vegetables.jpg'
import rosemaryLemonade from '../assets/images/menu/rosemary-lemonade.jpg'
import seafoodRice from '../assets/images/menu/seafood-rice.jpg'
import whiteWine from '../assets/images/menu/white-wine.jpg'

type MenuImage = {
  src: string
  width: number
  height: number
}

const images = {
  almondCitrusTart: {
    src: almondCitrusTart,
    width: 900,
    height: 1350,
  },
  burrataTomatoes: {
    src: burrataTomatoes,
    width: 900,
    height: 1600,
  },
  croquettes: {
    src: croquettes,
    width: 900,
    height: 1350,
  },
  octopusPotatoes: {
    src: octopusPotatoes,
    width: 900,
    height: 600,
  },
  roastedVegetables: {
    src: roastedVegetables,
    width: 900,
    height: 601,
  },
  rosemaryLemonade: {
    src: rosemaryLemonade,
    width: 900,
    height: 1350,
  },
  seafoodRice: {
    src: seafoodRice,
    width: 900,
    height: 600,
  },
  whiteWine: {
    src: whiteWine,
    width: 900,
    height: 1350,
  },
} as const satisfies Record<string, MenuImage>

export const menuImages: Readonly<Record<string, MenuImage>> = {
  'berenjena-asada': images.roastedVegetables,
  'gazpacho-sandia': images.roastedVegetables,
  'burrata-tomates': images.burrataTomatoes,
  'carpaccio-dorada': images.octopusPotatoes,
  'croquetas-setas': images.croquettes,
  'patatas-bravas': images.croquettes,
  'pimientos-padron': images.roastedVegetables,
  'pan-cristal-anchoa': images.burrataTomatoes,
  'pulpo-brasa': images.octopusPotatoes,
  'arroz-marisco': images.seafoodRice,
  'lubina-brasa': images.octopusPotatoes,
  'calabaza-romesco': images.roastedVegetables,
  'tarta-almendra': images.almondCitrusTart,
  'crema-catalana': images.almondCitrusTart,
  'sorbete-limon': images.rosemaryLemonade,
  'chocolate-aceite': images.almondCitrusTart,
  'limonada-romero': images.rosemaryLemonade,
  'vino-blanco': images.whiteWine,
  'vermut-casa': images.whiteWine,
  'tonica-citricos': images.rosemaryLemonade,
}
