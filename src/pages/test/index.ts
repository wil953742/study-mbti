import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';

import Content from '@components/Content';
import Progress from '@components/progress';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let currentPage = 0;

export default class Test extends Component {
  template(): string {
    return `
        <section class="test-content-section" style="margin-left: 0px;">
          ${pages
            .map((page) => `<div class="test-content test${page}"></div>`)
            .join('\n')}
        </section>
        <section class="test-progress-section"></section>
      `;
  }

  setEvent(): void {
    const $content: HTMLElement = $(this.$target, '.test-content-section');
    const $progress: HTMLElement = $(this.$target, '.test-progress-section');

    const answerHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('answer-btn')) {
        $content.style.marginLeft = `-${440 * ++currentPage}px`;
      }
    };

    const returnHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('return-btn')) {
        $content.style.marginLeft =
          currentPage > 0
            ? `-${440 * --currentPage}px`
            : $content.style.marginLeft;
      }
    };

    $content.addEventListener('click', answerHandler);
    $progress.addEventListener('click', returnHandler);
  }

  mounted(): void {
    const $progress: HTMLElement = $(this.$target, '.test-progress-section');
    new Progress($progress, { value: currentPage });

    pages.forEach((page) => {
      const $content: HTMLElement = $(this.$target, `.test${page}`);
      new Content($content, { value: page });
    });
  }
}
