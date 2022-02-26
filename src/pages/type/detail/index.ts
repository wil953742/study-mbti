import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { RESULT } from '@assets/text/result';
import icShare from '@assets/images/ic-share.svg';
import icAgain from '@assets/images/ic-again.svg';
import resultImg from '@assets/images/img-sample.png';

export default class Detail extends Component {
  template(): string {
    const { subTitle, mainTitle, hashtag1, hashtag2, hashtag3, strategy } =
      RESULT[this.props.value as string];

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
          <svg></svg>
        </section>
        <section class="result-overview">
          <section>
            <div class="double-line"></div>
            <p>유형 특징</p>
            <div class="double-line"></div>
          </section>
          <div>
            - 유형특징 1
          </div>
          <div>
            - 유형특징 2
          </div>
        </section>
        <section class="result-recommend">
          <section>
            <div class="double-line"></div>
            <p>이런 유형을 위한 추천</p>
            <div class="double-line"></div>
          </section>
          <div>
          - 유형추천 1
          </div>
          <div>
          - 유형추천 2
          </div>
        </section>
        <section class="result-btn">
          <button>다른 결과 유형 보러가기</button>
          <button>
            <img src="${icShare}" alt="share-icon"/>
            테스트 결과 공유하기
          </button>
          <button>
            <img src="${icAgain}" alt="again-icon"/>
            테스트 다시하기
          </button>
        </section>
      `;
  }
}
