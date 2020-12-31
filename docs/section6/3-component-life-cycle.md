# 3. 컴포넌트 살았다 죽었다: 생명주기

[참고 코드](../../example-projects/react-cats/src6/components/Clock/index.js)

<img src="https://user-images.githubusercontent.com/3839771/103260705-fdd50f00-49e1-11eb-9f14-4ca8ee4251b4.png" width="700">

## 1초에 한번씩 현재시간을 다시 그려주세요

"시계가 째깍째깍 가도록 해주세요"란 요구사항이 들어왔습니다. 이를 프런트엔드 개발자 언어로 수정하면 "1초에 한번씩 현재시간을 다시 그려주세요" 가 되겠죠?

1초에 한 번씩 특정 함수를 부르는 JavaScript API는 `setInterval`입니다.

```js
setInterval(function () {
  //n초마다 불리길 원하는 동작
}, 원하는주기);
```

리액트 코드에 적용시키면 대략 다음과 같겠죠?

```jsx
setInterval(function () {
  setState({ 현재시간: new Date() });
}, 1000);

<div>{현재시간}</div>;
```

그런데 이 setInterval 함수는 어디에 놓아야 할까요? render 메서드 내부에? 안됩니다. 처음에 한 번만 세팅되면 되는데 render함수 안에 두면 컴포넌트가 다시 그려질때마다 매번 새로운 setInterval 함수를 만들거예요.

컴포넌트가 생겼을 때 단 한 번 부를 방법이 있을까요?

## 컴포넌트가 나타났다: componentDidMount()

`componentDidMount`는 컴포넌트가 리액트 앱에 나타났을 때 불리는 메서드입니다. '나타났다'를 더 정확히 말하면 'DOM에 그려지는(렌더링되는)'시점이고, 이는 리액트에서 `마운팅(Mounting)`이라 합니다.

## Todo

- [ ] Clock 컴포넌트 생성
  - 현재 시각(`new Date().toLocaleTimeString()`)을 렌더합니다.
- [ ] `componentDidMount` 생명주기 메서드 추가
- [ ] setInterval 로 1초(1000ms)에 한 번씩 현재시각 state 변경하기

> [여기서 잠깐] <br/>
> Q. `constructor`에 넣으면 안되나요? <br/>
> A. `constructor`도 컴포넌트 처음에 단 한 번 불리는 메서드인건 맞습니다. `componentDidMount`가 마운트 직후에 불린다면 `constructor`는 마운트되기 전에 불리죠. 하지만 마운트도 되기 전에 동적으로 state가 변경되는걸 피하기 위해 리액트는 constructor에서 setState함수를 호출하는걸 막아놨습니다.

[참고하면 좋을 아티클: Constructor vs componentWillMount vs componentDidMount - 비동기 콜은 어디서?
](https://medium.com/@santoshpunase/integrating-apis-in-react-js-constructor-vs-componentwillmount-vs-componentdidmount-e0b98c3efecd)

## 컴포넌트가 사라진대: componentWillUnmount()

앞서 우리는 `setInterval`함수를 사용해 1초에 한번씩 `setState`로 Clock 컴포넌트 상태를 바꿨습니다.

그런데 Clock 컴포넌트가 사라지면 어떨까요? 우리는 `setInterval`로 설정한 타이머도 함께 사라지길 기대하지만, 이는 비동기 함수기 때문에 타이머는 브라우저에 계속 남아있습니다.

그리고 사라진 Clock 컴포넌트에 1초에 한번씩 `setState`를 시도하고, 우리 앱 성능이 나빠지겠죠(ㅠㅠ)

그래서 컴포넌트가 사라지기 전에 `setInterval` 타이머를 명시적으로 지우는 코드를 추가해야 합니다.

컴포넌트가 사라질때(DOM에서 지워질때(언마운트-unmount)) 불리는 생명주기 메서드는 `componentWillUnmount()`입니다. 여기서 타이머를 삭제해보아요.

## Todo

- [ ] Clock을 누르면 Clock이 사라지도록 코드 (App컴포넌트에 `showClock` state로 관리)
- [ ] 'unmounted된 컴포넌트에는 setState을 할 수 없습니다' 브라우저 워닝 확인
- [ ] setInterval 타이머를 this.timer에 저장
- [ ] componentWillUnmount에서 this.timer `clearInterval`함수로 삭제
