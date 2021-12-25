import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';

export default class Detail extends Component {
  template(): string {
    return `
        <div>detail page ${this.props.value}</div>
      `;
  }
}
