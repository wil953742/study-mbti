import Component from '@core/component';
import './style.scss';

import omr from '@assets/images/ic-omr.svg';
import OmrHeader from './omr-header';
import OmrMarkings from './omr-markings';
import { $ } from '@util/query-selector';

export default class Progress extends Component {
  template(): string {
    return `
        <div class="omr-header"></div>
        <div class="omr-wrapper">
          <img src=${omr} class="omr-image" alt="omr-image" />
          <div class="omr-markings"></div>
        </div>
      `;
  }

  mounted(): void {
    const $OmrHeader = $(this.$target, '.omr-header');
    const $OmrMarkings = $(this.$target, '.omr-markings');

    new OmrHeader($OmrHeader);
    new OmrMarkings($OmrMarkings);
  }
}
