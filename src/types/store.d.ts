interface VoidFunc {
  (): void;
}

interface ObserverMap<T> {
  [key: string]: T;
}

interface NoKidsObject {
  [key: string]: string | number;
}

interface Route {
  mainPath: string;
  subPath: string;
  popState: boolean;
}

interface Action {
  type: string;
  payload: Route;
}

interface CommonState {
  route: Route;
}

type State = NoKidsObject | CommonState;

interface Reducer {
  (state: State, action: Action | null): State;
}
