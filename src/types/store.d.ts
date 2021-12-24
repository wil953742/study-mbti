interface Route {
  mainPath: string;
  subPath: string;
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
