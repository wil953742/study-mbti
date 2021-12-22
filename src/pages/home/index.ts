import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import MainButton from '@components/main-button';

export default class Home extends Component {
  template(): string {
    return `
      <section class="img">메인 이미지</section>
      <section class="main-start"></section>
    `;
  }

  setEvent(): void {
    const $mainStart: Element = $(this.$target, '.main-start');

    const handleStart = (e: Event) => {
      const [mainPath, subPath] = ['test', ''];
      store.dispatch(setRouteAction(mainPath, subPath));
    };

    $mainStart.addEventListener('click', handleStart);
  }

  mounted(): void {
    const $mainStart: Element = $(this.$target, '.main-start');
    new MainButton($mainStart, '시작하기');
  }
}
