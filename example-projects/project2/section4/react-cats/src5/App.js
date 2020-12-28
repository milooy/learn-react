import "./App.css";
import React from "react";
import ListRow from "./components/ListRow";
import MainCard from "./components/MainCard";
import { formatCatId } from "./utils";
import catsData from "./catsData";

class App extends React.Component {
  state = { selectedCatIndex: 0 };

  handleClickCard = (index) => {
    this.setState({ selectedCatIndex: index });
  };

  render() {
    const { selectedCatIndex } = this.state;

    return (
      <div className="App">
        <h1>Cats</h1>
        <MainCard
          id={formatCatId(catsData[selectedCatIndex].id)}
          imgSrc={catsData[selectedCatIndex].imgSrc}
        />
        <ul>
          {catsData.map((cat, index) => {
            return (
              <ListRow
                key={cat.id}
                id={formatCatId(cat.id)}
                imgSrc={cat.imgSrc}
                isSelected={selectedCatIndex === index}
                onClick={() => this.handleClickCard(index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
