import Component from '@core/Component';
import './style.scss';

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
    const $content: Element | null =
      this.$target.querySelector('.main-content');
    const $progress: Element | null =
      this.$target.querySelector('.main-progress');
    if (!$content || !$progress) throw new Error("Can't get $content element");

    new Content($content);
    new Progress($progress);
  }
}
