import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import Home from './home';
import Test from './test';
import Type from './type';
import Loading from './loading';

let [mainPath, subPath] = window.location.pathname.split('/');

store.dispatch(setRouteAction(mainPath, subPath, false));

export default class App extends Component {
  template(): string {
    return `
      <div class="app"></div>
    `;
  }

  mounted(): void {
    const $app: HTMLElement = $(this.$target, '.app');
    const route = store.getState('route');
    const { mainPath, subPath, popState } = route;
    switch (mainPath) {
      case 'home':
        if (!popState)
          history.pushState({ mainPath, subPath }, 'homepage', '/home');
        new Home($app);
        break;
      case 'test':
        if (!popState)
          history.pushState({ mainPath, subPath }, 'testpage', '/test');
        new Test($app);
        break;
      case 'loading':
        if (!popState)
          history.pushState({ mainPath, subPath }, 'loadingpage', '/loading');
        new Loading($app);
        break;
      case 'type':
        const path = !subPath ? '/type' : `/type/${subPath}`;
        if (!popState)
          history.pushState({ mainPath, subPath }, 'typepage', path);
        new Type($app, { value: subPath });
        break;
      default:
        history.replaceState(
          { mainPath: 'home', subPath },
          'homepage',
          '/home'
        );
        new Home($app);
        break;
    }
  }
}
