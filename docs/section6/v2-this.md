# 2. 상황에 따라 달라지는 부모: ‘this’

## this란?

부모를 가리킵니다. 단, 그 부모는 내 현재 상황에 따라 바뀝니다(!)

1. 제일 바깥에서의 this

```js
/** 1. 제일 바깥에서의 this */
console.log(this); // Window (Node.js라면 {})
```

2. 객체 내부에서 this 부르기

```js
var author = {
  name: "yurim",
  sayHi: function () {
    return this.name;
  },
};
console.log(author.sayHi()); // yurim (this는 author)
```

3. 객체 내부가 아닌 곳에서 this 부르기

```js
var sayHiToAuthorFail = author.sayHi; // 변수에 저장
// 변수에 저장된 함수를 밖에서 호출
console.log(sayHiToAuthorFail()); // undefined (this는 Window. Window엔 name이 없으니까 undefined)
```

4. 변수 저장 시점에 원하는 상황(this)고정

```js
var sayHiToAuthorSuccess = author.sayHi.bind(author);
console.log(sayHiToAuthorSuccess()); // yurim
```

5. 리액트 예제

```jsx
import React from "react";

/** 1. 클래스에서의 this 사용 */
class ListRow extends React {
  name = "yurim";

  sayHi() {
    // 2. this가 ListRow로 넘어와서 this.state에 접근 가능하다.
    console.log(this.state.name);
  }
  sayBye = () => {
    // 3. bind해주지 않아도 this가 ListRow로 잡힌다. 화살표 함수는 언제나 상위 스코프의 this를 가리키기 때문.
    console.log(this.state.name);
  };
  render() {
    // 1. sayHi를 사용하는 시점에 this(ListRow)를 고정시켜준다
    return (
      <li onClick={this.sayHi.bind(this)} onBlur={this.sayBye}>
        hi
      </li>
    );
  }
}
```
