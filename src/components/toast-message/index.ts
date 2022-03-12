import Component from '@core/component';
import './style.scss';

export default class ToastMessage extends Component {
  template(): string {
    const { value } = this.props;
    return `
      <div class="toast-msg-wrapper">
        <p>${value}</p>
      </div>
    `;
  }
}
