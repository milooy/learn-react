var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(React, ReactDOM);
var 리액트구멍 = document.getElementById("put_react_app_here");

var OfficeButton = function (_React$Component) {
  _inherits(OfficeButton, _React$Component);

  function OfficeButton(props) {
    _classCallCheck(this, OfficeButton);

    var _this = _possibleConstructorReturn(this, (OfficeButton.__proto__ || Object.getPrototypeOf(OfficeButton)).call(this, props));

    _this.state = {
      isPressed: false
    };
    return _this;
  }

  _createClass(OfficeButton, [{
    key: "render",
    value: function render() {
      console.log(this.state);

      if (this.state.isPressed === true) {
        return "출근했습니다!";
      }

      return React.createElement(
        "button",
        {
          onClick: function (e) {
            this.setState({ isPressed: true });
          }.bind(this)
        },
        this.props.name + " 출근도장"
      );
    }
  }]);

  return OfficeButton;
}(React.Component);
// var 출근버튼 = React.createElement(OfficeButton, { name: "유림" });


var 출근버튼 = React.createElement(OfficeButton, { name: "\uC7A5\uADF8\uB798" });

ReactDOM.render(출근버튼, 리액트구멍);