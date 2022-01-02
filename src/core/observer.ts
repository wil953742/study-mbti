let currentFn: Fn = () => {};

export const observe = (fn: Fn): void => {
  currentFn = fn;
  fn(); // rendering => state.isToggleOn => false
  currentFn = () => {};
};

export const observable = (obj: Obj): Obj => {
  const observerMap: ObserverMap<Set<Fn>> = {};

  const state = new Proxy(obj, {
    get: (obj: Obj, prop: string) => {
      observerMap[prop] = observerMap[prop] || new Set<Fn>();
      if (currentFn) observerMap[prop].add(currentFn);
      return obj[prop];
    },

    set: (obj: Obj, prop: string, value: any): boolean => {
      if (obj[prop] === value) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      if (JSON.stringify(obj[prop]) === JSON.stringify(value)) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      obj[prop] = value;
      observerMap[prop].forEach((fn: Fn) => fn());
      return true;
    },
  });

  return state;
};
