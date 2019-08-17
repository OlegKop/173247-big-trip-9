import {getMenu} from "./components/menu";
import {getEventEdit} from "./components/event-edit";
import {getSort} from "./components/sort";
import {getFilters} from "./components/filters";
import {getTripInfo} from "./components/trip-info";
import {getEvent} from "./components/event";


const CARDS_COUNT = 3;

const main = document.querySelector(`.trip-main`);
const mainControl = main.querySelector(`.trip-main__trip-controls`);
const sort = document.querySelector(`.trip-events`);

const renderComponent = (container, layout, position = `afterend`) => {
  container.insertAdjacentHTML(position, layout);
};

renderComponent(main, getTripInfo(), `afterbegin`);
renderComponent(mainControl, getMenu(), `beforeend`);
renderComponent(mainControl, getFilters());
renderComponent(sort, getEventEdit(), `beforeend`);
renderComponent(sort, getSort(), `afterbegin`);


for (let i = 0; i < CARDS_COUNT; i++) {
  renderComponent(sort, getEvent());
}
