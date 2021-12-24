interface Props {
  state?: Object | string | number | null;
  value?: Object | string | number | null;
}

interface Questioin {
  [key: number]: {
    question: string;
    optionA: string;
    optionB: string;
  };
}

interface Answer {
  [key: number]: {
    [answer: string]: string;
  };
}
