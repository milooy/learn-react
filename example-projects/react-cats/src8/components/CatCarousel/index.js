import React from "react";
import { formatCatId } from "../../utils";
import ListRow from "../ListRow";
import MainCard from "../MainCard";

export default class CatCarousel extends React.Component {
  state = { selectedCatIndex: 0 };

  handleClickCard = (index) => {
    this.setState({ selectedCatIndex: index });
  };

  render() {
    const { cats } = this.props;
    const { selectedCatIndex } = this.state;

    const selectedCat = cats[selectedCatIndex];

    return (
      <div>
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
      </div>
    );
  }
}
