import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction, setResultAction } from '@core/action';
import { ANSWER } from '@assets/text/answer';
import loadingImg from '@assets/images/temp-loading.png';

import Content from '@components/content';
import Progress from '@components/progress';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const answerSheet = new Array(12).fill(null);
let currentPage = 0;

export default class Test extends Component {
  initState(): NoKidsObject {
    currentPage = 0;
    return {};
  }

  template(): string {
    return `
        <section class="test-loading" style="display:none">
          <img src="${loadingImg}" alt="loading-image" class="loading-img" />
        </section>
        <div class="test-container">
          <section class="test-content-section" style="transform: translateX(0)">
            ${pages
              .map((page) => `<div class="test-content test${page}"></div>`)
              .join('\n')}
          </section>
        </div>
        <section class="test-progress-section"></section>
      `;
  }

  setEvent(): void {
    const $content: HTMLElement = $(this.$target, '.test-content-section');
    const $progress: HTMLElement = $(this.$target, '.test-progress-section');
    const $progressBar: HTMLElement = $(this.$target, '.progress-bar');
    const $progressPage: HTMLElement = $(this.$target, '.progress-page');
    const resultHandler = (): void => {
      const $testLoading = $(this.$target, '.test-loading');
      $testLoading.style.display = 'block';
      setTimeout(() => {
        store.dispatch(setResultAction(answerSheet));
      }, 1000);
    };

    const routeHandler = (currentPage: number): void => {
      currentPage >= 11
        ? resultHandler()
        : store.dispatch(setRouteAction('home', '', false));
    };

    const answerHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('answer-btn')) {
        const type = target.dataset.type;
        if (!type) throw new Error("Can't get an data-type in Option Button");
        answerSheet[currentPage] = ANSWER[currentPage + 1][type];
        currentPage >= 11
          ? routeHandler(currentPage)
          : ($content.style.transform = `translateX(-${
              8.3333 * ++currentPage
            }%)`);

        $progressBar.style.width = `${(currentPage + 1) * 8.4}%`;
        $progressPage.innerText = `${currentPage + 1} / 12`;
      }
    };

    const returnHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('return-btn')) {
        answerSheet[currentPage] = null;
        currentPage <= 0
          ? routeHandler(currentPage)
          : ($content.style.transform = `translateX(-${
              8.3333 * --currentPage
            }%)`);

        $progressBar.style.width = `${(currentPage + 1) * 37}px`;
        $progressPage.innerText = `${currentPage + 1} / 12`;
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
