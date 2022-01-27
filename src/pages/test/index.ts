import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { store } from '@core/store';
import { setRouteAction, setTestInit, setPageAction } from '@core/action';
import loadingImg from '@assets/images/temp-loading.png';

import Content from '@components/content';
import Progress from '@components/progress';

export const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
        <section class="test-header">
          <p class="header-p-sub">나에게 꼭 맞는 공부 방법은?</p>
          <p class="header-p-main">공부 MBTI 테스트</p>
          <p class="header-p-class1">제 1교시</p>
          <div class="header-line-bold"></div>
          <div class="header-line-light"></div>
        </section>
        <div class="test-container">
          <section class="test-content-section" style="transform: translateX(0)">
            ${pages
              .map((page) => `<div class="test-content test${page + 1}"></div>`)
              .join('\n')}
          </section>
        </div>
        <section class="test-progress-section"></section>
      `;
  }

  setEvent(): void {
    const $content: HTMLElement = $(this.$target, '.test-content-section');
    const $progress: HTMLElement = $(this.$target, '.test-progress-section');

    const handleLoadingOn = (): void => {
      const $testLoading = $(this.$target, '.test-loading');
      $testLoading.style.display = 'block';
      setTestInit();
    };

    const answerHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('answer-btn')) {
        const type = target.dataset.type;
        if (!type) throw new Error("Can't get an data-type in Option Button");
        if (currentPage >= 11) {
          handleLoadingOn();
        } else {
          $content.style.transform = `translateX(-${
            8.3333 * (currentPage + 1)
          }%)`;
        }
        store.dispatch(setPageAction(++currentPage, type));
      }
    };

    const returnHandler = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      if (target.classList.contains('back-btn')) {
        if (currentPage <= 0) {
          store.dispatch(setRouteAction('home', '', false));
        } else {
          store.dispatch(setPageAction(--currentPage, null));
          $content.style.transform = `translateX(-${8.3333 * currentPage}%)`;
        }
      }
    };

    $content.addEventListener('click', answerHandler);
    $progress.addEventListener('click', returnHandler);
  }

  mounted(): void {
    const $progress: HTMLElement = $(this.$target, '.test-progress-section');
    new Progress($progress, { value: currentPage });

    pages.forEach((page) => {
      const $content: HTMLElement = $(this.$target, `.test${page + 1}`);
      new Content($content, { value: page + 1 });
    });
  }
}
