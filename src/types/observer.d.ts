interface Fn {
  (): void;
}

interface ObserverMap<T> {
  [key: string]: T;
}

interface Obj {
  [key: string]: string | number;
}
