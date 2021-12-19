import Component from '@core/Component';
import './style.scss';

export default class Progress extends Component {
  template(): string {
    return `
        <button>left</button>
        <button>right</button>
        <div class="progress-bar">진행도 바</div>
      `;
  }
}
