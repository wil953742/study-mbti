let currentFn: VoidFunc = () => {};

export const observe = (fn: VoidFunc): void => {
  currentFn = fn;
  fn(); // rendering => state.isToggleOn => false
  currentFn = () => {};
};

export const observable = (obj: State): State => {
  const observerMap: ObserverMap<Set<VoidFunc>> = {};

  const state = new Proxy(obj, {
    get: (obj, prop: keyof State) => {
      observerMap[prop] = observerMap[prop] || new Set<VoidFunc>();
      if (currentFn) observerMap[prop].add(currentFn);
      return obj[prop];
    },

    set: (obj, prop: keyof State, value: string | number | Route): boolean => {
      if (obj[prop] === value) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      if (JSON.stringify(obj[prop]) === JSON.stringify(value)) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      obj[prop] = value;
      observerMap[prop].forEach((fn: VoidFunc) => fn());
      return true;
    },
  });

  return state;
};
