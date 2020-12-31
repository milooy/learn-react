# 1. 하나의 상태를 두 컴포넌트에서 공유하기: State 끌어올리기

[참고 코드](../../example-projects/react-cats/src5/App.js)

특정 고양이 ListRow를 클릭하면 MainCard에 그 고양이를 크게 보여주려 합니다.

<img src="https://user-images.githubusercontent.com/3839771/103340025-61d10380-4ac6-11eb-9da7-2be75dd77516.png" width="700">

ListRow를 선택하는 기능이니, 전에 하트 누르는 기능을 구현했던 것처럼 ListRow 내부에 '선택 여부' state를 추가하면 될까요?

하지만 문제에 봉착합니다.

선택한 리스트에 색을 칠하는건 잘 되는데, 선택한 고양이를 MainCard 컴포넌트에 넘겨줄 방법이 없습니다. state는 컴포넌트 내부에 숨겨진 값이니까요.
<img src="https://user-images.githubusercontent.com/3839771/103339931-1f0f2b80-4ac6-11eb-9290-6c092e3e24c6.png" width="700">

해결방법은 간단합니다!

선택중인 고양이 state을 ListRow가 아닌, ListRow와 MainCard 모두를 담고있는 App 컴포넌트로 옮기면 되겠죠?

그 state값을 ListRow와 MainCard 모두에게 prop으로 넘겨주면 됩니다.

<img src="https://user-images.githubusercontent.com/3839771/103339954-31896500-4ac6-11eb-8904-de74ae948dc8.png" width="700">

리액트에서는 이를 'State 끌어올리기'(Lifting state up)이라 표현합니다.

## TODO

- [ ] state를 사용하기 위해 App 컴포넌트를 Class기반으로 변경하기
  - 참고: 함수형 컴포넌트에서 state를 사용하려면 hook이라는 새로운 기술을 써야 합니다. 굉장히 매력적인 패러다임 변화예요 ㅎㅎ 추후에 다룰 예정입니다.
- [ ] App 컴포넌트에 selectedCatIndex 상태 추가
- [ ] ListRow를 클릭하면 해당 고양이의 index값을 selectedCatIndex에 저장
- [ ] 선택한 고양이 데이터를 MainCard에 넘기기
- [ ] 선택중인지 여부 데이터를 ListRow에 넘기기
- [ ] 선택중인 ListRow 배경색 변경하기
- [ ] 하트를 눌렀을 때 리스트 선택 이벤트가 불리지 않도록 `e.stopPropagation()` 추가
  - 브라우저의 클릭이벤트는 위로 타고 올라가서(propagation) ListRow 내부 하트를 눌렀을 때 ListRow도 겹쳐져서 눌린것과 같은 효과를 냅니다. 이를 막고싶다면 위 코드를 추가하세요.
