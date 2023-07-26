import React, { Component } from "react";

export class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isShowAlert: true,
      isDropdown: false,
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onHanleFocus = this.onHanleFocus.bind(this);
    this.onHanleBlur = this.onHanleBlur.bind(this);
  }

  handleChangeText(e) {
    const text = e.target.value;

    this.setState({ text });
  }

  onHanleFocus() {
    console.log("focus input");
    this.setState({ isDropdown: true });
  }

  onHanleBlur() {
    console.log("blur input");
    this.setState({ isDropdown: false });
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
      <>
        <div>
          <input
            value={this.state.text}
            onChange={this.handleChangeText}
            onFocus={this.onHanleFocus}
            onBlur={this.onHanleBlur}
          />

          {/* <input onchange="handleChangeText()" /> */}
          <button onClick={this.handleSubmit}>Send</button>
          {this.state.isShowAlert && <span>Error text</span>}
        </div>

        {this.state.isDropdown && (
          <div className="dropdown">
            <ul>
              <li>Test1</li>
              <li>Test2</li>
              <li>Test3</li>
              <li>Test4</li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default TodoInput;
