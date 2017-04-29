import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor() {
    super()
    this.defaultProps = {
      selected: 0
    }
    this.state = {
      selected: 0
    }
  }
  componentDidMount() {
    this.setState({
      selected: this.props.selected
    })
  }
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'pt-tab active' : 'pt-tab');
      console.log(child);
      return (
        <div onClick={this.handleClick.bind(this, index)} className={activeClass} key={index}>
          {child.props.label}
        </div>
      );
    }
    return (
      <div className="popcorn-time-tabs">
        {this.props.children.map((item, i) => {
          console.log(item)
          labels = labels.bind(this)
          if(item.props) {
            var item = labels(item, i)
            return item;
          }else {
            var items = []
            item.map((object, iter) => {
              items.push(labels(object, iter + i))
            })
            return items;
          }
        })}
      </div>
    );
  }
  _renderContent() {
    return (
      <div className="popcorn-time-tabs-content">
        {this.state.selected > 0 ? this.props.children[1][this.state.selected - 1] : this.props.children[this.state.selected]}
      </div>
    );
  }
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
}
