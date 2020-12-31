# 3. 리액트는 레고 블록

> 다양한 레고 블록을 조립해서 커다란 레고 작품을 만들듯이, 다양한 리액트 블록을 조립해서 커다란 웹사이트를 만들어요

커다란 웹사이트

<img src="https://user-images.githubusercontent.com/3839771/103257121-42a57980-49d3-11eb-9256-b944f36d5257.png" width="700">

작은 블록

<img src="https://user-images.githubusercontent.com/3839771/103408391-a7b0c900-4ba5-11eb-8a7d-03a6ab8951af.png" width="300">

앞에서 봤던 '댓글' 리액트 코드

## 블록에 데이터 넘기기

<img src="https://user-images.githubusercontent.com/3839771/103408730-22c6af00-4ba7-11eb-883c-740448ab4a2d.png" width="400">

원하는 데이터를 넘겨 다양한 상황에서 블록을 쓸 수 있어요.

## 블록에 데이터 넘기기 - 리액트 코드

html 태그에 데이터를 담으면

```jsx
var 고양사진 = "https://img/1";
var 멍멍사진 = "https://img/2";

return (
  <div>
    <Story img={고양사진} onClick={() => 스토리이동(고양id)}>
      박고양
    </Story>
    <Story img={멍멍사진} onClick={() => 스토리이동(멍멍id)}>
      김멍멍
    </Story>
  </div>
);
```

props란 객체에 데이터가 담겨옵니다

```JSX
function Story(props) {
  return (
    <div onClick={props.onClick}>
      <img src={props.img}>
      <span>{props.children}<span>
      <button />
    </div>
  )
}
```

## 블록 = 컴포넌트

리액트의 컴포넌트 = UI요소와 사용자 인터렉션(클릭, 스크롤 등)이 담긴 블록

자바스크립트의 함수 혹은 클래스를 사용해 만들 수 있습니다.

```jsx
function Story(props) {
  return <div>{props.name}</div>;
}

class Story extends React.component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

---

## 기성품 블록(외부 라이브러리) 가져오기

- 리액트 생태계엔 다른 멋진 개발자들이 만들어놓은 기성품 블록들이 많습니다
- 우리 웹사이트에 셀렉트 UI를 만들어야 할 때
  - 물론 직접 만들 수도 있지만
  - 기성품 블록 (외부 라이브러리)를 가져다 쓸 수 있어요
    <img src="https://user-images.githubusercontent.com/3839771/103163614-6b970480-4843-11eb-8f40-4d95cd7a3ac4.png">
    https://react-select.com/home

> 외부에서 가져온 컴포넌트에 내 데이터 넘기기

```JSX
import Select from 'react-select'; // 외부 라이브러리 가져오기

<Select
  options={[
    {name: '비건', desc: '채소만 섭취'},
    {name: '락토', desc: '채소, 유제품만 섭취'},
  ]}
  defaultValue="비건"
/>
```

- 대부분 무료이며(오픈소스) 매우 많습니다(큰 생태계)

([import~from 문법 참고](https://ko.javascript.info/import-export))
