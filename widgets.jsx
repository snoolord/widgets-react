import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
const tabs = [
  {
    title: "One",
    content: "First pane is the best pane"
  },

  {
    title: "Two",
    content: "Second pane is fire"
  },

  {
    title: "Three",
    content: "Third pane is wet"
  }
];


class App extends React.Component {
  render() {
    return (
      <div>
        <Clock/>
        <Tabs panes={tabs}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<App/>, root);
});
