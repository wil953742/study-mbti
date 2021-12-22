import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';

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
      this.props.mainPath = 'test';
    };

    $mainStart.addEventListener('click', handleStart);
  }

  mounted(): void {
    const $mainStart: Element = $(this.$target, '.main-start');
    new MainButton($mainStart, '시작하기');
  }
}
