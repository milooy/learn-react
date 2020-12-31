import "./App.css";
import React from "react";
import Clock from "./components/Clock";
import VisitorForm from "./components/VisitorForm";
import { getCats } from "./remotes/cats";
import CatCarousel from "./components/CatCarousel";

class App extends React.Component {
  state = { cats: [], selectedCatIndex: 0, showClock: true };

  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats() {
    try {
      const cats = await getCats();
      this.setState({ cats });
    } catch (e) {
      alert("문제가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  hideClock() {
    this.setState({ showClock: false });
  }

  render() {
    const { showClock, cats } = this.state;

    if (cats.length === 0) {
      return <div>로딩중</div>;
    }

    return (
      <div className="App">
        <h1>Cats</h1>
        {showClock && <Clock onClick={this.hideClock.bind(this)} />}
        <CatCarousel cats={cats} />
        <VisitorForm />
      </div>
    );
  }
}

export default App;
