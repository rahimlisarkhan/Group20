import React, { Component } from "react";
// import styles from "./TodoContent.module.css";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";

export class TodoContent extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.uptTodo = this.uptTodo.bind(this);
  }

  addTodo(title) {
    // const newList = [...this.state.list]

    // newList.push(text)

    const todo = {
      id: Date.now() + Math.random().toString(),
      title,
      created: new Date(),
    };

    const newList = [todo, ...this.state.list];

    this.setState({ list: newList });
  }

  removeTodo(todoId) {
    console.log("todoId:", todoId);

    // let newState = this.state.filter();
    let newState = [...this.state.list];

    const filterData = newState.filter((item) => item.id !== todoId);

    this.setState({ list: filterData });
  }

  uptTodo(todoId, todoTitle) {
    console.log("todoId:", todoId);
    console.log("todoTitle:", todoTitle);

    let copyList = [...this.state.list];

    let currentTodoItemIndex = copyList.findIndex((item) => item.id === todoId);
    let cutrentItem = copyList[currentTodoItemIndex];

    let uptTodoItem = { ...cutrentItem, updated: new Date(), title: todoTitle };

    copyList[currentTodoItemIndex] = uptTodoItem;

    this.setState({ list: copyList });
  }

  render() {
    console.log("this content", this.state.list);
    return (
      <div>
        <h1>Todo app</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          list={this.state.list}
          removeTodo={this.removeTodo}
          uptTodo={this.uptTodo}
        />
      </div>
    );
  }
}

export default TodoContent;
