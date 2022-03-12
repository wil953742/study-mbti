import Component from '@core/component';
import './style.scss';
import { $ } from '@util/query-selector';

import { getTriHeight, cx, cy } from '@components/graph-background';

const UNIT = 28;
const getSideLength = (point: number) => point * UNIT;

export default class SkillGraph extends Component {
  getScienceLang(point: number) {
    const [nx, ny] = [
      cx + getSideLength(point) / 2,
      cy + getTriHeight(getSideLength(point)) / 3,
    ];
    return `${nx} ${ny}`;
  }

  getLiberalLang(point: number) {
    const [nx, ny] = [
      cx - getSideLength(point) / 2,
      cy + getTriHeight(getSideLength(point)) / 3,
    ];
    return `${nx} ${ny}`;
  }

  getArtLang(point: number) {
    const [nx, ny] = [cx, cy - (2 * getTriHeight(getSideLength(point))) / 3];
    return `${nx} ${ny}`;
  }

  template(): string {
    const { science, liberal, art } = this.props.value as any;
    return `
      <svg 
        class="skill-graph" 
        width="200" 
        height="260"
        style="transform: translate(-50%, -50%) scale(0)"
      >
         <polygon
           points="${this.getArtLang(art)} ${this.getScienceLang(
      science
    )} ${this.getLiberalLang(liberal)}"
           fill="rgba(255, 98, 98, 0.8)"
         />
      </svg>
    `;
  }

  setEvent() {
    const $skillGraph = $(this.$target, '.skill-graph');
    setTimeout(() => {
      $skillGraph.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 0);
  }
}
