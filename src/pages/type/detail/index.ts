import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { RESULT } from '@assets/text/result';
import icShare from '@assets/images/ic-share.svg';
import icAgain from '@assets/images/ic-again.svg';
import resultImg from '@assets/images/img-sample.png';

export default class Detail extends Component {
  calcEqualTrialDots(sideLength: number): string {
    const [cx, cy] = [100, 130];
    const [nx1, ny1] = [cx, cy - Math.floor((sideLength / 3) * Math.sqrt(3))];
    const [nx2, ny2] = [
      cx - sideLength / 2,
      cy + Math.floor((sideLength / 6) * Math.sqrt(3)),
    ];
    const [nx3, ny3] = [
      cx + sideLength / 2,
      cy + Math.floor((sideLength / 6) * Math.sqrt(3)),
    ];
    return `${nx1} ${ny1}, ${nx2} ${ny2}, ${nx3} ${ny3}, ${nx1} ${ny1}`;
  }

  template(): string {
    const {
      subTitle,
      mainTitle,
      hashtag1,
      hashtag2,
      hashtag3,
      overview,
      recommend,
    } = RESULT[this.props.value as string];

    return `
        <section class="result-header">
          <h3>${subTitle}</h3>
          <h1>${mainTitle}</h1>
        </section>
        <section class="result-hashtag">
          <p>${hashtag1}</p>
          <p>${hashtag2}</p>
          <p>${hashtag3}</p>
        </section>
        <section class="result-character">
          <img src="${resultImg} alt="result-img" />
        </section>
        <section class="result-graph"> 
          <svg width="200" height="200">
            <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
              150
            )}" />
            <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
              120
            )}" />
            <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
              90
            )}" />
            <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
              60
            )}" />
            <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
              30
            )}" />
          </svg>
        </section>
        <section class="result-overview">
          <section>
            <div class="double-line"></div>
            <p>유형 특징</p>
            <div class="double-line"></div>
          </section>
          <p class="result-content">
            · 유형특징 1
          </p>
          <p class="result-content">
            · 유형특징 2
          </p>
        </section>
        <section class="result-recommend">
          <section>
            <div class="double-line"></div>
            <p>이런 유형을 위한 추천</p>
            <div class="double-line"></div>
          </section>
          <p class="result-content">
            · 유형추천 1
          </p>
          <p class="result-content">
            · 유형추천 2
          </p>
        </section>
        <section class="result-btn">
          <a href="/type">
            <button>
              <div></div>
              <p>다른 결과 유형 보러가기</p>
              <div></div>
            </button>
          </a>
          <button>
            <img src="${icShare}" alt="share-icon"/>
            <p>테스트 결과 공유하기</p>
            <div></div>
          </button>
          <a href="/home">
            <button>
              <img src="${icAgain}" alt="again-icon"/>
              <p>테스트 다시하기</p>
              <div></div>
            </button>
          </a>
        </section>
      `;
  }
}
