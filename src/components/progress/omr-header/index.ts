import Component from '@core/component';
import './style.scss';

import { store } from '@core/store';
import { setResultAction } from '@core/action';

const isLastPage = (currentPage: number): number => {
  return currentPage > 12 ? 12 : currentPage;
};

export default class OmrHeader extends Component {
  routeToResult(answerSheet: string[]) {
    setTimeout(() => {
      store.dispatch(setResultAction(answerSheet));
    }, 1000);
  }

  template(): string {
    const test = store.getState('test');
    const { currentPage, answerSheet } = test as Test;
    if (currentPage >= 12) this.routeToResult(answerSheet as string[]);
    return `
      <button class="back-btn"><strong><</strong> 뒤로</button>
      <p class="omr-current-page">${isLastPage(currentPage + 1)}/12</p>
    `;
  }
}
