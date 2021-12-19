import Component from '@core/Component';
import './style.scss';

export default class Content extends Component {
  template(): string {
    return `
        <article class="content-question">내가 공부할 때, 더 선호하는 공간은?</article>
        <button>개방된 카페</button>
        <button>조용한 독서실</button>
      `;
  }
}
