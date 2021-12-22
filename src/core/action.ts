export const setRouteAction = (mainPath: string, subPath: string): Action => ({
  type: 'SET_ROUTE',
  payload: { mainPath, subPath },
});
