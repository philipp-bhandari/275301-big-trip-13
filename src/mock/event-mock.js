import {getRandomInteger} from "../utils/helpers";
import {generateDate} from "../utils/const.js";
import {generateEventType} from "../utils/const.js";
import {generateCities} from "../utils/const.js";
import {generateOffers} from "../utils/const.js";
import {generateDescription} from "../utils/const.js";

export const generateEvent = () => {
  const timeStart = generateDate();
  const timeEnd = generateDate();
  const minPrice = 10;
  const maxPrice = 200;
  return {
    type: generateEventType(),
    city: generateCities(),
    timeStart: Math.min(timeStart, timeEnd),
    timeEnd: Math.max(timeStart, timeEnd),
    price: getRandomInteger(minPrice, maxPrice),
    offers: generateOffers(),
    destination: {
      description: generateDescription(),
      photos: [
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`
      ]
    },
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};

