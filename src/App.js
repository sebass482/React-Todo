import React from "react";

// import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const groceries = [
  {
    // name: "Example Task ( Remove Me! )",
    // id: 1,
    // purchased: true
  },
  
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries
    };
  }

  // Class methods to update state
  toggleItem = (itemId) => {
    this.setState({
      groceries: this.state.groceries.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  clearPurchased = () => {
    this.setState({
      groceries: this.state.groceries.filter((item) => {
        return !item.purchased;
      })
    });
  };

  clearAllPurchased = () => {
    this.setState({groceries: groceries})
    console.log(this.state)
  }

  addItem = (itemName) => {
    console.log("bk: index.js: App: addItem: itemName: ", itemName);
    this.setState({
      groceries: [
        ...this.state.groceries,
        { id: Date.now(), name: itemName, purchased: false }
      ]
    });
  };
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List </h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
          clearAllPurchased={this.clearAllPurchased}
        />
      </div>
    );
  }
}

export default App