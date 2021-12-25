interface Route {
  mainPath: string;
  subPath: string;
  popState: boolean;
}

interface Action {
  type: string;
  payload: Route;
}

interface State {
  route: Route;
}

interface Reducer {
  (state: Object, action: Action | null): Object;
}
