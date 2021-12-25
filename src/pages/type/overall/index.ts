import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';

export default class Overall extends Component {
  template(): string {
    return `
        <div>overall page</div>
      `;
  }
}
