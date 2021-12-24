import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';

import MainButton from '@components/main-button';

export default class Home extends Component {
  template(): string {
    return `
      <section class="home-title-section">
        <p class="home-main-title">팩폭주의 공부 유형 테스트</p>
        <p class="home-sub-title">나에게 가장 적합한 공부법은!?</p>
      </section>
      <section class="home-img-section">메인 이미지</section>
      <section class="home-start-section"></section>
    `;
  }

  setEvent(): void {
    const $mainStart: HTMLElement = $(this.$target, '.home-start-section');

    const handleStart = (e: Event) => {
      const [mainPath, subPath] = ['test', ''];
      store.dispatch(setRouteAction(mainPath, subPath));
    };

    $mainStart.addEventListener('click', handleStart);
  }

  mounted(): void {
    const $mainStart: HTMLElement = $(this.$target, '.home-start-section');
    new MainButton($mainStart, { value: '시작하기' });
  }
}
