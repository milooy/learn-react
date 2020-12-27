# Section 3. 쾌적한 리액트 개발환경 만들기

> 섹션2에서 엘리먼트를 만들기 위해 사용했던 `React.createElement` 메서드 대신, HTML의 생김새와 더 가까운 `JSX`를 써볼거예요. 훨씬 읽기 편할거예요! 다만 사전 세팅을 조금 해줘야 합니다~

## 1. HTML처럼 생긴 자바스크립트 : JSX

리액트 앨리먼트를 만들기 위해선 `React.createElement`함수에 HTML태그이름, props(+이벤트), 태그 컨텐츠를 줄줄이 써야 했습니다.

```JSX
React.createElement(
  "button",
  {
    onClick: () => {}),
  },
  this.props.name + " 출근도장"
);
```

이는 기본 JavaScript 문법에 어긋남이 없다는 장점이 있지만, HTML태그로 그려질거란 상상이 잘 가지 않고 읽기 힘들다는 단점이 있습니다.

그래서 리액트 팀은 JavaScript에 HTML처럼 생긴 코드를 넣는 **혼종 문법**을 만들었습니다. 이를 `JSX`라고 하죠(JavaScript XML의 약자).

```JSX
var element = <button onClick={() => {}}>{this.props.name + " 출근도장"}</button>
```

- HTML이랑 비슷... 하지만 크게 다른 혁신들
  - html 태그를 변수에 넣었다(!)
  - html 태그 내부에 `{}`로 감싸 자바스크립트 표현식을 쓸 수 있다(!)
- JSX의 내부구조: 실제 HTML DOM이 아닌 일반 JavaScript 오브젝트 = DOM보다 훨씬 가볍다! = 리액트 성능의 비법
- 혼종문법 JSX를 쓰기 위해선 바벨(Babel)이라는 코드 변환기가 필요. 바벨이 JSX를 브라우저가 이해가능한 JavaScript로 바꿔줍니다.
- [ ] `react-with-cdn.html` 내용 전체 복사해서 `react-jsx.html`로 붙여넣기
- [ ] 바벨 CDN 추가 (`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`)
- [ ] 리액트 코드가 있는 script 태그 안에 `type="text/babel"` 추가
- [ ] `React.createElement` 대신 JSX로 리팩토링

## 2. 바벨 스크립트가 무엇을 해준건가요?

> 바벨이 변환한 코드 살펴보기

- 온라인에서 바벨을 돌려볼 수 있는 사이트인 [바벨REPL 사이트](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAeWMGECmAhEUoIAUADgE5zEDOAlIgN4BQiipmUIpShTziAPACM8BMAD4evRAAlMAG1lx6ZCpQB0YAIYBbTAF8J_APRD8Ccc2oBuBvoYMICSlEQOwUDTDCZSiALyIAEzgIEB03VQBzNgBRWUwwqGwATwBJAMIAcmI8AH1WDWgcgAtvTAyrBgAlTAKoABFkAFlVVjAA725mPlR0LFxTJE0dXwAiQAJxwB7OkcRDUQAaHld3T28GKyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.12&externalPlugins=)에서 `JSX`를 브라우저가 이해할 수 있는 순수 JavaScript로 바꿔보세요.
- 위에서 추가했던 바벨 CDN이 딱 이 역할을 해줍니다.
- (참고: 바벨 신화: 세상 사람들이 한 가지 언어만 쓰다가 하늘의 저주를 받아 N개의 언어를 쓰게 되어서 소통할 수 없게 되었다 from 성경)
- 하지만... CDN은 편하지만 코드 변환 속도가 느려서 사실 실무에선 사용할 수 없습니다.
- 코드를 바꿀 때마다 바벨 REPL사이트에 복사/붙여넣기를 할 수 없을텐데, 어떻게 하면 좋을까요?

## 3. 자동으로 JSX코드를 변환해보자

> 리액트 코드를 바꾸고 저장할 때마다 바벨이 자동으로 코드 변환하도록 세팅

바벨 CDN 대신 바벨을 직접 폴더에 설치해서 내 컴퓨터에서 소스를 변환해보겠습니다.
바벨은 코드를 직접 다운받는 대신 `npm`이란 프로젝트 의존성(내가 직접 짠 코드가 아닌 외부에서 다운받는 라이브러리 등)관리 툴로 설치합니다.

- [ ] `react-jsx.html`에서 바벨 CDN 스크립트를 주석처리
- [ ] [Node.js 설치](https://nodejs.org/ko/) (LTS 버전, 아니면 v8 이상). npm도 자동으로 설치됩니다.
  - Node.js는 콘솔에서 JavaScript를 돌릴 수 있는 런타임입니다. [참고 핸드북](https://joshua1988.github.io/webpack-guide/build/node-npm.html#node-js%EC%99%80-npm)
- [ ] 출근도장 소스코드를 `src/office_button.js`로 분리
- [ ] 콘솔에서 section3 폴더로 이동 후 `npm init -y` 명령어
- [ ] `npm install babel-cli@6 babel-preset-react-app@3` 명령어로 바벨 의존성 설치
- [ ] `npx babel --watch src --out-dir babeled --presets react-app/prod` 명령어로 바벨 watch (= src폴더의 소스를 react 세팅에 맞게 변환해서 babeled폴더로 옮겨라)
- [ ] 바벨로 변환된 JavaScript 소스 구경
- [ ] 변환된 파일을 HTML에 넣는다 `<script src="./babeled/office_button.js"></script>`

## 4. 리액트 개발환경 한방에 생성: Create React App

바벨을 세팅해서 JSX를 컴파일하는것도 어렵진 않았지만, 이보다 더 쉽고 완성도 높게 리액트 개발환경을 만드는 방법이 있다
리액트 팀에서 공식으로 만든 작은 리액트앱이라 생각하면 됨. 앞에 설정했던 바벨 외에도 개발할 때 유용한 세팅들이 기본으로 들어가 있음. 최신 자바스크립트 / 웹팩 / 앱 배포시 코드 최적화 등. 그리고 이 설정들이 create react app 라이브러리 내부에 숨겨져있어서 깔끔함.
npx create-react-app my-app
앞으로 예제들은 이 CRA 기반으로 할거임
