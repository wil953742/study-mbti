import { ANSWER } from '@assets/text/answer';

export const setRouteAction = (
  mainPath: string,
  subPath: string,
  popState: boolean
): Action => ({
  type: 'SET_ROUTE',
  payload: { mainPath, subPath, popState },
});

export const setResultAction = (answerSheet: string[]): Action => {
  const mbtiAnswerSheet = answerSheet.map((val, idx) => ANSWER[idx][val]);
  const mbtiCnt: { [key: string]: number } = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  mbtiAnswerSheet.forEach((answer: string) => {
    mbtiCnt[answer] += 1;
  });

  const mbti = Object.keys(mbtiCnt)
    .filter((key) => mbtiCnt[key] >= 2)
    .join('')
    .trim();

  return setRouteAction('type', mbti, false);
};

export const setPageAction = (
  currentPage: number,
  selectOption: string | null
): Action => {
  return {
    type: 'SET_PAGE',
    payload: { currentPage, selectOption },
  };
};

export const setTestInit = () => {
  return {
    type: 'SET_TEST_INIT',
    payload: {},
  };
};
