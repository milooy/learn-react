import React from "react";
import "./App.css";

/** NOTE: 아래 함수형 컴포넌트(App) 문법은 다음과 같은 클래스 문법과 동일하게 작동합니다. */
// class App extends react.Component {
//   render() {
//     return <div>클래스 컴포넌트</div>
//   }
// }

const element1 = <div>element1 - 컴포넌트 밖</div>;

function Component1({ name }) {
  return <div>element in Component1 - {name} 컴포넌트</div>;
}

class Component2 extends React.Component {
  render() {
    return <div>element in Component2 - {this.props.name} 컴포넌트</div>;
  }
}

function App() {
  const realDOM = document.createElement("div");
  const element2 = <div>element2 - 컴포넌트 안</div>;
  console.log("DOM: ", realDOM, "React element: ", element2);

  return (
    <div className="App">
      <h1>Cats</h1>
      {element1}
      {element2}
      <Component1 name="함수형" />
      <Component2 name="클래스" />
    </div>
  );
}

export default App;
