import React from 'react';

export default class TabView extends React.Component {



   constructor(props) {
    super(props);
    const selectedIndex = this.props.selectedIndex || 0;
    this.state = {
      selectedIndex
    };
  }


  render() {
    return (
      <div className="TabView section group">
      <div className="TabView--Container">
        <header className="TabView--Header span_10 margin_1">
          <ul className="TabView--Tabs">
            {this.props.children.map((child, index) => {
              return (
                <li
                  key={index} className="TabView--Tab"
                  data-active={this.state.selectedIndex === index}
                  onClick={this._handleClick.bind(this, index) }>
                  {child.props.title}
                </li>
              );
            })}
          <li onClick={this._handleClick.bind(this, (this.state.selectedIndex+1)) } className="TabView--Tab">More</li>
          </ul>
        </header>
          <div className="TabView--Views--Container">
          <div className="TabView--Views">
            {this.props.children.map((child, index) => {
              return (
                <div
                  key={index}
                  className="TabView--View"
                  data-active={this.state.selectedIndex === index}>
                  {child.props.children}
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    );
  }


  _handleClick(selectedIndex, event) {
    if(selectedIndex >= this.props.children.length){
      selectedIndex = 0;
    }
   this.setState({
    selectedIndex
    });
  }
}