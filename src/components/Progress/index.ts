import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';

export default class Progress extends Component {
  template(): string {
    const currentPage = this.props.value + 1;
    return `
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
