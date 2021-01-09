# Section 3. 리액트의 특별한 문법, JSX 사용하기

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

### Todo

- [ ] `react-with-cdn.html` 내용 전체 복사해서 `react-jsx.html`로 붙여넣기
- [ ] `React.createElement` 대신 JSX로 리팩토링

## 2. JSX를 JavaScript로 통역하기

- JSX를 브라우저에서 사용하려면?

  - 바벨(Babel)이라는 통역기가 필요. 바벨이 JSX 문법을 표준 JavaScript 문법으로 바꿔줌

- [ ] [바벨REPL 사이트](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAeWMGECmAhEUoIAUADgE5zEDOAlIgN4BQiipmUIpShTziAPACM8BMAD4evRAAlMAG1lx6ZCpQB0YAIYBbTAF8J_APRD8Ccc2oBuBvoYMICSlEQOwUDTDCZSiALyIAEzgIEB03VQBzNgBRWUwwqGwATwBJAMIAcmI8AH1WDWgcgAtvTAyrBgAlTAKoABFkAFlVVjAA725mPlR0LFxTJE0dXwAiQAJxwB7OkcRDUQAaHld3T28GKyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.12&externalPlugins=)에 우리가 사용한 JSX문법 붙여넣기
- [ ] 변환된 JavaScript 우리 사이트에 붙여넣기

좋다! 그런데 매번 복사 붙여넣기를 해야하나?

## 3. 자동으로 JSX코드를 변환해보자 - 바벨 CDN

> 리액트 코드를 바꾸고 저장할 때마다 바벨이 자동으로 코드 변환하도록 세팅

- [ ] 바벨 CDN 추가 (`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`)
- [ ] 리액트 코드가 있는 script 태그 안에 `type="text/babel"` 추가

편하다! 하지만 브라우저를 열때마다 매번 코드를 변환하는 과정을 거쳐야 해서 느림. 변환된 코드를 올리면 매번 변환하는 시간을 아낄 수 있을텐데...

## 4. 자동으로 JSX코드를 변환해보자 - 바벨 설치, npm

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
  - `npx babel --watch office_button.js --out-dir babeled --presets react-app/prod` 명령어로 바벨 watch
  - (= src폴더의 소스를 react 세팅에 맞게 변환해서 babeled폴더로 옮겨라)
- [ ] 바벨로 변환된 JavaScript 소스 구경
- [ ] JavaScript로 변환된 파일을 HTML에 넣기 `<script src="./babeled/office_button.js"></script>`
- [ ] package.json 스크립트에 바벨 명령어 저장
