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

  // setEvent(): void {
  //   const $backBtn = $(this.$target, '.progress-back-btn');
  //   const backHandler = (e: Event) => {
  //     const { state } = this.props;
  //     state.questionNumber =
  //       state.questionNumber > 1
  //         ? state.questionNumber - 1
  //         : state.questionNumber;
  //   };

  //   $backBtn.addEventListener('click', backHandler);
  // }
}
