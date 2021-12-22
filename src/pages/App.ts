import Component from '@core/component';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import Home from './home';
import Test from './test';
import Type from './type';
import Loading from './loading';

const isValidPath = (path: string): boolean => {
  const validPath = ['home', 'test', 'loading', 'type'];
  return validPath.includes(path);
};

let [mainPath, subPath] = window.location.pathname.split('/');
[mainPath, subPath] = isValidPath(mainPath)
  ? [mainPath, subPath]
  : ['home', ''];

store.dispatch(setRouteAction(mainPath, subPath));

export default class App extends Component {
  template(): string {
    return `
      <div class="app"></div>
    `;
  }

  mounted(): void {
    const route = store.getState('route');
    const $app: Element = $(this.$target, '.app');
    const { mainPath, subPath } = route;
    switch (mainPath) {
      case 'home':
        // history.replaceState({ data: 'home' }, 'homepage', '/home');
        new Home($app, this.state);
        break;
      case 'test':
        history.pushState({ data: 'test' }, 'testpage', '/test');
        new Test($app, this.state);
        break;
      case 'loading':
        history.pushState({ data: 'loading' }, 'loadingpage', '/loading');
        new Loading($app, this.state);
        break;
      case 'type':
        history.pushState({ data: 'type' }, 'typepage', '/type');
        new Type($app, this.state);
        break;
      default:
        history.replaceState({ data: 'home' }, 'homepage', '/home');
        new Home($app, this.state);
        break;
    }
  }
}
