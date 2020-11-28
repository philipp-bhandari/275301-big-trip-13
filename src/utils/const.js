import {getRandomInteger} from "./helpers";

export const generateDate = () => {
  const DAYS = 7;
  const HOURS_PER_DAY = 24;
  const MINUTEST_START = 0;
  const MINUTES_END = 60;
  const MILLISECONDS = 1000;

  return Date.now() + Math.floor(Math.random() * DAYS) * HOURS_PER_DAY * getRandomInteger(MINUTEST_START, MINUTES_END) * MINUTES_END * MILLISECONDS;
};

export const generateEventType = () => {
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

export const generateCities = () => {
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

export const generateOffers = () => {
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

export const generateDescription = () => {
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
