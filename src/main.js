import {createTripInfo} from "./view/trip-info.js";
import {createTripSort} from "./view/trip-sort.js";
import {createTripControls} from "./view/trip-controls.js";
import {createNewPointTemplate} from "./view/add-point.js";
import {createEditPointTemplate} from "./view/edit-point.js";
import {createTripFilter} from "./view/trip-filter.js";
import {createTripElement} from "./view/trip-list.js";
import {generateEvent} from "./mock/trip-event.js";

const TRIP_COUNT = 15;

const event = new Array(TRIP_COUNT).fill().map(generateEvent);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`.page-body`);
const siteHeaderElement = siteBodyElement.querySelector(`.page-header__container`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMainElement = siteBodyElement.querySelector(`.page-main`);
const tripEventsContent = siteMainElement.querySelector(`.trip-events`);
const tripEventsList = siteMainElement.querySelector(`.trip-events__list`);
const tripMenuElement = tripMainElement.querySelector(`.trip-controls`);

render(tripMainElement, createTripInfo(), `afterbegin`);
render(tripMenuElement, createTripControls(), `beforeend`);
render(tripMenuElement, createTripFilter(), `beforeend`);
render(tripEventsContent, createTripSort(), `afterbegin`);
render(tripEventsList, createNewPointTemplate(), `afterbegin`);
render(tripEventsList, createEditPointTemplate(), `beforeend`);

for (let i = 1; i < TRIP_COUNT; i++) {
  render(tripEventsList, createTripElement(event[i]), `beforeend`);
}

