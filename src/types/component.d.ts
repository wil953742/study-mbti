interface Props {
  state?: NoKidsObject | string | number | null;
  value?: NoKidsObject | string | number | null;
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
    subTitle: string;
    mainTitle: string;
    hashtag1: string;
    hashtag2: string;
    hashtag3: string;
    overview: string[];
    recommend: string[];
  };
}
