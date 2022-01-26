import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';
import omr from '@assets/images/ic-omr.svg';

export default class Progress extends Component {
  template(): string {
    const currentPage: number = (this.props.value as number) + 1;
    return `
        <img src=${omr} alt="omr-image" />
        <section class="progress-bar-section">
          <div class="background-bar"></div>
          <div class="progress-bar"></div>
        </section>
        <section class="progress-info-section">
          <button class="return-btn">뒤로</button>
          <p class="progress-page">${currentPage} / 12</p>
        </section>
      `;
  }
}
