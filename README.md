
<h1>공부 성향 MBTI 테스트 ( ver 1.0 )  <img src="https://img.shields.io/badge/version-1.0-green" /></h2>
  
| [배포서버](https://www.studymbti.shop)  | [WIKI](https://github.com/wil953742/study-mbti/wiki) 
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | 

## 📺 메인 화면
| ![공부 유형 테스트](https://user-images.githubusercontent.com/66904178/151195145-d3655064-692c-4eb9-861c-23d8ba3d56e0.gif) | ![공부 유형 테스트2](https://user-images.githubusercontent.com/66904178/151195198-1c330a09-1635-48b3-b8a9-69f1871ece9a.gif)
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
<br />

## 🤔 프로젝트 특징

### CSS 변수 정의와 반응형

- CSS 의 Responsive Unit 을 적절히 활용하여 디스플레이 크기에 맞는 화면을 구상하였습니다.
- :root tag에 사용할 값들을 변수로 정의했습니다.
- flexbox와 font에 mixin을 적용하여 코드를 단축시켰습니다.

### TypeScript의 활용

- TSconfig에 `noImplicitAny` 과 `strictNullChecks` 를 적용해 명시되지 않은 any, null 값이 없도록 처리했습니다.
- eslint 와 prettier를 이용하여 코드의 통일성을 향상시켰습니다.


### 컴포넌트 단위의 SPA

- History API 와 라우팅 상태 값을 정의하여 SPA 라우팅을 구현했습니다.
- Proxy 객체의 getter와 setter를 이용해 observer 패턴을 적용했습니다.
- 컴포넌트 class에 initState, render, mount, setEvent 함수를 정의하고 순서에 맞게 실행 순서를 정의했습니다. 
- 모든 컴포넌트에서 상태 값을 참조할 수 있는, Store 클래스를 만들었습니다.


### 가벼운 애니메이션 적용

- transition을 활용하여 repaint 단계의 지연을 이용했습니다.
- transform 값을 변경함으로써, reflow와 같은 불필요한 렌더링을 개선했습니다.


### Nginx와 Docker를 이용한 정적파일 제공 웹서버 구축

- Nginx Config 설정을 통해 모든 URL의 HTTP 접근에 대해 정적파일을 넘겨줄 수 있도록 했습니다.
- 유연한 서버 관리를 고려하여 도커 컨테이너를 사용했습니다.
- Certbot을 이용하여 SSL 인증서를 받고, docker compose 파일에 volume을 설정하여 https 프로토콜을 적용했습니다.

### 직접 디자인한 귀여운 일러스트와 글귀가 있습니다
