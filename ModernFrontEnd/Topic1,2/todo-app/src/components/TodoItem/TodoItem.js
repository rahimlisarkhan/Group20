import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  static propTypes = {};

  constructor() {
    super();

    this.state = {
      isShowEdit: false,
      todoRef: createRef(),
    };

    this.onEditShow = this.onEditShow.bind(this);
    this.onSaveTodo = this.onSaveTodo.bind(this);
  }

  onEditShow() {
    this.setState({ isShowEdit: true });
  }

  onSaveTodo() {
    const value = this.state.todoRef.current.value;

    this.props.uptTodo(this.props.id, value);
    this.setState({ isShowEdit: false });
  }

  render() {
    const { title, created, onClick } = this.props;

    return (
      <div className="card">
        {this.state.isShowEdit ? (
          <input ref={this.state.todoRef} defaultValue={title} size={10} />
        ) : (
          <span>
            {title} | {new Date(created).getMinutes()}
          </span>
        )}
        {/* <button onClick={()=>removeTodo()}>del</button> */}

        {this.state.isShowEdit ? (
          <button onClick={this.onSaveTodo}>Save</button>
        ) : (
          <>
            <button onClick={this.onEditShow}>Edit</button>
            <button onClick={onClick}>Del</button>

            {/* <Child1Compoent onParentChangeState={this.setState} /> */}
            {/* <Child2Compoent show={showEdit} /> */}
          </>
        )}
      </div>
    );
  }
}
