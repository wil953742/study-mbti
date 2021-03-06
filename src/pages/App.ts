import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { MBTI } from '@util/mbti';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import Home from './home';
import Test from './test';
import Type from './type';

const [, mainPath, subPath] = window.location.pathname.split('/');

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
    const { mainPath, subPath, popState } = route as Route;
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
        const subPathToUpper = subPath.toUpperCase();
        const path = MBTI.includes(subPathToUpper)
          ? `/type/${subPathToUpper}`
          : `/type`;
        if (!popState)
          history.pushState({ mainPath, subPathToUpper }, 'typepage', path);
        new Type($main, { value: subPathToUpper });
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
