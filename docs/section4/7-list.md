# 7. 배열을 돌며 컴포넌트 그리기: 리스트

[참고 코드](../../example-projects/react-cats/src3/App.js)

<img src="https://user-images.githubusercontent.com/3839771/103260705-fdd50f00-49e1-11eb-9f14-4ca8ee4251b4.png" width="700">

## 자바스크립트의 map 함수

이름을 넣으면 뒤에 꽃을 붙여주는 함수가 있습니다.

```js
function 꽃달아줘(name) {
  return name + 🌼
}
꽃달아줘("유림"); // 유림🌼
```

이름 배열이 있는데, 배열 안의 모든 이름에 이 꽃달아줘 함수를 동일하게 적용하고 싶습니다. 이럴 때 map을 쓰면 됩니다.

```js
const 이름리스트 = ["유림", "이름A", "이름B"];
이름리스트.map(꽃달아줘); // ["유림🌼", "이름A🌼", "이름B🌼"]

// 원본 배열은 변하지 않습니다.
console.log(이름리스트); // ["유림", "이름A", "이름B"];

// map내부 함수 첫 번째 인자는 배열의 원소, 두 번째 인자는 원소의 순서입니다.
이름리스트.map(function (name, index) {
  return "이름: " + name + "순서" + index;
});
```

## 리액트에서 map 활용하기

UI개발을 하다 보면 리스트를 그릴 일이 많습니다.
<img src="https://user-images.githubusercontent.com/3839771/103256933-65835e00-49d2-11eb-865a-604257410f38.png" width="700">

위 페이스북 페이지만 해도 5개가 보이네요.

1. 좌측사이드바 상단메뉴들
2. 좌측사이드바 내 바로가기들
3. 스토리들
4. 타임라인 글들
5. 우측사이드바 연락처들

이럴 때 map을 활용하면 됩니다.

```JSX
const 이름리스트 = ["유림", "이름A", "이름B"];

const 이름리스트엘리먼트 = 이름리스트.map(function(이름) {
  return <li>{이름}🌼<li>
})

// 사용
<ul>
  {이름리스트엘리먼트}
</ul>
```

## Todo

- [ ] `my-projects` 폴더의 `catsData.js` 데이터 가져오기
- [ ] 데이터에서 map을 사용해 ListRow 컴포넌트를 5개 그려주기
- [ ] map에서 넘겨준 ListRow컴포넌트에 key를 추가하기
  - key란? 배열 내에서 고유한 값을 key로 넘겨줍니다. 리액트 내부적으로 성능 향상을 위한 값입니다. 고유한 값이 정 없다면 map의 index값을 넘겨줍니다.
