import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';
import logoImg from '@assets/images/logo.png';
import homeImg from '@assets/images/home-image.png';

import MainButton from '@components/main-button';

export default class Home extends Component {
  template(): string {
    return `
      <header class="home-logo">
        <img src="${logoImg}" alt="logo" class="logo-img"/>
      </header>
      <section class="home-title-section">
        <p class="home-main-title-weak">무선생과 함께하는</p>
        <p class="home-main-title-bold">공부 유형 테스트</p>      
      </section>
      <section class="home-img-section">
        <p class="home-sub-title">나에게 꼭 맞는 공부 방법은?</p>
        <img src="${homeImg}" alt="home-img" class="home-img"/>
        <section class="home-start-section"></section>
      </section>
      <footer>
        <p class="footer-copyright">© All Rights Reserved</p>
        <p class="footer-contact">wil953742@naver.com</p>
      </footer>
    `;
  }

  setEvent(): void {
    const $mainStart: HTMLElement = $(this.$target, '.home-start-section');

    const handleStart: EventListener = (e) => {
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
