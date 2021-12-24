export const $ = ($target: HTMLElement, element: string): HTMLElement => {
  const $element: HTMLElement | null = $target.querySelector(element);
  if (!$element) throw new Error(`Can't get an ${element} element`);
  return $element;
};

type MBTI =
  | 'ISTP'
  | 'ISTJ'
  | 'INTP'
  | 'ESTP'
  | 'ESTJ'
  | 'ENTP'
  | 'INTJ'
  | 'ENTJ'
  | 'ENFP'
  | 'ISFP'
  | 'ESFP'
  | 'ESFJ'
  | 'INFP'
  | 'ISFJ'
  | 'ENFJ'
  | 'INFJ';
