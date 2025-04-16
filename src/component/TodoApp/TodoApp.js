import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (index) => {
    // const allitems=this.state.items;
    // allitems.splice(index,1)
    this.setState({
      items: this.state.items.filter((data, indexk) => index !== indexk),
    });
  };
  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Something"
          />
        </form>
        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                {data}
                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
