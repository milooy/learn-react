# 1. 진화하는 웹 프론트엔드

### 먼 옛날의 웹: 움직임 小

(많이 먼 옛날은 아니예요. 1989년 ㅎㅎ)

<img src="https://user-images.githubusercontent.com/3839771/103162295-130b3b80-4832-11eb-8495-1215a01eae77.png" width="200">

- 웹의 기원: 물리학자들이 편하게 논문 교환하기 위해 만듦
- URL로 들어가면 논문 내용만 보여지면 됨. 사용자가 크게 인터렉션 할 일X. 하이퍼링크 누르면 다른 URL로 이동하는 정도의 움직임.

### 덜 옛날의 웹: 움직임 中

<img src="https://user-images.githubusercontent.com/3839771/103162355-dee44a80-4832-11eb-960e-34c4b4b10955.png" width="200">

- 웹의 대중화. 더 많은 것들을 웹사이트에 원하게 됨.
- 원하는 인터랙션: 댓글을 남기면 페이지 새로고침 없어도 바로 보였으면 좋겠다.
- 페이지 첫 로드때는 댓글X -> JavaScript를 사용하여 HTML에 동적으로 댓글 삽입
- JavaScript를 점점 더 복잡하게 사용하며 jQuery 인기 Up: 편하게 UI를 조작할 수 있게 됨.

### 현재의 웹: 움직임 大

<img src="https://user-images.githubusercontent.com/3839771/103162356-e572c200-4832-11eb-9c06-dcf806ee2901.png" width="200">

- 더 많은 인터랙션 기대 (실시간 채팅, 게임, 그림 그리기, 페이스북 타임라인)
- JavaSript/jQuery로 HTML 요소 직접 조작에 한계가 왔다. 한 화면에서 움직여야 할 요소들이 과하게 많아짐.

---

### 움직이는 UI를 편하게 개발할 수 있는 JavaScript 라이브러리, React

- 자바스크립트만으로 댓글 UI 개발

  HTML

  ```html
  <div>논문내용</div>
  <!-- 댓글을 동적으로 넣을 빈 공간 -->
  <div id="comment"></div>
  ```

  JavaScript

  ```js
  var commentTarget = document.getElementById("comment"); // HTML에 댓글을 박아넣을 빈 공간 찾기

  var makeContainer = document.createElement("div"); // 댓글 상자
  var makeUser = document.createElement("span"); // 댓글 유저이름
  var makeButton = document.createElement("button"); // 전송 버튼

  makeMsg.className = "comment_username"; // 클래스이름 추가
  comment.appendChild(makeContainer); // 빈 공간에 댓글 상자 넣기
  makeDiv.appendChild(makeUser); // 댓글 상자에 유저이름 넣기
  makeDiv.appendChild(makeButton); // 댓글 상자에 전송 버튼 넣기

  makeBtn.addEventListner("click", (event) => {
    alert("댓글 전송");
  }); // 댓글버튼 누르면 댓글 전송
  ```

  - JavaScript로 UI (HTML 코드)를 생성하기 위해 예측하기 힘든 코드를 작성해야 합니다.

- 리액트를 사용하여 댓글 개발
  HTML (동일)

  ```html
  <div>논문내용</div>
  <!-- 댓글을 동적으로 넣을 빈 공간 -->
  <div id="comment"></div>
  ```

  JavaScript(React)

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

  - HTML처럼 보이는 JavaScript 코드 작성 가능. 직관적으로 UI를 상상할 수 있습니다.
  - 공식 사이트의 소개: '사용자 인터페이스(User Interface - UI)를 만들기 위한 JavaScript 라이브러리'
    <img src="https://user-images.githubusercontent.com/3839771/103163437-3689b280-4841-11eb-8c71-c5528967403d.png">
