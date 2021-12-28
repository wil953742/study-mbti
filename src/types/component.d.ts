interface Props {
  state?: Obj | string | number | null;
  value?: Obj | string | number | null;
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

interface Result {
  [mbti: string]: {
    title: string;
    hashtag: string;
    strategy: string;
  };
}
