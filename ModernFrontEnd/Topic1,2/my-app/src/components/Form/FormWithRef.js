import React, { Component, createRef } from "react";

export class Form extends Component {
  fullnameInput = createRef();
  emailInput = createRef();
  passwordInput = createRef();

  constructor() {
    super();

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const fullname = this.fullnameInput.current.value;
    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;

    const form = { fullname, email, password };
    console.log(form);

    this.fullnameInput.current.value = "";
    this.emailInput.current.value = "";
    this.passwordInput.current.value = "";
  }

  render() {
    return (
      <div className="formContent">
        <form onSubmit={this.handleSubmitForm}>
          <div className="formGroup">
            <input ref={this.fullnameInput} name="fullname" />
            {/* <span>Error message</span> */}
          </div>
          <div className="formGroup">
            <input ref={this.emailInput} name="email" type="email" />
            {/* <span>Error message</span> */}
          </div>
          <div className="formGroup">
            <input ref={this.passwordInput} name="password" type="password" />
            {/* <span>Error message</span> */}
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
