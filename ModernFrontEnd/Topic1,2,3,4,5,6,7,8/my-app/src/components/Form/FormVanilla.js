import React, { Component } from "react";
import { isEmail } from "../../utils/isEmail";

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      email: "",
      password: "",
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleChangeField(e) {
    const inputName = e.target.name; //
    const inputValue = e.target.value;

    this.setState({ [inputName]: inputValue });
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const fullname = this.state.fullname;
    const email = this.state.email;
    const password = this.state.password;

    const form = { fullname, email, password };
    console.log(form);
  }

  render() {
    console.log(this.state);
    const isNotCorrectPassword =
      !this.state.password || this.state.password.length < 8;

    const isNotEmail = !isEmail(this.state.email);

    const disabletBtn = isNotEmail || isNotCorrectPassword;

    return (
      <div className="formContent">
        <form onSubmit={this.handleSubmitForm}>
          <div className="formGroup">
            <input
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChangeField}
            />
            {!this.state.fullname && <span>Error message</span>}
          </div>
          <div className="formGroup">
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeField}
            />
            {isNotEmail && <span>Error message</span>}
          </div>
          <div className="formGroup">
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangeField}
            />
            {(!this.state.password || this.state.password.length < 8) && (
              <span>Error message</span>
            )}

            {/* <span>Error message</span> */}
          </div>

          <button disabled={disabletBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
