"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TabView = (function (_React$Component) {
  _inherits(TabView, _React$Component);

  _createClass(TabView, null, [{
    key: "propTypes",
    get: function get() {
      return {
        selectedIndex: _react2["default"].PropTypes.string,
        children: _react2["default"].PropTypes.string
      };
    }
  }]);

  function TabView(props) {
    _classCallCheck(this, TabView);

    _React$Component.call(this, props);
    var selectedIndex = this.props.selectedIndex || 0;
    this.state = {
      selectedIndex: selectedIndex
    };
  }

  TabView.prototype.handleClick = function handleClick(selectedIndex) {
    if (selectedIndex >= this.props.children.length) {
      selectedIndex = 0;
    }
    this.setState({
      selectedIndex: selectedIndex
    });
  };

  TabView.prototype.render = function render() {
    var _this = this;

    return _react2["default"].createElement(
      "aside",
      { className: "TabView section group" },
      _react2["default"].createElement(
        "div",
        { className: "TabView--Container" },
        _react2["default"].createElement(
          "header",
          { className: "TabView--Header" },
          _react2["default"].createElement(
            "ul",
            { className: "TabView--Tabs" },
            this.props.children.map(function (child, index) {
              return _react2["default"].createElement(
                "li",
                {
                  key: index, className: "TabView--Tab",
                  "data-active": _this.state.selectedIndex === index,
                  onClick: _this.handleClick.bind(_this, index) },
                child.props.title
              );
            }),
            _react2["default"].createElement(
              "li",
              { onClick: this.handleClick.bind(this, this.state.selectedIndex + 1),
                className: "TabView--Tab" },
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

  return TabView;
})(_react2["default"].Component);

exports["default"] = TabView;
module.exports = exports["default"];

