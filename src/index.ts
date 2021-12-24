import App from '@pages/App';
import './style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const $root: HTMLElement | null = document.querySelector('#main');
  if (!$root) throw new Error("Can't get $root Element");
  new App($root);
});
