# 3. create-react-app 으로 만든 앱 뜯어보기

## 프로젝트 구조

- `.gitignore`
  - 추후에 프로젝트를 Git에 올릴 때 올리고싶지 않은 파일들을 적어둡니다. (e.g. /node_modules (의존성들 설치 폴더), /build (빌드 결과물))
  - 리액트 프로젝트에서 흔히들 제외하는 파일 이름들을 자동으로 저장해줬습니다.
- `package.json`
  - 프로젝트 개발에 관련된 데이터들이 적혀있습니다.
    - 버전이 몇인지(version)
    - 어떤 외부 라이브러리를 써야하는지(dependencies)
    - 개발자가 사용할 수 있는 명령어들은 뭐가 있는지(scripts)
    - lint(문제될만한 코드 미리 찾아 알려줌)설정 (eslintConfig)
    - 지원하는 브라우저 버전(browserslist)
- `README.md`
  - 프로젝트를 처음 보는 개발자들이 알면 좋을 내용을 적습니다.
  - 어떤 프로젝트인지, 개발 방법은 어떻게 되는지 등
- `src 폴더`
  - 가장 많이 볼 폴더입니다 ㅎㅎ 여기에 모든 리액트 코드를 넣습니다!
- `public 폴더`

  - 리액트 코드가 들어갈 빈 html 파일이 저장된 폴더입니다. 이외에도 브라우저가 리액트 코드 외에 알아둬야 할 파일들(파비콘, 앱 아이콘 등)을 넣습니다.

- `node_modules 폴더`
  - `package.json`파일의 dependencies 리스트에 명시된 라이브러리들이 설치된 폴더입니다. 외부 라이브러리를 사용할 때 이 폴더에 설치하고 사용하는거죠.
  - (에디터 설정에서 숨김처리 되어있으면 보이지 않습니다. 콘솔에 `ls` 를 입력하면 보일거예요)
