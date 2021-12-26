import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import Home from './home';
import Test from './test';
import Type from './type';

let [mainPath, subPath] = window.location.pathname.split('/');

store.dispatch(setRouteAction(mainPath, subPath, false));

export default class App extends Component {
  template(): string {
    return `
      <main class="main"></main>
    `;
  }

  mounted(): void {
    const $main: HTMLElement = $(this.$target, '.main');
    const route = store.getState('route');
    const { mainPath, subPath, popState } = route;
    switch (mainPath) {
      case 'home':
        if (!popState)
          history.pushState({ mainPath, subPath }, 'homepage', '/home');
        new Home($main);
        break;
      case 'test':
        if (!popState)
          history.pushState({ mainPath, subPath }, 'testpage', '/test');
        new Test($main);
        break;
      case 'type':
        const path = !subPath ? '/type' : `/type/${subPath}`;
        if (!popState)
          history.pushState({ mainPath, subPath }, 'typepage', path);
        new Type($main, { value: subPath });
        break;
      default:
        history.replaceState(
          { mainPath: 'home', subPath },
          'homepage',
          '/home'
        );
        new Home($main);
        break;
    }
  }
}
