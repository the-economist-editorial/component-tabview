"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

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
            { className: "TabView--Tabs margin-l-1" },
            this.props.children.map(function (child, index) {
              return _react2["default"].createElement(
                "li",
                {
                  key: index, className: "TabView--Tab col-2",
                  "data-active": _this.state.selectedIndex === index,
                  onClick: _this.handleClick.bind(_this, index) },
                child.props.title
              );
            }),
            _react2["default"].createElement(
              "li",
              { onClick: this.handleClick.bind(this, this.state.selectedIndex + 1),
                className: "TabView--Tab col-2" },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7SUFDSixPQUFPO1lBQVAsT0FBTzs7ZUFBUCxPQUFPOztTQUVOLGVBQUc7QUFDckIsYUFBTztBQUNMLHFCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDckMsZ0JBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtPQUNqQyxDQUFDO0tBQ0g7OztBQUVXLFdBVE8sT0FBTyxDQVNiLEtBQUssRUFBRTswQkFURCxPQUFPOztBQVV4QixnQ0FBTSxLQUFLLENBQUMsQ0FBQztBQUNiLFFBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztBQUNwRCxRQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsbUJBQWEsRUFBYixhQUFhO0tBQ2QsQ0FBQztHQUNIOztBQWZrQixTQUFPLFdBaUIxQixXQUFXLEdBQUEscUJBQUMsYUFBYSxFQUFFO0FBQ3pCLFFBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUMvQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztLQUNuQjtBQUNELFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixtQkFBYSxFQUFiLGFBQWE7S0FDZCxDQUFDLENBQUM7R0FDSjs7QUF4QmtCLFNBQU8sV0F5QjFCLE1BQU0sR0FBQSxrQkFBRzs7O0FBQ1AsV0FDRTs7UUFBTyxTQUFTLEVBQUMsdUJBQXVCO01BQ3RDOztVQUFLLFNBQVMsRUFBQyxvQkFBb0I7UUFDakM7O1lBQVEsU0FBUyxFQUFDLGlCQUFpQjtVQUNqQzs7Y0FBSSxTQUFTLEVBQUMsMEJBQTBCO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUs7QUFDekMscUJBQ0U7OztBQUNFLHFCQUFHLEVBQUUsS0FBSyxBQUFDLEVBQUMsU0FBUyxFQUFDLG9CQUFvQjtBQUMxQyxpQ0FBYSxNQUFLLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxBQUFDO0FBQ2hELHlCQUFPLEVBQUUsTUFBSyxXQUFXLENBQUMsSUFBSSxRQUFPLEtBQUssQ0FBQyxBQUFFO2dCQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7ZUFDZixDQUNMO2FBQ0gsQ0FBQztZQUNGOztnQkFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBRSxBQUFFO0FBQzFFLHlCQUFTLEVBQUMsb0JBQW9COzthQUFVO1dBQ3JDO1NBQ0U7UUFDVDs7WUFBSyxTQUFTLEVBQUMsMkJBQTJCO1VBQ3hDOztjQUFLLFNBQVMsRUFBQyxnQkFBZ0I7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBSztBQUN6QyxxQkFDRTs7O0FBQ0UscUJBQUcsRUFBRSxLQUFLLEFBQUM7QUFDWCwyQkFBUyxFQUFDLGVBQWU7QUFDekIsaUNBQWEsTUFBSyxLQUFLLENBQUMsYUFBYSxLQUFLLEtBQUssQUFBQztnQkFDL0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRO2VBQ2pCLENBQ047YUFDSCxDQUFDO1dBQ0U7U0FDRjtPQUNGO0tBQ0EsQ0FDUjtHQUNIOztTQTlEa0IsT0FBTztHQUFTLG1CQUFNLFNBQVM7O3FCQUEvQixPQUFPIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BUeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRJbmRleDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIH07XG4gIH1cblxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJbmRleCB8fCAwO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEluZGV4LFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDbGljayhzZWxlY3RlZEluZGV4KSB7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiVGFiVmlldyBzZWN0aW9uIGdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiVmlldy0tQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJUYWJWaWV3LS1IZWFkZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJUYWJWaWV3LS1UYWJzIG1hcmdpbi1sLTFcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIlRhYlZpZXctLVRhYiBjb2wtMlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXggPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgaW5kZXgpIH0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZC5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgKHRoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleCArIDEpKSB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlRhYlZpZXctLVRhYiBjb2wtMlwiPk1vcmU8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYlZpZXctLVZpZXdzLS1Db250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiVmlldy0tVmlld3NcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJUYWJWaWV3LS1WaWV3XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3RpdmU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGQucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXNpZGU+XG4gICAgKTtcbiAgfVxufVxuIl19
