# Section 2. 리액트 맛보기 - 실습 폴더

> 간단하게 리액트를 맛보는 섹션입니다. 첫 번째 컴포넌트를 만들고, 화면에 띄우고, 버튼을 눌러보겠습니다. 아직 코드를 완벽히 이해할 필요는 없으니 전체적인 흐름을 따라와주세요 :) 다음 섹션에서 반복학습이 기다리고 있습니다.

이번 실습에서 만들 앱

<img src="https://user-images.githubusercontent.com/3839771/103170200-d36e3f00-4885-11eb-9901-cd426ed5a06e.png" width="500">

## 1. 리액트 라이브러리 받아오기: CDN

> 리액트 코드 직접 다운로드 대신 CDN(클라우드에 저장된 리액트 코드)으로 간단하게 실습합니다.

- [ ] `react-with-cdn.html` 에 빈 HTML 껍데기 만들기(html:5 + tab으로 자동생성)
- [ ] h1태그로 Hello world 치고 브라우저에 띄우기 ([크롬](https://www.google.com/chrome/)을 사용해주세요!)
- [ ] [리액트 CDN 코드](https://ko.reactjs.org/docs/cdn-links.html) 삽입후 `console.log(React, ReactDOM)` 찍어보기

## 2. HTML에 리액트로 버튼 그리기

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-1.html)

> 빈 HTML div에 리액트로 버튼을 그릴거예요.

- [ ] 'put_react_component_here'을 id로 가진 div 생성
- [ ] React.createElement 메서드로 '출근도장' 버튼 생성
- [ ] ReactDOM.render로 출근도장 버튼을 put_react_component_here div에 그린다

## 3. 구멍 뚫린 버튼 블록 만들기: Component, props

> 컴포넌트를 다양한 상황에서 재사용할 수 있도록 해주는 일등공신이 props입니다.

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-2.html)

<img src="https://user-images.githubusercontent.com/3839771/103167821-d0695380-4871-11eb-9bca-ab999ecc02ab.png" width="500">

- [ ] React.Component 를 상속받은 `OfficeButton` 클래스(클래스 컴포넌트) 생성
- [ ] render 메서드에서 '출근도장'(React.createElement로 생성했던)버튼 리턴
- [ ] OfficeButton 컴포넌트를 put_react_component_here div에 그린다
- [ ] `{name: '내이름'}` props를 createElement 두 번째 인자에 넘기기
- [ ] 출근 도장 텍스트 앞에 name prop 보여주기(`this.props.name` - 여기서 this는 OfficeButton)

## 4. 버튼 누르기: 이벤트 처리

> JavaScript 기본 이벤트 처리와 98% 비슷하고 2% 다른 리액트 이벤트 처리

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-3.html)

- [ ] `put_react_here` div 아래에 일반 HTML 버튼 + 자바스크립트 핸들러 달기
- [ ] button 엘리먼트에 onClick 이벤트 핸들러 달기 (`console.log(e)` 찍어보기)
- [ ] 일반 자바스크립트 이벤트핸들러랑 다른 점 살펴보기
- [ ] button 엘리먼트에 onMouseEnter 이벤트 핸들러 달기 (화살표 함수로)

## 버튼을 누른 상태로 만들기: State

> 컴포넌트 외부에서 넘겨주는 데이터가 props였다면, 컴포넌트 내부에서 관리하는 데이터는 state입니다.

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-4.html)

<img src="https://user-images.githubusercontent.com/3839771/103170209-dff29780-4885-11eb-9f40-0bd6c3c3ab0f.png" width="500">

- State: 컴포넌트 내부에서 변하는 값

  - e.g. 버튼이 눌려져있냐, 안 눌려져있냐
  - e.g. 이름 입력 input에서 사용자가 입력하는 이름 값
  - e.g. 쇼핑몰 리스트 정렬 기준 - 가격순, 할인순

- [ ] constructor 메서드(컴포넌트가 생성(mount)될때 불린다)에 기본 state를 정의한다. 출근 여부를 결정하는 state인 `isInOffice: false` 추가.
  - constructor 를 제대로 실행시키기 위해 `super(props);`코드를 넣는다(상속받은 constructor 실행 위함)
- [ ] props와 this를 console.log로 찍어본다
  - this: 코드가 실행될 때 문맥(context). 여기서는 OfficeButton입니다.
- [ ] 버튼을 누르면 `isInOffice`를 `true`로 만드는 `setState`함수를 호출한다
  - state는 무조건 `setState`함수를 통해서만 업데이트할 수 있습니다.
- [ ] render 메서드에서 `isInOffice`가 `true`면 '본인이름 출근했습니다" 텍스트 반환
- [ ] constructor 대신 Class field 문법으로 간단하게 처음 state를 정의해보기
