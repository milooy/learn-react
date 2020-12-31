# 5. 유저가 직접 방명록 남기기: 폼

[참고 코드](../../example-projects/react-cats/src7/components/VisitorForm/index.js)

<img src="https://user-images.githubusercontent.com/3839771/103260705-fdd50f00-49e1-11eb-9f14-4ca8ee4251b4.png" width="700">

앞 강의에서 서버 데이터를 받아와봤으니, 이번에는 유저가 직접 데이터를 입력해 서버에 전송하는 방법을 알아보겠습니다.

## 폼(Form)이란?

설문조사 하는 서비스, 구글 폼(Google form)써 보셨나요? 이처럼 사용자가 제출한 데이터를 서버에 전송하기 위한 HTML 요소가 폼 입니다.

## HTML 기본 폼 만들기

- [ ] VisitorForm 컴포넌트를 만들고 HTML의 form, input 태그를 사용하여 방명록 마크업 (React state 쓰지 말고)
- [ ] 폼을 전송(submit)하면 alert로 이메일, 내용이 뜨도록
- [ ] `e.preventDefault()`로 폼 기본전송 이벤트 막기

## 폼 데이터를 리액트로 관리하기

- [ ] '내용 삭제' 기능 만들기 - 각 input을 리액트 state로 관리하도록 리팩토링

## HTML 기본 폼과 리액트로 관리하는 폼의 차이

- `HTML 기본 폼`
  - 사용자가 입력한 데이터가 input 내부에 자체적으로 저장된다.
- `리액트가 폼 데이터를 관리하도록 업그레이드`
  - 사용자가 입력한 데이터를 리액트 state에 명시적으로 저장한다.

기본 폼은 추가적인 리액트 코딩이 없어 간편하긴 하지만, 폼 데이터를 요리조리 가공할 일이 많은 현대 웹사이트에서는 한계가 있습니다.

리액트에서는 후자를 `제어 컴포넌트`(Controlled component) 방식이라 부릅니다. 리액트가 제어하고 있다는 뜻이겠죠!
