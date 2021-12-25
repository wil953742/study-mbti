export const setRouteAction = (
  mainPath: string,
  subPath: string,
  popState: boolean
): Action => ({
  type: 'SET_ROUTE',
  payload: { mainPath, subPath, popState },
});

export const setResultAction = (answerSheet: string[]): Action => {
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
  answerSheet.forEach((answer) => {
    mbtiCnt[answer] += 1;
  });

  const mbti = Object.keys(mbtiCnt)
    .filter((key) => mbtiCnt[key] >= 2)
    .join('')
    .trim();

  return setRouteAction('type', mbti, false);
};
