import Component from '@core/component';
import './style.scss';

import { $ } from '@util/query-selector';
import { QUESTION } from '@assets/text/question';

export default class Content extends Component {
  template(): string {
    const page: number = this.props.value as number;
    const { question, optionA, optionB } = QUESTION[page];

    return `
      <p class="content-question-intro">${this.props.value}. 빈칸에 들어갈 표현으로 가장 적절한 것은? [2점]</p>
      <article class="content-question">${question}</article>
      <button class="answer-btn" data-type="selectA">${optionA}</button>
      <button class="answer-btn" data-type="selectB">${optionB}</button>
    `;
  }
}
