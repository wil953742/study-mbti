import { observe, observable } from './Observer';

export default class Component {
  protected $target;
  protected props;
  protected state;

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
  setComponentEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => {
      console.log('closer test : ', children);
      return children.includes(target) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) return false;
      callback(e);
    });
  }
}
