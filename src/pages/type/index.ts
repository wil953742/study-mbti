import Component from '@core/component';
import './style.scss';

export default class Type extends Component {
  initState(): object {
    const { subPath } = this.props;
    return { subPath };
  }

  template(): string {
    return `
        <div class="type">타입 페이지</div>
      `;
  }

  mounted(): void {
    const { subPath } = this.state;

    // switch(subPath) {
    //   case '':
    // }
  }
}
