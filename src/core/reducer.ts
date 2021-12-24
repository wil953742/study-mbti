export const reducer: Reducer = (state, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'SET_ROUTE':
      return { ...state, route: action.payload };

    default:
      return state;
  }
};
