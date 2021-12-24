import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';
import { QUESTION } from '@assets/text/question';

export default class Content extends Component {
  template(): string {
    const page: number = this.props.value;
    const { question, optionA, optionB } = QUESTION[page];

    return `
      <div>${this.props.value}</div>
      <article class="content-question">${question}</article>
      <section class="content-btn-section">
        <button class="answer-btn" data-type="selectA">${optionA}</button>
        <button class="answer-btn" data-type="selectB">${optionB}</button>
      </section>
    `;
  }
}
