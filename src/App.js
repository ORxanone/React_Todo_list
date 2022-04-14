import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todolist: [],
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { text, todolist } = this.state;
    const newTodoList = [...todolist, text];

    this.setState({
      todolist: newTodoList,
      text: "",
    });
  }

  handleChangeInput(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { text, todolist } = this.state;

    return (
      <div className="container mt-3">
        <form onSubmit={this.handleFormSubmit} className="mb-3">
          <label htmlFor="todo" className="form-label">
            <h2>Todo list</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="todo"
            placeholder="Add todo..."
            value={text}
            onChange={this.handleChangeInput}
          />
        </form>
        <ul className="list-group">
          {todolist.map((todoItem) => (
            <li 
            key={todoItem}
            className="list-group-item">{todoItem}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
