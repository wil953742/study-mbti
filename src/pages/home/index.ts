import Component from '@core/Component';
import './style.scss';

export default class Home extends Component {
  template(): string {
    return `
        <section class="img">메인 이미지</section>
        <section class="main-start">시작하기</section>
      `;
  }
}
