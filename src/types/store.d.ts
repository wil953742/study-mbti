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

interface ToastMsg {
  isToastMsgOn: boolean;
  isCopySuccess: boolean;
}

interface Action {
  type: string;
  payload:
    | Route
    | { currentPage: number; selectOption: string | null }
    | ToastMsg; //손 보기
}

interface CommonState {
  route: Route;
  test?: Test;
  toastMsg: ToastMsg;
}

type State = NoKidsObject | CommonState;

interface Reducer {
  (state: State, action: Action | null): State;
}
