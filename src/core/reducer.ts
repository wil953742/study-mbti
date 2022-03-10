export const reducer: any = (state: any, action: any) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'SET_ROUTE':
      return {
        ...state,
        route: action.payload,
        test: { currentPage: 0, answerSheet: new Array(12).fill(null) },
      };

    case 'SET_PAGE':
      const { currentPage, selectOption } = action.payload;
      const { answerSheet } = state.test;
      !selectOption
        ? (answerSheet[currentPage] = selectOption)
        : (answerSheet[currentPage - 1] = selectOption);
      return { ...state, test: { currentPage, answerSheet } };

    case 'SET_TOAST_MSG':
      const { isToastMsgOn, isCopySuccess } = action.payload;
      return { ...state, toastMsg: { isToastMsgOn, isCopySuccess } };

    default:
      return state;
  }
};
