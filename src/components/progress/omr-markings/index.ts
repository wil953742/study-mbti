import Component from '@core/component';
import './style.scss';

import { store } from '@core/store';
import { pages } from '@pages/test';

const optionToNum: { [key: string]: number } = { selectA: 1, selectB: 2 };
const OMR_LENGTH = 4;
const MARKING_CONST = {
  top: 69,
  left: 105 - 17,
  topInterval: 20,
  leftInterval: 17,
  nextInterval: 96,
  width: 7,
  height: 15,
};

export default class OmrMarkings extends Component {
  createMarkingElement(page: number, answerNumber: number): string {
    const { top, left, topInterval, leftInterval, nextInterval } =
      MARKING_CONST;
    const className = `omr-checkbox checkbox-${page + 1}`;
    const style = `top: ${top + topInterval * (page % OMR_LENGTH)}px; left: ${
      left +
      leftInterval * answerNumber +
      nextInterval * Math.floor(page / OMR_LENGTH)
    }px`;
    return `<div class="${className}" style="${style}"></div>`;
  }

  template(): string {
    const test = store.getState('test');
    const { currentPage, answerSheet } = test as Test;
    return `${pages
      .slice(0, currentPage)
      .map((page: number) =>
        this.createMarkingElement(
          page,
          optionToNum[answerSheet[page] as string]
        )
      )
      .join('\n')}`;
  }
}
