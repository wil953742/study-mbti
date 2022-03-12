import Component from '@core/component';
import './style.scss';

export const [cx, cy] = [100, 130];
export const getTriHeight = (sideLength: number) => {
  return (sideLength * Math.sqrt(3)) / 2;
};
const BACKGROUND_SIDE_LENGTH = [150, 120, 90, 60, 30, 3];

export default class GraphBackground extends Component {
  calcEqualTrialDots(sideLength: number): string {
    const [nx1, ny1] = [cx, cy - (2 * getTriHeight(sideLength)) / 3];
    const [nx2, ny2] = [cx - sideLength / 2, cy + getTriHeight(sideLength) / 3];
    const [nx3, ny3] = [cx + sideLength / 2, cy + getTriHeight(sideLength) / 3];
    return `${nx1} ${ny1}, ${nx2} ${ny2}, ${nx3} ${ny3}, ${nx1} ${ny1}`;
  }

  getPolylineTemplate(sideLength: number): string {
    return `
    <polyline fill="none" stroke="black" points="${this.calcEqualTrialDots(
      sideLength
    )}" />
  `;
  }

  template(): string {
    return `
      <svg width="200" height="200">
        ${BACKGROUND_SIDE_LENGTH.map((sideLength) => {
          return this.getPolylineTemplate(sideLength);
        })} 
      </svg>
    `;
  }
}
