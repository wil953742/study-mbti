import Component from '@core/Component';

import Home from './home';
import Test from './test';
import Type from './type';

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

interface Path {
  mainPath: string;
  subPath: string;
}

export default class App extends Component {
  isValidPath(path: string): boolean {
    const validPath = ['home', 'test', 'type'];
    return validPath.includes(path);
  }

  initState(): object {
    const pathName: string = window.location.pathname;
    const pathNameList: string[] = pathName.split('/');
    const path: Path = { mainPath: pathNameList[0], subPath: pathNameList[1] };
    return this.isValidPath(path.mainPath)
      ? { path }
      : { mainPath: 'home', subPath: '' };
  }

  template(): string {
    return `
      <div class="app"></div>
    `;
  }

  mounted(): void {
    const $app: Element | null = this.$target.querySelector('.app');
    if (!$app) throw new Error("Can't get an app element");

    const { mainPath } = this.state;
    switch (mainPath) {
      case 'home':
        //여기도 다 history replace 하는걸 둬야 겠는걸?
        new Home($app, this.state);
        break;
      case 'test':
        //history replace 넣기
        new Test($app, this.state);
        break;
      case 'type':
        //여기도 다 history replace 하는걸 둬야 겠는걸?
        new Type($app, this.state);
        break;
      default:
        //위에서 리다이렉션하긴 함.. 그래도 혹시 모르니까? 얘도 replace
        new Home($app, this.state);
        break;
    }
  }
}
