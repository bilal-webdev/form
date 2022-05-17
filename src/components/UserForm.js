import React from "react";
import { useFormik } from "formik";
import styles from "./UserForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNo: "",
};

const onSubmit = (values, { resetForm }) => {
  // alert(JSON.stringify(values))
  if (
    values.name === "rohit" &&
    values.email === "rroo@gmail.com" &&
    values.password === "1234567890" &&
    values.phoneNo === "9876543210"
  ) {
    alert("YOU ARE VALID USER");
    resetForm({});
    window.location.assign("/registered");
  } else {
    alert("Thankyou, but you are not the valid user");
    resetForm({});
  }
  console.log("Form data: ", values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "This field is required";
  }

  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "This field is required";
  }

  if (!values.phoneNo) {
    errors.phoneNo = "This field is required";
  } else if (!/^[0-9\b]+$/i.test(values.phoneNo)) {
    errors.phoneNo = "Please enter only number";
  }

  return errors;
};

function UserForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   console.log("Visited fields: ", formik.touched);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.formDiv}>
        <div className={styles.avatar} />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="YOUR NAME"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.errors}>{formik.errors.name}</div>
          ) : null}

          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="EMAIL"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errors}>{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="PASSWORD"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.errors}>{formik.errors.password}</div>
          ) : null}

          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNo}
            placeholder="PHONE"
          />
          {formik.touched.phoneNo && formik.errors.phoneNo ? (
            <div className={styles.errors}>{formik.errors.phoneNo}</div>
          ) : null}

          <div className={styles.btns}>
            <button type="button" onClick={(e) => formik.resetForm()}>
              RESET
            </button>
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
