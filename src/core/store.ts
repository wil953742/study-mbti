import { observable } from './observer';
import { reducer } from './reducer';

const initState = (): State => {
  return {
    route: { mainPath: 'home', subPath: '', popState: false },
  };
};

class Store {
  private state: Obj;
  private frozenState: Obj = {};
  private reducer: Reducer;

  constructor(reducer: Reducer) {
    this.reducer = reducer;
    this.state = observable(reducer(initState(), null));
    this.frozenState = new Proxy(this.frozenState, {
      get: (obj: Obj, prop: string) => this.state[prop],
    });
  }

  getState = (key: string) => this.frozenState[key];

  dispatch = (action: Action) => {
    const newState = this.reducer(this.state, action);

    if (!newState) {
      return false;
    }

    Object.entries(newState).forEach(([key, value]) => {
      if (!this.state[key] || value === this.state[key]) {
      } else {
        this.state[key] = value;
      }
    });
  };
}

export const store = new Store(reducer);
