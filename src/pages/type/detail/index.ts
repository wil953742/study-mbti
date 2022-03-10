import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';
import { RESULT } from '@assets/text/result';
import icShare from '@assets/images/ic-share.svg';
import icAgain from '@assets/images/ic-again.svg';
import resultImg from '@assets/images/img-sample.png';
import ToastMessage from '@components/toast-message';
import SkillGraph from '@components/skill-graph';

const successCopyMsg = `링크가 클립보드에 복사되었습니다`;
const failCopyMsg = `복사가 실패했습니다! 다시 시도해 주세요`;

export default class Detail extends Component {
  resultContentGenerator(contentList: string[]) {
    let string = ``;
    contentList.forEach((content) => {
      string += `<p class="result-content">${content}</p>`;
    });
    return string;
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
        <section class="success-toast-msg" style="opacity: 0%; transform: translateX(100px)"></section>
        <section class="fail-toast-msg" style="opacity: 0%; transform: translateX(100px)"></section>
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
        <section class="result-graph"></section>
        <section class="result-overview">
          <section>
            <div class="double-line"></div>
            <p>유형 특징</p>
            <div class="double-line"></div>
          </section>
          ${this.resultContentGenerator(overview)}
        </section>
        <section class="result-recommend">
          <section>
            <div class="double-line"></div>
            <p>이런 유형을 위한 추천</p>
            <div class="double-line"></div>
          </section>
          ${this.resultContentGenerator(recommend)}
        </section>
        <section class="result-btn">
          <a href="/type">
            <button>
              <div></div>
              <p>다른 결과 유형 보러가기</p>
              <div></div>
            </button>
          </a>
          <button id="copy-link">
            <img src="${icShare}" alt="share-icon"/>
            <p>링크 복사</p>
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

  setEvent() {
    const $successToastMsg = $(this.$target, '.success-toast-msg');
    const $failToastMsg = $(this.$target, '.fail-toast-msg');
    const $btnCopyLink = $(this.$target, '#copy-link');

    const ComeMessageUp = ($target: HTMLElement) => {
      $target.style.transform = 'translateX(0)';
      $target.style.opacity = '100%';
    };

    const goMessageDown = ($target: HTMLElement) => {
      $target.style.transform = 'translateX(100px)';
      $target.style.opacity = '0%';
    };

    const copyToClipboard = (event: any) => {
      const textAreaElement = document.createElement('textarea');
      document.body.appendChild(textAreaElement);
      textAreaElement.value = window.location.href;
      textAreaElement.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textAreaElement);
      result ? ComeMessageUp($successToastMsg) : ComeMessageUp($failToastMsg);

      setTimeout(() => {
        result ? goMessageDown($successToastMsg) : goMessageDown($failToastMsg);
      }, 1000);
    };
    $btnCopyLink.addEventListener('click', copyToClipboard);
  }

  mounted() {
    const $successToastMsg = $(this.$target, '.success-toast-msg');
    const $failToastMsg = $(this.$target, '.fail-toast-msg');
    const $resultGraph = $(this.$target, '.result-graph');
    new ToastMessage($successToastMsg, { value: successCopyMsg });
    new ToastMessage($failToastMsg, { value: failCopyMsg });
    new SkillGraph($resultGraph);
  }
}
