import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';

export default class Progress extends Component {
  template(): string {
    return `
        <button class="return-btn">left</button>
        <div class="progress-bar">진행도 바</div>
      `;
  }
}
