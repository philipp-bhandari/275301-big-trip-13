import {createTripInfo} from "./view/trip-info";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header__container');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');

render(tripMainElement, createTripInfo(), 'beforeend');

