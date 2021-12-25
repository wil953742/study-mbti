import App from '@pages/App';
import './style.scss';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

window.addEventListener('DOMContentLoaded', () => {
  const $root: HTMLElement | null = document.querySelector('#main');
  if (!$root) throw new Error("Can't get $root Element");
  new App($root);
});

window.onpopstate = (e: PopStateEvent) => {
  const { mainPath, subPath } = e.state;
  store.dispatch(setRouteAction(mainPath, subPath, true));
};
