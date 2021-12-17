import App from '@pages/App';
import './style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const $root = document.querySelector('#root');
  new App($root);
});
