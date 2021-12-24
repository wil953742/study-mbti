import Component from '@core/component';
import './style.scss';

export default class Progress extends Component {
  template(): string {
    return `
        <button>left</button>
        <div class="progress-bar">진행도 바</div>
      `;
  }
}
