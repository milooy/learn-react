# Section 2. 리액트 맛보기

> 간단하게 리액트를 맛보는 섹션입니다. 첫 번째 컴포넌트를 만들고, 화면에 띄우고, 버튼을 눌러보겠습니다. 아직 코드를 완벽히 이해할 필요는 없으니 전체적인 흐름을 따라와주세요 :) 다음 섹션에서 반복학습이 기다리고 있습니다.

이번 실습에서 만들 앱

<img src="https://user-images.githubusercontent.com/3839771/103170200-d36e3f00-4885-11eb-9901-cd426ed5a06e.png" width="500">

리액트 라이브러리 + 순수 자바스크립트로 코딩!
(JSX는 다음 섹션부터 ㅎㅎ )

## 1. 내 프로젝트에 리액트 넣기 (CDN 사용)

> 리액트로 Hello world 코딩 - 리액트 라이브러리는 CDN(클라우드에 저장된 코드) 사용

- [ ] `react-with-cdn.html` 에 "hello world" h1태그 추가 및 크롬 브라우저에서 열기
- [ ] 리액트 코드 삽입 ([CDN](https://ko.reactjs.org/docs/cdn-links.html) 사용)
- [ ] 리액트가 잘 삽입되었는지 확인 (`console.log(React, ReactDOM)` 찍어보기)

## 2. 리액트로 버튼 그리기

> 빈 HTML에 리액트로 버튼 넣기

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-1.html)

- [ ] 빈 div 생성 (id는 'put_react_component_here')
- [ ] 출근도장 버튼 엘리먼트 생성 (`React.createElement`)
- [ ] 출근도장 버튼 put_react_component_here div에 넣기(`ReactDOM.render`)

## 3. 버튼 컴포넌트 만들기: Component, props

> 컴포넌트를 다양한 상황에서 재사용할 수 있도록 해주는 일등공신 props

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-2.html)

<img src="https://user-images.githubusercontent.com/3839771/103167821-d0695380-4871-11eb-9bca-ab999ecc02ab.png" width="500">

- [ ] `OfficeButton` 클래스 컴포넌트 생성
- [ ] `render` 메서드에 출근도장 버튼 엘리먼트 반환
- [ ] `put_react_component_here` div에 `OfficeButton` 컴포넌트 넣기
- [ ] `createElement` 함수 두 번째 인자에 내 이름 데이터 넘기기(`{name: "유림"}`)
- [ ] 내 이름 출근도장 버튼에 보여주기 (`this.props.name + " 출근도장"`)

## 4. 버튼 누르기: 이벤트 처리

> JavaScript 기본 이벤트 처리와 99% 동일한 리액트 이벤트

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-3.html)

- [ ] `put_react_here` div 아래에 일반 HTML 버튼 + 자바스크립트 핸들러 달기
- [ ] button 엘리먼트에 onClick 이벤트 핸들러 달기 (`console.log(e)` 찍어보기)
- [ ] 일반 자바스크립트 이벤트핸들러랑 다른 점 살펴보기
- [ ] button 엘리먼트에 onMouseEnter 이벤트 핸들러 달기

## 5. 버튼을 누른 상태로 만들기: State

> 컴포넌트 밖에서 데이터 주기: props / 컴포넌트 안에서 데이터 관리: state

[참고 코드](../../example-projects/first-project/section2/react-with-cdn-4.html)

<img src="https://user-images.githubusercontent.com/3839771/103170209-dff29780-4885-11eb-9f40-0bd6c3c3ab0f.png" width="500">

- State: 컴포넌트 내부에서 **이리 변했다, 저리 변했다 하는** 값

  - e.g. 버튼이 눌려져있냐, 안 눌려져있냐
  - e.g. 사용자가 입력중인 댓글 값
  - e.g. 쇼핑몰 리스트 정렬 기준 - 가격순, 할인순

- [ ] constructor 메서드 생성
- [ ] 기본 state 정의 (`isPressed: false`)
- [ ] console.log로 확인 - `this.state`
- [ ] 버튼 클릭하면 `isPressed`를 `true`로 만든다 (`setState` 사용)
- [ ] render 메서드에서 `isPressed`가 `true`면 '본인이름 출근했습니다" 텍스트 반환
- [ ] constructor 대신 Class field 문법으로 간단하게 처음 state를 정의해보기
