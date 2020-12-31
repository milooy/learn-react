import "./App.css";
import React from "react";
import ListRow from "./components/ListRow";
import MainCard from "./components/MainCard";
import Clock from "./components/Clock";
import { formatCatId } from "./utils";
import VisitorForm from "./components/VisitorForm";
import { getCats } from "./remotes/cats";

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

  handleClickCard = (index) => {
    this.setState({ selectedCatIndex: index });
  };

  hideClock() {
    this.setState({ showClock: false });
  }

  render() {
    const { selectedCatIndex, showClock, cats } = this.state;
    const selectedCat = cats[selectedCatIndex];

    if (cats.length === 0) {
      return <div>로딩중</div>;
    }

    return (
      <div className="App">
        <h1>Cats</h1>
        {showClock && <Clock onClick={this.hideClock.bind(this)} />}
        <MainCard id={formatCatId(selectedCat.id)} url={selectedCat.url} />
        <ul>
          {cats.map((cat, index) => {
            return (
              <ListRow
                key={cat.id}
                id={formatCatId(cat.id)}
                url={cat.url}
                isSelected={selectedCatIndex === index}
                onClick={() => this.handleClickCard(index)}
              />
            );
          })}
        </ul>
        <VisitorForm />
      </div>
    );
  }
}

export default App;
