import Component from '@core/component';
import './style.scss';

export default class MainButton extends Component {
  template(): string {
    const content: string = this.props.value;

    return `
      <button class="main-button">${content}</button>
    `;
  }
}
