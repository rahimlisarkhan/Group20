import React, { Component } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

// const a = () => {};
// const b = function () {};

export class TodoList extends Component {
  render() {
    const { list, removeTodo, uptTodo } = this.props;

    const content = list?.map((todo, index) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        created={todo.created}
        onClick={() => removeTodo(todo.id)}
        // onClick={function(){removeTodo(todo.id)}}
        uptTodo={uptTodo}
        // uptTodo={(id,title) => uptTodo(todo.id,title)}
        // onItemClick={() => removeTodo(todo.id)}
      />
      // <div key={todo.id} className="card">
      //   {todo.title} | {new Date(todo.created).getMinutes()}
      //   {/* <button onClick={()=>removeTodo()}>del</button> */}
      //   <button onClick={() => removeTodo(todo.id)}>del</button>
      // </div>
    ));

    return <div>{content}</div>;
  }
}

export default TodoList;
