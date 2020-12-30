# 6. 재사용 가능한 UI 블록: 컴포넌트

[참고 코드](../../example-projects/react-cats/src2/App.js)

<img src="https://user-images.githubusercontent.com/3839771/103260705-fdd50f00-49e1-11eb-9f14-4ca8ee4251b4.png" width="700">
<img src="https://user-images.githubusercontent.com/3839771/103260699-f9105b00-49e1-11eb-8bee-244cd358e23f.png" width="700">

- [ ] 처음에는 state와 props 생각하지 말고 ListRow 컴포넌트 만들기. HTML태그와 CSS로 원하는 UI 먼저 만들어요.
  - 하트는 🤍 이 이모지를 복사해다 쓰세요
- [ ] index.css에 필요한 태그 스타일 리셋 (h1, ul, li 등)
- [ ] ul 태그 안에 ListRow 컴포넌트 2개 넣기. 고양이 이미지 주소는 아래 참고

  ```js
  // NOTE: const에 관한 설명은 문서 하단을 참고해주세요
  const cat1url =
    "https://user-images.githubusercontent.com/3839771/103185428-c4c46e00-48ff-11eb-8b1f-2d1cda61f383.jpg";

  const cat2url =
    "https://user-images.githubusercontent.com/3839771/103185434-c726c800-48ff-11eb-8312-38cd1bf3d707.jpeg";

  const cat1Id = "1a";
  const cat2Id = "1b";
  ```

- [ ] prop으로 id, 이미지 url 전달하여 컴포넌트 2벌 그리기
- [ ] 인라인 스타일 적용해보기
- [ ] id값을 포맷해주는 util함수 만들기(e.g. "1a"를 "#id1a"로 바꿔주기)
- [ ] MainCard 컴포넌트도 만들기

---

## 참고: const가 뭐예요?

값을 바꾸지 않을 상수는 `var`대신 `const` (상수 - constant의 약자)로 선언합니다. const로 선언한 변수에 새로운 값을 할당하려 하면 에러를 내줘요~

바꿀 상수는 `let`으로 선언합니다. `var`는 이제 바이바이

```js
const defaultCatImg = "https://image/123";
let replaceableCatImg = "https://image/456";

defaultCatImg = "foo"; // 에러
replaceableCatImg = "koo"; // 성공
```

```js
const cat = {
  name: "호떡",
  img: "https://img/123",
};
cat.name = "꿀떡"; // 성공 - 객체 내부 값이랑은 상관 없어요!
cat = { name: "foo" }; // 에러
```
