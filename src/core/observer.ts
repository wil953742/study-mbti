interface Fn {
  (): void;
}

let currentFn: Fn = null;

export const observe = (fn: Fn): void => {
  currentFn = fn;
  fn();
  currentFn = null;
};

export const observable = (obj: object): object => {
  const observerMap = {};

  const state: object = new Proxy(obj, {
    get: (obj: object, prop) => {
      observerMap[prop] = observerMap[prop] || new Set();
      if (currentFn) observerMap[prop].add(currentFn);
      return obj[prop];
    },

    set: (obj: object, prop, value): boolean => {
      if (obj[prop] === value) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      if (JSON.stringify(obj[prop]) === JSON.stringify(value)) return true; // 같은 값으로 업데이트하는 경우 함수가 재실행 되는 것을 방지
      obj[prop] = value;
      observerMap[prop].forEach((fn: Function) => fn());
      return true;
    },
  });

  return state;
};
