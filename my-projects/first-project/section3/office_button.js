console.log(React, ReactDOM);
var 리액트구멍 = document.getElementById("put_react_app_here");

class OfficeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false,
    };
  }

  render() {
    console.log(this.state);

    if (this.state.isPressed === true) {
      return "출근했습니다!";
    }

    return (
      <button
        onClick={function (e) {
          this.setState({ isPressed: true });
        }.bind(this)}
      >
        {this.props.name + " 출근도장"}
      </button>
    );
  }
}
// var 출근버튼 = React.createElement(OfficeButton, { name: "유림" });
var 출근버튼 = <OfficeButton name="장그래" />;

ReactDOM.render(출근버튼, 리액트구멍);
