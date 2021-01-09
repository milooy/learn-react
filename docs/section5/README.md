# 5. 만든 리액트 앱 모두에게 배포하기

## 리액트앱\_최종\_최종: 프로덕션용으로 빌드하기

Section.2 에서 Babel을 사용해 JSX 문법으로 짜여진 리액트 앱을 브라우저가 이해할 수 있는 JavaScript로 바꾼 과정 기억나시나요?

마찬가지로 우리 react-cats 앱을 브라우저가 이해할 수 있게 바꾸려면 빌드 과정을 거쳐야 합니다.

create-react app에서는 이를

```
npm run build
```

명령어로 돌릴 수 있어요. 바벨을 사용해 JSX를 JavaScript로 바꾸는것 외에도 코드 용량 줄이기, 다양한 브라우저 대응 등 코드 최적화 작업을 해줍니다.

다른 사람들도 우리 앱을 쓸 수 있도록 서버에 배포하려면 이렇게 빌드 과정을 통해 브라우저가 이해할 수 있는 코드로 바꿔야 합니다.

> [여기서 잠깐]<br/>
> Q. 왜 지금까지는 빌드 없이도 브라우저에서 잘 떴나요? <br/>
> A. Webpack dev server가 빌드해주고 있었습니다!

- [ ] react-cats 앱을 npm run build 명령어로 빌드하기

## build 폴더

명령어를 치면 프로젝트 안에 `build`란 이름의 폴더가 생깁니다. 내부구조는 다음과 같습니다. 재미로 한 번 보셔요.

- index.html: 배포한 페이지에 들어가면 보일 첫 HTML 파일입니다. `public/index.html` 파일을 기준으로 만들어졌죠.
- static/css, static/js
  - 변환된 JavaScript, css 파일들이 들어간 폴더입니다.
  - 이름에 3424324f 같은 이상한 값이 붙는 이유: 브라우저 캐싱 전략을 위해 빌드할 때마다 바뀌는 해쉬값입니다. 새롭게 빌드를 하면 코드가 바뀌었다는 뜻이니 파일 이름을 바꿔버려서 캐시 없이 브라우저가 새 js파일을 가져오도록 말이죠.
  - 이름에 chunk가 붙는 이유: node_modules에 있는 의존성 파일일 수도 있고, 코드스플리팅(빠른 로딩을 위해 파일을 나눠서 불러옴)된 파일일 수도 있습니다.
- 더 궁금하신 분들은 create-react-app의 [다큐멘테이션](https://create-react-app.dev/docs/production-build)을 참고해주세요

## Live server VS Code 익스텐션으로 빌드된 앱 브라우저에 띄워보기

빌드된 파일을 내 컴퓨터에서 미리 띄워보겠습니다.

- [ ] VSCode File > New window로 새 창 띄워서 `my-projects/react-cats/build` 폴더 열기
- [ ] [Live server 익스텐션](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 설치
- [ ] index.html 우클릭 > Open with Live Server 클릭

## 빌드 결과물 Netlify 로 배포하기

Netlify는 이렇게 만들어낸 프런트엔드 페이지를 배포할 수 있는 툴입니다. 유저가 많이 방문하지 않는 사이트라면 무료로 배포해줘서 개발 공부할 때 유용합니다.

- [ ] https://www.netlify.com/ 가입하기
- [ ] Sites 에 들어가 build 폴더 업로드하기
- [ ] Netlify가 생성해 준 url 에 접속하기
- [ ] 친구들에게 자랑하기

---

### 한 걸음 더!

지금은 새로 코드를 업데이트 하려면 매번 빌드 명령어 > Netlify사이트에 폴더 수동 업로드를 해야합니다. 코드를 계속 업데이트 하고 싶다면 매우 불편한 일이죠.

GitHub(혹은 다른 코드 호스팅 사이트) 연동을 통해 자동으로 빌드 후 배포까지 되는 사이클을 만들 수 있습니다. 관심 있는 분들은 공부해보셔요.

- [Git, GitHub 튜토리얼](https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/)
- [Netlify와 GitHub으로 리액트 앱 배포하기 튜토리얼](https://medium.com/@hshine1226/netlify%EB%A5%BC-%ED%86%B5%ED%95%B4%EC%84%9C-static-react-app-%EB%B0%B0%ED%8F%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-bd0a574c8c08)
