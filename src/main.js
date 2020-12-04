import TripInfoView from "./view/trip-info.js";
import TripSortView from "./view/trip-sort.js";
import TripControlsView from "./view/trip-controls.js";
import AddNewPointView from "./view/add-point.js";
import EditPointView from "./view/edit-point.js";
import TripFilterView from "./view/trip-filter.js";
import TripEventView from "./view/trip-event.js";
import {generateEvent} from "./mock/event-mock.js";
import {render, RenderPosition} from "./utils/helpers.js";

const TRIP_COUNT = 15;

const events = new Array(TRIP_COUNT).fill().map(generateEvent);

const siteBodyElement = document.querySelector(`.page-body`);
const siteHeaderElement = siteBodyElement.querySelector(`.page-header__container`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMainElement = siteBodyElement.querySelector(`.page-main`);
const tripEventsContent = siteMainElement.querySelector(`.trip-events`);
const tripEventsList = siteMainElement.querySelector(`.trip-events__list`);
const tripMenuElement = tripMainElement.querySelector(`.trip-controls`);

render(tripMainElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(tripMenuElement, new TripControlsView().getElement(), RenderPosition.BEFOREEND);
render(tripMenuElement, new TripFilterView().getElement(), RenderPosition.BEFOREEND);
render(tripEventsContent, new TripSortView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsList, new AddNewPointView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsList, new EditPointView(events[0]).getElement(), RenderPosition.BEFOREEND);

events.forEach((point) => render(tripEventsList, new TripEventView(point).getElement(), RenderPosition.BEFOREEND));

