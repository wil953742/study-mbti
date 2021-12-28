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
  (state: Obj, action: Action | null): Obj;
}
