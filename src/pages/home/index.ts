import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';
import logo from '@assets/images/logo.png';
import tempHome from '@assets/images/temp-home.png';

import MainButton from '@components/main-button';

export default class Home extends Component {
  template(): string {
    return `
      <header class="home-logo">
        <img src="${logo}" alt="logo" class="logo-img"/>
      </header>
      <section class="home-title-section">
        <p class="home-main-title">공부 유형 테스트</p>
        <p class="home-sub-title">나에게 꼭 맞는 공부 방법은?</p>
      </section>
      <section class="home-img-section">
        <img src="${tempHome}" alt="home-img" class="home-img"/>
      </section>
      <section class="home-start-section"></section>
      <footer>
        <p class="footer-copyright">© All Rights Reserved</p>
        <p class="footer-contact">wil953742@naver.com</p>
      </footer>
    `;
  }

  setEvent(): void {
    const $mainStart: HTMLElement = $(this.$target, '.home-start-section');

    const handleStart = (e: Event) => {
      const [mainPath, subPath] = ['test', ''];
      store.dispatch(setRouteAction(mainPath, subPath, false));
    };

    $mainStart.addEventListener('click', handleStart);
  }

  mounted(): void {
    const $mainStart: HTMLElement = $(this.$target, '.home-start-section');
    new MainButton($mainStart, { value: '테스트 시작하기' });
  }
}
