import {createTripInfo} from "./view/trip-info.js";
import {createTripSort} from "./view/trip-sort.js";
import {createTripControls} from "./view/trip-controls.js";
import {createTripFilter} from "./view/trip-filter.js";
import {createTripList} from "./view/trip-list.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`.page-body`);
const siteHeaderElement = siteBodyElement.querySelector(`.page-header__container`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMainElement = siteBodyElement.querySelector(`.page-main`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);
const tripMenuElement = tripMainElement.querySelector(`.trip-controls`);

render(tripMainElement, createTripInfo(), `afterbegin`);
render(tripMenuElement, createTripControls(), `beforeend`);
render(tripMenuElement, createTripFilter(), `beforeend`);
render(tripEventsElement, createTripSort(), `afterbegin`);
render(tripEventsElement, createTripList(), `beforeend`);

