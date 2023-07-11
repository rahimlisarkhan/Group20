import React, { Component } from "react";

export class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isShowAlert: true,
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(e) {
    const text = e.target.value;

    this.setState({ text });
  }

  handleSubmit() {
    if (!this.state.text.trim()) {
      this.setState({ isShowAlert: true });
      return;
    }

    this.props.addTodo(this.state.text);

    this.setState({ text: "", isShowAlert: false });

    // setText("text")
    // setShowAler(false)
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChangeText} />
        {/* <input onchange="handleChangeText()" /> */}
        <button onClick={this.handleSubmit}>Send</button>
        {this.state.isShowAlert && <span>Error text</span>}
      </div>
    );
  }
}

export default TodoInput;
