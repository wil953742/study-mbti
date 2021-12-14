import { observe, observable } from './observer';

export class Component {
  $target;
  props;
  state;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
  }

  init() {
    this.state = observable(this.initState());
    const setup = () => {
      this.render();
      this.setEvent();
      this.mounted();
    };
    observe(setup);
  }

  initState() {
    return {};
  }
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
  }
  setEvent() {}
  mounted() {}
}
