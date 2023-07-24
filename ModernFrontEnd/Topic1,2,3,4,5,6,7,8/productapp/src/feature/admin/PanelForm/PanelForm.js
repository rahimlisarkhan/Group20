import React, { Component } from "react";
import styles from "./PanelForm.module.css";

export class PanelForm extends Component {
  constructor() {
    super();

    this.state = {
      form: {
        name: "",
        price: null,
        image_url: "",
      },
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeField(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // if (fieldName === "price" && !isNaN(fieldValue)) {
    //   console.log("test");
    //   this.setState({ form: { ...this.state.form, [fieldName]: fieldValue } });
    //   return;
    // }

    this.setState({ form: { ...this.state.form, [fieldName]: fieldValue } });
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const formData = {
      id: Date.now() + Math.random().toString(),
      ...this.state.form,
    };

    this.props.onData(formData);
    this.props.onClose();
  }

  render() {
    const { title, onClose, show } = this.props;
    return (
      <div
        className={styles.content}
        style={{
          left: show ? 0 : "-100%",
          boxShadow: show ? "0 0 0 2000px rgba(0, 0, 0, 0.507)" : "none",
        }}
      >
        <div>
          <h1>{title}</h1>
          <button onClick={onClose}>Close</button>
        </div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            placeholder="Product name"
            name="name"
            onChange={this.handleChangeField}
          />
          <br />
          <br />
          <input
            placeholder="Product price"
            name="price"
            onChange={this.handleChangeField}
          />
          <br />
          <br />

          <input
            placeholder="Product image"
            name="image_url"
            onChange={this.handleChangeField}
          />
          <br />
          <br />

          <button type="submit"> Create</button>
        </form>
      </div>
    );
  }
}

export default PanelForm;
