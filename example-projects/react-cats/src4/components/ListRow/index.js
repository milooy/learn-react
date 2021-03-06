import React from "react";
import "./ListRow.css";

export default class ListRow extends React.Component {
  state = { isLiked: false };

  handleLikeClick() {
    this.setState((prevState) => {
      return { isLiked: !prevState.isLiked };
    });
    /** NOTE: 아래처럼 this.state값을 바로 참조하면 버튼 연타시에 상태가 꼬일 수 있습니다 */
    // this.setState({ isLiked: !this.state.isLiked });
  }

  /** NOTE: 아래처럼 화살표함수를 사용하면 추가적인 this 바인딩을 피할 수 있습니다.*/
  // handleLikeClick = () => {
  //   this.setState({ isLiked: !this.state.isLiked });
  // };

  render() {
    const { url, id } = this.props;
    return (
      <li className="list-row">
        <img src={url} alt="귀여운 고양이" />
        <div className="list-row__right">
          <span style={{ marginRight: 5 }}>{id}</span>
          <button onClick={this.handleLikeClick.bind(this)}>
            {this.state.isLiked ? "❤️" : "🤍"}
          </button>
        </div>
      </li>
    );
  }
}
