# 2. 리액트는 구멍 뚤린 블록

앞에서 봤던 '댓글' 리액트 코드

```JSX
function Comment() {
  return (
    <div onClick={() => alert('댓글 전송')}>
      <span id="comment_username" />
      <button />
    </div>
  )
}
```

- 위 Comment함수를 보면 알 수 있듯이, 리액트는 UI요소와 인터랙션이 담긴 블록
- 이 블록을 다양한 상황에서 유연하게 쓸 수 있도록 구멍을 뚫습니다

---

## 구멍 뚫기

주황: 댓글 값 구멍 / 파랑: 버튼 텍스트 구멍
<img src="https://user-images.githubusercontent.com/3839771/103163543-57063c80-4842-11eb-8e33-c36131dbd900.png">

- 구멍에는 상황마다 커스터마이즈 한 값들을 넣습니다

```JSX
<div>
  <Comment value="잘 봤습니다!" buttonText="댓글달기" />
  <Comment value="Thank you" buttonText="Submit" />
</div>
```

- 함수 인자로 구멍 이름을 받고, 이렇게 받은 구멍값들을 원하는 곳에 박습니다

```JSX
function Comment({value, buttonText}) {
  return (
    <div onClick={() => alert('댓글 전송')}>
      <input value={value}/>
      <button>{buttonText}</button>
    </div>
  )
}

```

---

## 기성품 블록 가져오기

- 리액트 생태계엔 다른 멋진 개발자들이 만들어놓은 기성품 블록들이 많습니다
- 검색이 가능한 드롭다운 셀렉트박스 UI를 만들라는 요구사항이 들어왔을 때
  - 물론 직접 만들 수도 있지만
  - 기성품 블록 (외부 라이브러리)를 가져다 쓸 수 있어요
    <img src="https://user-images.githubusercontent.com/3839771/103163614-6b970480-4843-11eb-8f40-4d95cd7a3ac4.png">

```JSX
import Select from 'react-select'; // 외부 라이브러리 가져오기

<Select
  options={[
    {name: '비건', desc: '채소만 섭취'},
    {name: '락토', desc: '채소, 유제품만 섭취'},
    {name: '페스코', desc: '채소, 유제품, 달걀, 어류만 섭취'},
  ]}
  defaultValue="비건"
/>
```

- 그 기성품 블록들은 대부분 무료이며(오픈소스) 매우 많습니다(큰 생태계)
