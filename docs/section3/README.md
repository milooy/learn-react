# Section 3. 쾌적한 리액트 개발환경 만들기

> 섹션2에서 엘리먼트를 만들기 위해 사용했던 `React.createElement` 메서드 대신, HTML의 생김새와 더 가까운 `JSX`를 써볼거예요. 훨씬 읽기 편할거예요! 다만 사전 세팅을 조금 해줘야 합니다~

## 1. HTML처럼 생긴 자바스크립트 : JSX

### 리액트 엘리먼트를 만드는 두 가지 방법

- 리액트 엘리먼트 만들기: 기본 ver.
  ```JSX
  React.createElement(
    "button",
    { onClick: handleClick },
    this.props.name + " 출근도장"
  );
  ```
  - 장점: JavaScript 문법 그대로 리액트 사용
  - 단점: HTML태그로 그려질거라 상상 힘듦
- 리액트 엘리먼트 만들기: 혁신 ver.
  ```JSX
  var element =
    <button onClick={handleClick}>
      {this.props.name + " 출근도장"}
    </button>
  ```
  - 장점: HTML 태그로 그려질거라 상상 쉬움
  - 단점: JavaScript 문법으로 통역해줘야 한다

### JSX

- 리액트 팀이 만든 HTML을 닮은 JavaScript 문법, `JSX` (JavaScript XML의 약자)
- JavaScript 안에서 HTML 태그 사용 가능
  - 변수에 담을 수 있다! (`var button = <button>버튼</button>`)
  - HTML태그 내부에 `{}`로 감싸 자바스크립트 표현식을 쓸 수 있다! (`<button>{title}</button>`)
- JSX의 내부구조
  - 실제 HTML DOM이 아닌 일반 JavaScript 오브젝트 = DOM보다 훨씬 가볍다! = 리액트 성능의 비법
- JSX를 브라우저에서 사용하려면?
  - 바벨(Babel)이라는 통역기가 필요. 바벨이 JSX 문법을 표준 JavaScript 문법으로 바꿔줌

### Todo

- [ ] `react-with-cdn.html` 내용 전체 복사해서 `react-jsx.html`로 붙여넣기
- [ ] 바벨 CDN 추가 (`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`)
- [ ] 리액트 코드가 있는 script 태그 안에 `type="text/babel"` 추가
- [ ] `React.createElement` 대신 JSX로 리팩토링

## 2. 바벨 스크립트가 무엇을 해준건가요?

> 바벨이 변환한 코드 살펴보기

- 바벨이 JavaScript로 바꿔준 JSX문법 온라인으로 미리보기
  - [ ] [바벨REPL 사이트](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAeWMGECmAhEUoIAUADgE5zEDOAlIgN4BQiipmUIpShTziAPACM8BMAD4evRAAlMAG1lx6ZCpQB0YAIYBbTAF8J_APRD8Ccc2oBuBvoYMICSlEQOwUDTDCZSiALyIAEzgIEB03VQBzNgBRWUwwqGwATwBJAMIAcmI8AH1WDWgcgAtvTAyrBgAlTAKoABFkAFlVVjAA725mPlR0LFxTJE0dXwAiQAJxwB7OkcRDUQAaHld3T28GKyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.12&externalPlugins=)에 우리가 사용한 JSX문법 붙여넣기
  - 위에서 추가했던 바벨 CDN이 딱 이 역할을 해줍니다.
  - 참고: 바벨 신화: 세상 사람들이 한 가지 언어만 쓰다가 하늘의 저주를 받아 N개의 언어를 쓰게 되어서 소통할 수 없게 되었다 (출처: 성경)
- CDN 말고 다른 도구로 바벨을 써야해요
  - 하지만... CDN은 편하지만 코드 변환 속도가 느려서 사실 실무에선 사용할 수 없습니다.
  - 코드를 바꿀 때마다 바벨 REPL사이트에 복사/붙여넣기를 할 수 없을텐데, 어떻게 하면 좋을까요?

## 3. 자동으로 JSX코드를 변환해보자

> 리액트 코드를 바꾸고 저장할 때마다 바벨이 자동으로 코드 변환하도록 세팅

### 바벨로 JSX를 JavaScript로 변환하기 위해...

- 옵션1: 바벨 온라인 변환기
  - JSX 코드를 짤때마다 바벨 온라인 변환기에 붙여넣기하고 변환된 코드를 복사해서 쓴다.
- 옵션2: CDN
  - CDN을 통해 바벨 코드를 프로젝트에 넣고 자동으로 변환시킨다 (느림)
- (new!) 옵션3: 직접 설치 후 명령어로 변환
  - 바벨 코드를 내 컴퓨터에 다운로드받고 명령어로 변환시킨다.

### 라이브러리 관리 도구, npm으로 바벨 다운받기

- 프로젝트에서는 여러 라이브러리들을 사용.
- 수동으로 관리하기 귀찮다.
  - 매번 코드 찾아서 다운로드 귀찮다
  - 라이브러리 버전이 올라갈때마다 코드 갈아끼우기 귀찮다
- npm
  - 라이브러리 다운로드를 쉽게, 라이브러리 관리를 쉽게.
  - `npm install 라이브러리이름` 명령어로 라이브러리 다운
  - 설치한 라이브러리들은 `package.json`파일에 이름, 버전이 적힌다.
  - `package.json`에 적힌 라이브러리 목록 텍스트만 잘 관리하면 된다. 라이브러리 소스코드는 관리할 필요 없어짐.

### Todo

- [ ] `react-jsx.html`에서 바벨 CDN 스크립트를 주석처리
- [ ] [Node.js 설치](https://nodejs.org/ko/)
  - LTS 버전, 아니면 v8 이상
  - npm도 자동으로 설치됩니다.
  - ([Node.js](https://joshua1988.github.io/webpack-guide/build/node-npm.html#node-js%EC%99%80-npm): 콘솔에서 JavaScript를 돌릴 수 있는 런타임)
- [ ] 바벨로 코드 변환할 소스코드 파일 분리
  - 출근도장 소스코드를 `src/office_button.js`로 분리
- [ ] `package.json`파일 자동생성 명령어
  - 콘솔에서 section3 폴더로 이동 후 `npm init -y` 명령어
- [ ] 바벨 의존성 설치
  - `npm install babel-cli@6 babel-preset-react-app@3` 명령어로 바벨 의존성 설치
- [ ] 바벨 명령어로 JSX를 JavaScript로 변환
  - `npx babel --watch src --out-dir babeled --presets react-app/prod` 명령어로 바벨 watch
  - (= src폴더의 소스를 react 세팅에 맞게 변환해서 babeled폴더로 옮겨라)
- [ ] 바벨로 변환된 JavaScript 소스 구경
- [ ] JavaScript로 변환된 파일을 HTML에 넣기 `<script src="./babeled/office_button.js"></script>`
