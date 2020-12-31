# 2. HTML처럼 생긴 특별한 자바스크립트 문법

리액트는 HTML처럼 생긴 특별한(혼종...) 자바스크립트 문법인 JSX를 사용할 수 있습니다.

이 문법이 UI를 그려내는데 일반 자바스크립트보다 얼마나 특화되어있는지 간단히 코드를 보겠습니다. 코드 이해보다는 두 문법의 차이에 집중해주세요 :)

> 자바스크립트로 만들고 싶은 목표 HTML

```html
<h1>댓글 작성</h1>
<div class="comment">
  댓글내용
  <button onclick="clickLike(id)">좋아요</button>
</div>
```

## 리액트로 댓글 UI 만들기

> HTML

```html
<h1>댓글 작성</h1>
<!-- 댓글을 넣을 빈 공간 -->
<div id="comment"></div>
```

> 리액트(JSX 문법 사용)

```jsx
function Comment(props) {
  return (
    <div>
      {props.댓글내용}
      <button onClick={() => clickLike(id)}>좋아요</button>
    </div>
  );
}
```

자바스크립트 코드인데 HTML과 거의 동일!

## 리액트 없이 일반 자바스크립트로 댓글 UI 만들기

> HTML

```html
<h1>댓글 작성</h1>
<!-- 댓글을 넣을 빈 공간 -->
<div id="comment"></div>
```

> 자바스크립트

```js
var commentTarget = document.getElementById("comment"); // HTML에 댓글을 박아넣을 빈 공간 찾기

var makeContainer = document.createElement("div"); // 댓글 상자
var makeButton = document.createElement("button"); // 좋아요 버튼

comment.appendChild(makeContainer); // 빈 공간에 댓글 상자 넣기
makeDiv.appendChild(makeButton); // 댓글 상자에 좋아요 버튼 넣기

makeBtn.addEventListner("click", clickLike(id)); // 좋아요 버튼 클릭
```

코드가 어떻게 UI(HTML)이 될지 예측하기 힘듦
