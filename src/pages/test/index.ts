import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';

import Content from '@components/content';
import Progress from '@components/progress';

export default class Test extends Component {
  initState(): object {
    return {
      questionNumber: 0,
    };
  }

  template(): string {
    return `
        <section class="main-content">내용 섹션</section>
        <section class="main-progress">진행도 섹션</section>
      `;
  }

  mounted(): void {
    const $content: Element = $(this.$target, '.main-content');
    const $progress: Element = $(this.$target, '.main-progress');
    new Content($content);
    new Progress($progress);
  }
}
