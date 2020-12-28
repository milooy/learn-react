import React from "react";
import "./ListRow.css";

export default class ListRow extends React.Component {
  render() {
    const { imgSrc, id } = this.props;
    return (
      <li className="list-row">
        <img src={imgSrc} alt="귀여운 고양이" />
        <div className="list-row__right">
          <span style={{ marginRight: 5 }}>{id}</span>
          <span>🤍</span>
        </div>
      </li>
    );
  }
}
