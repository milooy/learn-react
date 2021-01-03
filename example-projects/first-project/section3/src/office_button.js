class OfficeButton extends React.Component {
  state = { isPressed: false };

  render() {
    var buttonPressed = this.state.isPressed === true;
    var unPressedButtonText = this.props.name + " 출근도장";
    var pressedButtonText = this.props.name + " 출근했습니다";

    if (buttonPressed) {
      return pressedButtonText;
    }

    return (
      <button onClick={() => this.setState({ isPressed: true })}>
        {unPressedButtonText}
      </button>
    );
  }
}

var 리액트들어갈div = document.getElementById("put_react_here");
ReactDOM.render(<OfficeButton name="유림" />, 리액트들어갈div);
