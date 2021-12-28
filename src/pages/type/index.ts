import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';
import Overal from './overall';
import Detail from './detail';

export default class Type extends Component {
  template(): string {
    return `
        <div class="type-page"></div>
      `;
  }

  mounted(): void {
    const subPath = this.props.value;
    const $typePage = $(this.$target, '.type-page');

    !subPath
      ? new Overal($typePage)
      : new Detail($typePage, { value: subPath });
  }
}
