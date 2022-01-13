import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { RESULT } from '@assets/text/result';
import logoImg from '@assets/images/logo.png';
import resultImg from '@assets/images/temp-result.png';

export default class Detail extends Component {
  template(): string {
    const { title, hashtag, strategy } = RESULT[this.props.value as string];

    return `
        <header class="home-logo">
          <img src="${logoImg}" alt="logo" class="logo-img"/>
        </header>
        <h1 class="result-title">${title}</h1>
        <img src="${resultImg} alt="result-img" class="result-img" />
        <p class="result-hashtag">${hashtag}</p>
        <p class="result-strategy">${strategy}</p>
      `;
  }
}
