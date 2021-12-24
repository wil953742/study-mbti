import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';

export default class Content extends Component {
  template(): string {
    return `
        <article class="content-question">내가 공부할 때, 더 선호하는 공간은?${this.props.value.questionNumber}</article>
        <section class="content-btn-section">
          <button class="answer-btn">개방된 카페</button>
          <button class="answer-btn">조용한 독서실</button>
        </section>
      `;
  }
}
