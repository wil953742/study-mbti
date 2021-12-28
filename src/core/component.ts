import { observe, observable } from './observer';

export default class Component {
  protected $target;
  protected props: any;
  protected state: any;

  constructor($target: HTMLElement, props: Props = { value: null }) {
    this.$target = $target;
    this.props = props;
    this.subscribe();
  }

  subscribe() {
    this.state = observable(this.initState());
    const setup = () => {
      this.render();
      this.mounted();
      this.setEvent();
    };
    observe(setup);
  }

  initState(): Object {
    return {};
  }
  template(): string {
    return '';
  }
  render(): void {
    this.$target.innerHTML = this.template();
  }
  setEvent(): void {}
  mounted(): void {}
}
