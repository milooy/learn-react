import React from "react";

/** 1. 클래스에서의 this 사용 */
class ListRow extends React {
  name = "yurim";

  sayHi() {
    // 2. this가 ListRow로 넘어와서 this.state에 접근 가능하다.
    console.log(this.state.name);
  }
  sayBye = () => {
    // 3. bind해주지 않아도 this가 ListRow로 잡힌다. 화살표 함수는 언제나 상위 스코프의 this를 가리키기 때문.
    console.log(this.state.name);
  };
  render() {
    // 1. sayHi를 사용하는 시점에 this(ListRow)를 고정시켜준다
    return (
      <li onClick={this.sayHi.bind(this)} onBlur={this.sayBye}>
        hi
      </li>
    );
  }
}
