import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction } from '@core/action';
import { ANSWER } from '@assets/text/answer';

import Content from '@components/Content';
import Progress from '@components/progress';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const answerSheet = new Array(12).fill(null);
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

    const routeHandler = (currentPage: number) => {
      console.log(JSON.stringify(answerSheet));
      currentPage >= 11
        ? store.dispatch(setRouteAction('type', ''))
        : store.dispatch(setRouteAction('home', ''));
    };

    const answerHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('answer-btn')) {
        const type = target.dataset.type;
        console.log(type);
        if (!type) throw new Error("Can't get an data-type in Option Button");
        answerSheet[currentPage] = ANSWER[currentPage + 1][type];
        currentPage >= 11
          ? routeHandler(currentPage)
          : ($content.style.marginLeft = `-${440 * ++currentPage}px`);
      }
    };

    const returnHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('return-btn')) {
        const type = target.dataset.type;
        if (!type) throw new Error("Can't get an data-type in Option Button");
        answerSheet[currentPage] = null;
        currentPage <= 0
          ? routeHandler(currentPage)
          : ($content.style.marginLeft = `-${440 * --currentPage}px`);
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
