export const reducer: any = (state: any, action: any) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'SET_ROUTE':
      return { ...state, route: action.payload };

    case 'SET_PAGE':
      const { currentPage, selectOption } = action.payload;
      const { answerSheet } = state.test;
      !selectOption
        ? (answerSheet[currentPage] = selectOption)
        : (answerSheet[currentPage - 1] = selectOption);
      return { ...state, test: { currentPage, answerSheet } };

    default:
      return state;
  }
};
