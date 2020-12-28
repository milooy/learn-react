import React from "react";
import "./MainCard.css";

export default class MainCard extends React.Component {
  state = { isLiked: false };

  // 화살표 함수 (this바인딩 없어도 this를 MainCard로 잘 읽습니다)
  handleLikeClick = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { imgSrc, id } = this.props;
    return (
      <div className="main-card">
        <img src={imgSrc} alt="대표 고양이" />
        <div className="main-card__bottom">
          <span>{id}</span>
          <button onClick={this.handleLikeClick}>
            {this.state.isLiked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    );
  }
}
