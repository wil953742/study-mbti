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

interface Test {
  currentPage: number;
  answerSheet: (null | string)[];
}

interface Action {
  type: string;
  payload: Route | { currentPage: number; selectOption: string | null }; //손 보기
}

interface CommonState {
  route: Route;
  test?: Test;
}

type State = NoKidsObject | CommonState;

interface Reducer {
  (state: State, action: Action | null): State;
}
