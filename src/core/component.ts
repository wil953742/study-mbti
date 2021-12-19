import { observe, observable } from './Observer';

export default class Component {
  protected $target;
  protected props: any;
  protected state: any;

  constructor($target: Element, props = null) {
    this.$target = $target;
    this.props = props;
    this.subscribe();
  }

  subscribe() {
    this.state = observable(this.initState());
    const setup = () => {
      this.render();
      this.setEvent();
      this.mounted();
    };
    observe(setup);
  }

  initState(): object {
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
