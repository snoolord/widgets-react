import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  setIndex(index) {
    this.setState({ index });
  }

  render() {
    const titles = this.props.panes.map( (tab, index) => (
      <li className="tab-titles" key={index} onClick={this.setIndex.bind(this, index)}>{tab.title}</li>
    ));
    const content = <article>{this.props.panes[this.state.index].content}</article>;
    return (
      <div className="tab-atha">
        <ul>
          {titles}
        </ul>
        {content}
      </div>
    );
  }

}

export default Tabs;
