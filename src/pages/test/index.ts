import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';

import Content from '@components/Content';
import Progress from '@components/progress';

export default class Test extends Component {
  initState(): object {
    return {
      questionNumber: 0,
    };
  }

  template(): string {
    return `
        <section class="test-content-section"></section>
        <section class="test-progress-section"></section>
      `;
  }

  setEvent(): void {}

  mounted(): void {
    const $content: Element = $(this.$target, '.test-content-section');
    const $progress: Element = $(this.$target, '.test-progress-section');
    new Content($content, { value: this.state });
    new Progress($progress);
  }
}
