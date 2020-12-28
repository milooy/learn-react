import React from "react";
import "./MainCard.css";

export default class MainCard extends React.Component {
  render() {
    const { imgSrc, id } = this.props;
    return (
      <div className="main-card">
        <img src={imgSrc} alt="대표 고양이" />
        <div className="main-card__bottom">
          <span>{id}</span>
          <button>🤍</button>
        </div>
      </div>
    );
  }
}
