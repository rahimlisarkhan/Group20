import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    const { list } = this.props;

    const content = list?.map((todo, index) => (
      <div key={todo.id} className="card">
        {todo.title} | {new Date(todo.created).getMinutes()}
      </div>
    ));

    return <div>{content}</div>;
  }
}

export default TodoList;
