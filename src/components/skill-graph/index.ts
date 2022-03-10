import Component from '@core/component';
import './style.scss';

import { store } from '@core/store';

export default class SkillGraph extends Component {
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
    const toastMsg = this.props.value as string;
    return `
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
    `;
  }
}
