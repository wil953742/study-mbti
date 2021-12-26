import App from '@pages/App';
import './style.scss';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

window.addEventListener('DOMContentLoaded', () => {
  const $app: HTMLElement | null = document.querySelector('#app');
  if (!$app) throw new Error("Can't get $root Element");
  new App($app);
});

window.onpopstate = (e: PopStateEvent) => {
  const { mainPath, subPath } = e.state;
  store.dispatch(setRouteAction(mainPath, subPath, true));
};
