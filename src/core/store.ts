import { observable } from './observer';
import { reducer } from './reducer';

const initState = (): CommonState => {
  return {
    route: { mainPath: 'home', subPath: '', popState: false },
  };
};

class Store {
  private state: CommonState;
  private frozenState: CommonState = Object.assign(initState());
  private reducer: Reducer;

  constructor(reducer: Reducer) {
    this.reducer = reducer;
    this.state = observable(reducer(initState(), null)) as CommonState;
    this.frozenState = new Proxy(this.frozenState, {
      get: (obj: CommonState, prop: keyof CommonState) => this.state[prop],
    });
  }

  getState = (key: keyof CommonState) => this.frozenState[key];

  dispatch = (action: Action) => {
    const newState = this.reducer(this.state, action) as CommonState;

    if (!newState) {
      return false;
    }

    Object.entries(newState).forEach(
      ([key, value]: [key: keyof CommonState, value: Route]) => {
        if (!this.state[key] || value === this.state[key]) {
        } else {
          this.state[key] = value;
        }
      }
    );
  };
}

export const store = new Store(reducer);
