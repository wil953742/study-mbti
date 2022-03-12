import Component from '@core/component';
import './style.scss';

import { QUESTION } from '@assets/text/question';

export default class Content extends Component {
  template(): string {
    const page: number = this.props.value as number;
    const { question, optionA, optionB } = QUESTION[page];

    return `
      <p class="content-question-intro">${page}. 다음 질문에 대한 답으로 더 적절한 것은? [2점]</p>
      <article class="content-question">${question}</article>
      <button class="answer-btn" data-type="selectA">${optionA}</button>
      <button class="answer-btn" data-type="selectB">${optionB}</button>
    `;
  }
}
