import React, { Component } from "react";
import { Formik } from "formik";
import { isEmail } from "../../utils/isEmail";
import * as Yup from "yup";

const shemaValidation = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

export class Form extends Component {
  initialValues = { fullname: "", email: "", password: "", file: "" };

  constructor() {
    super();
    this.handleValidate = this.handleValidate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleValidate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    }

    return errors;
  }

  handleFormSubmit(values, options) {
    console.log("values:", values);

    this.props.parentCallback(values);
    options.resetForm();
  }

  render() {
    const renderFormContent = (params) => {
      console.log("params:", params);

      return (
        <form onSubmit={params.handleSubmit}>
          <input
            name="fullname"
            onChange={params.handleChange}
            // onBlur={params.handleBlur}
            value={params.values.fullname}
          />
          <input
            type="email"
            name="email"
            onChange={params.handleChange}
            // onBlur={params.handleBlur}
            value={params.values.email}
          />
          {/* {params.errors.email && params.touched.email && params.errors.email} */}
          <input
            type="password"
            name="password"
            onChange={params.handleChange}
            // onBlur={handleBlur}
            value={params.values.password}
          />

          <input
            type="file"
            name="file"
            onChange={(e) => params.setFieldValue("file", e.target.files[0])}
            // onBlur={handleBlur}
            // value={params.values.password}
          />

          {/* {params.errors.password &&
            params.touched.password &&
            params.errors.password} */}
          <button type="submit" disabled={params.isSubmitting}>
            Submit
          </button>

          <button type="submit" onClick={params.handleReset}>
            Reset
          </button>
        </form>
      );
    };

    return (
      <div>
        Form
        <div>
          <Formik
            initialValues={this.initialValues}
            // validate={this.handleValidate}
            onSubmit={this.handleFormSubmit}
            validationSchema={shemaValidation}
          >
            {renderFormContent}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Form;
