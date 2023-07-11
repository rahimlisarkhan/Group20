import React, { Component, createRef, useState } from "react";
import PropTypes from "prop-types";

export function TodoItem(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [changeText, setChangeText] = useState(false);
  // const [text,setText] = useState("")

  const PI = 3.14;

  const todoRef = createRef();

  const onEditShow = () => {
    setShowEdit(true);
  };

  const onSaveTodo = () => {
    const value = todoRef.current.value;

    props.uptTodo(props.id, value);
    setShowEdit(false);
  };

  return (
    <div className="card">
      {isShowEdit ? (
        <input ref={todoRef} defaultValue={title} size={10} />
      ) : (
        <span>
          {title} | {new Date(created).getMinutes()}
        </span>
      )}
      {/* <button onClick={()=>removeTodo()}>del</button> */}

      {showEdit ? (
        <button onClick={onSaveTodo}>Save</button>
      ) : (
        <>
          <button onClick={onEditShow}>Edit</button>
          <button onClick={props.onClick}>Del</button>
          <Child1Compoent onShowEdit={setShowEdit} />
          <Child2Compoent show={showEdit} />
        </>
      )}
    </div>
  );
}

TodoItem.propsType = {};
