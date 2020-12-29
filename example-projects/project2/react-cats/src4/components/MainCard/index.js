import React from "react";
import "./MainCard.css";

export default class MainCard extends React.Component {
  render() {
    const { url, id } = this.props;

    return (
      <div className="main-card">
        <img src={url} alt="대표 고양이" />
        <div className="main-card__bottom">
          <span>{id}</span>
        </div>
      </div>
    );
  }
}
