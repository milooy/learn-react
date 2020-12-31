# 6. 클린 코드 - 리액트 앱 깔끔하게 리팩토링하기

[참고 코드](../../example-projects/react-cats/src8/App.js)

1. 특수한 함수는 특수한 함수들끼리 모아둔다 (파일 분리)
   - [ ] API 관련 함수인 `getCats` 다른 파일로 옮기기 (`remote/cats.js`)
   - [ ] 텍스트 포매팅 함수인 `formatCatId` 다른 파일로 옮기기 (`utils/transformId.js`)
2. 중복된 코드를 하나로 묶는다
   - [ ] 선택된 고양이 데이터를 변수에 할당(`const selectedCat = cats[selectedCatIndex]`)
3. 컴포넌트를 개념별로 나누고 묶는다.
   - [ ] 우리 앱의 UI를 대략적으로 적어보기
   1. 페이지 타이틀
   2. 시계
   3. 고양이 캐러셀
      1. 메인 카드
      2. 고양이 리스트
         1. ListRow
   4. 방명록
   - [ ] '메인 카드'와 '고양이 리스트'를 '고양이 캐러셀' 이라는 컴포넌트로 묶기
     - 고양이 사진 및 선택에 관련된 내용이 분리되어 으니 App.js 코드가 더 부드럽게 읽힙니다.
