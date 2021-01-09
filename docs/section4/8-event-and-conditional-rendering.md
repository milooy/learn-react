# 8. 좋아요 누르기: 이벤트, 조건부 렌더링

[참고 코드](../../example-projects/react-cats/src4/components/ListRow/index.js)

<img src="https://user-images.githubusercontent.com/3839771/103260705-fdd50f00-49e1-11eb-9f14-4ca8ee4251b4.png" width="700">

- [ ] isLiked state 추가. 초기값은 false
- [ ] 하트 버튼에 onClick 이벤트 달기
- [ ] 클릭이벤트 함수 내부에서 올바른 this를 사용하기 위해 bind(this) 달아주기
- [ ] 클릭이벤트가 불리면 isLiked를 true로 변경
- [ ] setState 내부를 함수형태로 리팩토링
- [ ] bind를 constructor 로 옮기기 (성능개선)
- [ ] 메서드를 화살표함수로 바꾸고 bind(this) 없애보기

  \*참고: 클래스에 메서드를 정의하는 세 가지 방법

  ```js
  handleClick1() {};
  handleClick2 = function() {};
  handleClick3 = () => {};
  ```

  handleClick3은 화살표함수 덕에 bind(this)없이도 this가 상위컨텍스트(ListRow)로 잘 잡힙니다.

## 참고 - bind(this)를 왜 하나요?

> Q. **render함수** 내부에선 `this.setState`, `this.props`, `this.state`, `this.내가정의한메서드` 등 잘 불렸는데... **내가 정의한 메서드**에서는 이들이 오류가 나요!

> A. this가 서로 다르기 때문입니다.

- render함수 내부에선 this가 해당 클래스(e.g. `ListRow`)입니다.
- 그런데 내가 정의한 메서드(e.g. `handleLikeClick`함수)에선 **this가 ListRow가 아닙니다.** (handleLikeClick가 불리는 시점에 this가 바뀌어버림 ㅠㅠ)
- 그래서 this를 ListRow로 고정시키기 위한 코드가 `handleLikeClick.bind(this)` 입니다. this가 ListRow인곳에서 이 코드를 넣으면 됩니다(render함수, constructor);

처음에는 이해하기 조금 어려울 수 있습니다 ㅎㅎ this에 대한 더 자세한 설명이 Section 6에 있으니 일단 이정도만 알고 넘어가시면 되어요, 화이팅! 💪
