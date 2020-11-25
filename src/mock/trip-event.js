import {getRandomInteger} from "../utils/helpers";

const generateDate = () => {
  return (
    Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * getRandomInteger(0, 60) * 60 * 1000
  );
};

const generateEventType = () => {
  const types = [
    `Taxi`,
    `Bus`,
    `Train`,
    `Ship`,
    `Transport`,
    `Drive`,
    `Flight`,
    `Check-in`,
    `Sightseeing`,
    `Restaurant`
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);
  return types[randomIndex];
};

const generateCities = () => {
  const cities = [
    `Zurich`,
    `New-York`,
    `Edinburgh`,
    `London`,
    `Kyoto`,
    `Como`,
    `Bremen`
  ];

  const randomIndex = getRandomInteger(0, cities.length - 1);
  return cities[randomIndex];
};

const generateOffers = () => {
  const offers = [
    {
      name: `Add luggage`,
      price: 30
    },
    {
      name: `Switch to comfort class`,
      price: 100
    },
    {
      name: `Add meal`,
      price: 15
    },
    {
      name: `Choose seats`,
      price: 5
    },
    {
      name: `Travel by train`,
      price: 40
    }
  ];

  const randomIndex = getRandomInteger(0, offers.length - 1);
  return offers[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

export const generateEvent = () => {
  const timeStart = generateDate();
  const timeEnd = generateDate();
  return {
    type: generateEventType(),
    city: generateCities(),
    timeStart: Math.min(timeStart, timeEnd),
    timeEnd: Math.max(timeStart, timeEnd),
    price: getRandomInteger(10, 200),
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
