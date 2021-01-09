# 4. 고양이 데이터를 서버에서 받아오기: API 연동 + 비동기 처리

[참고 코드](../../example-projects/react-cats/src7/App.js)

지금의 고양이 앱은 미리 프런트엔드에서 지정한 고양이 데이터 5개만 보여주고 있습니다.

이 데이터를 서버에서 받아와 매번 다른 고양이 사진 5개를 보여주면 어떨까요? 점점 더 쓸 만한 앱이 되어가고 있습니다~ 화이팅!

## API로 데이터 가져오기

우리는 Aden Forshaw 라는 사람이 만든 [고양이리스트 공개 API](https://thecatapi.com/)를 사용할 것입니다. (실무에서는 같은 팀 백엔드 개발자가 API를 만들어주겠죠?)

https://api.thecatapi.com/v1/images/search?limit=5&page=0

위 주소를 브라우저에서 들어가보면 고양이 사진과 id 등이 담긴 JavaScript 객체가 5개가 보입니다. 새로고침 할 때 마다 고양이가 바뀝니다!

API 주소를 통해 데이터를 비동기로 가져오려면(GET) 자바스크립트의 `fetch` 함수를 사용하면 됩니다.

(`비동기`란 단어에 익숙하지 않은 분들은 문서 하단의 '추가 설명: 비동기란? Promise?'을 참고해주세요.)

- [ ] 아래 코드 브라우저에 복사해서 돌려보기

```js
fetch("https://api.thecatapi.com/v1/images/search?limit=5&page=0")
  .then((response) => response.json())
  .then((data) => console.table(data));
```

- 응답값을 json 객체로 변환하기 위하여 then이 2번 들어갑니다
- fetch함수는 api 응답 객체가 담긴 `Promise`를 반환합니다. 이는 `then` 혹은 `async/await`를 통해 빼내올 수 있습니다.

- [ ] 비동기로 cat api를 호출하는 fetchCats 함수 생성
- [ ] 결과 array를 `cats` state에 업데이트
- [ ] `componentDidMount` 생명주기 메서드에서 fetchCats 함수 호출
- [ ] cats가 빈 array면 '로딩중' 띄워주기
  - 참고: 빈 array를 로딩중이라 판단은 아쉬운 점이 있습니다. 로딩이 끝났는데도 결과가 빈 array인 경우를 처리 못하기 때문이죠. api 로딩 시작에 true, 로딩 끝나는 시점에 false가 되는 `isLoading` state를 추가하면 더 정확히 판단할 수 있습니다.
- [ ] try catch를 사용하여 api 에러 처리

---

## 추가 설명: 비동기란? Promise?

- 서버에 api를 부르면 결과가 오기까지 시간이 걸리겠죠? 그 다음 JavaScript코드를 실행시키지 않고 오매불망 기다리면 UI 인터렉션이 막혀 아주 답답할 것입니다.
  - 이를 기다리지 않고 다른 코드를 실행하다가 응답이 오면 그 때 다시 돌아가서 작업하는게 '비동기 처리'입니다.
- 참고하면 좋은 자료
  1. [자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  2. [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
  3. [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

---

### 한 걸음 더: 로딩 애니메이션

api가 로딩되는 중이면 '로딩중'이라는 텍스트를 띄워줬습니다. 더 나은 유저 경험을 위해서는 로딩중인 상태를 어떻게 보여주면 될까요?

1. 스피너 애니메이션
   <img src="https://user-images.githubusercontent.com/3839771/103389885-dce0fb00-4b54-11eb-8750-53b87d234376.gif" width="700">

   - 기본적인 로딩 애니메이션입니다. 데이터 로딩이 필요한 컴포넌트가 로딩되는동안 뱅글뱅글 도는 스피너를 대신 보여주는거죠.
   - 간단하고 어디든 쓸 수 있다는 장점이 있지만, 너무 많아지면 앱이 느린것처럼 보이고 무엇을 보여주기 위해 로딩을 기다리고 있어야 하는지 모른다는 단점이 있습니다.

2. 스켈레톤(뼈대) 애니메이션
   <img src="https://user-images.githubusercontent.com/3839771/103388616-5aa10880-4b4d-11eb-853f-2da966b15c06.gif" width="700">

   - 스피너 다음으로 트렌드가 된 로딩 애니메이션입니다. 컴포넌트와 비슷하게 생겼지만 데이터가 비어있는 뼈대 컴포넌트를 미리 보여주는거죠.
   - 데이터 없이도 비슷한 UI가 먼저 뜨니까 앱이 빠르게 로딩되는것처럼 느껴집니다. 다만 매 컴포넌트마다 뼈대 컴포넌트를 추가적으로 생성해줘야해서 작업 시간이 추가됩니다.

3. 아무것도 안 보여주다 최대한 빨리 렌더해서 보여주기
   <img src="https://user-images.githubusercontent.com/3839771/103389888-deaabe80-4b54-11eb-814d-c783a9b1b963.gif" width="700">
   - 조금 허무하게 들릴 수 있지만, 가장 최근의 로딩 트렌드입니다(ㅎㅎ). 최근의 페이스북이 이 방식을 쓰고 있습니다.
   - 페이스북도 옛날에는 스피너를 썼고, 그보다 덜 옛날에는 스켈레톤으로 로딩 애니메이션을 보여줬습니다.
   - 하지만 페이스북 pc화면의 컴포넌트가 너무도 많아(스토리, 포스트, 친구목록) 이들을 각각 비동기로 로드하면 애니메이션이 이쪽저쪽 나왔다 사라졌다 하는 시각적 불편함이 있었습니다. 이 때문에 오히려 더 앱이 느린것처럼 보일때도 있었죠.
   - 그래서 코드의 성능을 개선하고, 브라우저 최적화 및 캐싱을 강력하게 해서 앱을 한 번에 최대한 빠르게 띄우는 방법으로 진화시켰습니다.
   - 리액트에서는 `Suspense`라는 기능으로 이를 편하게 구현할 수 있는데요, 아직 실험 단계라서 바로 사용하기엔 무리가 있지만 재미있는 접근방식이니 시간 되실 때 읽어보는걸 추천드립니다 ([공식 문서 링크](https://ko.reactjs.org/docs/concurrent-mode-suspense.html))
