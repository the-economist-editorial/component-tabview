"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var TabView = (function (_React$Component) {
  function TabView(props) {
    _classCallCheck(this, TabView);

    _React$Component.call(this, props);
    var selectedIndex = this.props.selectedIndex || 0;
    this.state = {
      selectedIndex: selectedIndex
    };
  }

  _inherits(TabView, _React$Component);

  TabView.prototype.render = function render() {
    var _this = this;

    return _react2["default"].createElement(
      "div",
      { className: "TabView section group" },
      _react2["default"].createElement(
        "div",
        { className: "TabView--Container" },
        _react2["default"].createElement(
          "header",
          { className: "TabView--Header span_7 margin_1" },
          _react2["default"].createElement(
            "ul",
            { className: "TabView--Tabs" },
            this.props.children.map(function (child, index) {
              return _react2["default"].createElement(
                "li",
                {
                  key: index, className: "TabView--Tab",
                  "data-active": _this.state.selectedIndex === index,
                  onClick: _this._handleClick.bind(_this, index) },
                child.props.title
              );
            }),
            _react2["default"].createElement(
              "li",
              { onClick: this._handleClick.bind(this, this.state.selectedIndex + 1), className: "TabView--Tab" },
              "More"
            )
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "TabView--Views--Container" },
          _react2["default"].createElement(
            "div",
            { className: "TabView--Views" },
            this.props.children.map(function (child, index) {
              return _react2["default"].createElement(
                "div",
                {
                  key: index,
                  className: "TabView--View",
                  "data-active": _this.state.selectedIndex === index },
                child.props.children
              );
            })
          )
        )
      )
    );
  };

  TabView.prototype._handleClick = function _handleClick(selectedIndex, event) {
    if (selectedIndex >= this.props.children.length) {
      selectedIndex = 0;
    }
    this.setState({
      selectedIndex: selectedIndex
    });
  };

  return TabView;
})(_react2["default"].Component);

exports["default"] = TabView;
module.exports = exports["default"];

