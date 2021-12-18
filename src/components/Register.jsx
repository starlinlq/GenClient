import { Formik, Field, Form } from "formik";
import "../styles/register.css";

function Register() {
  const submitForm = async (values) => {
    console.log(values);
  };
  return (
    <div className="container form_container">
      <Formik
        initialValues={{
          firstName: "",
          username: "",
          email: "",
          password: "",
          lastName: "",
          dateOfBirth: "",
          address: "",
          state: "",
          gender: "",
          emergencyNumber: "",
          phoneNumber: "",
          salary: "",
        }}
        onSubmit={submitForm}
      >
        <Form className="row g-3 form">
          <div className="">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              name="password"
              id="password"
              type="password"
              placeholder="password"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="form-control"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="Date">Date of Birth</label>
            <Field
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="State">State</label>
            <Field name="state" as="select" className="form-select" id="state">
              <option value=""></option>
              <option value="red">Texas</option>
              <option value="green">New York</option>
              <option value="blue">Mississippi</option>
              <option value="blue">Kentucky</option>
              <option value="blue">California</option>
            </Field>
          </div>
          <div className="">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <Field
              id="address"
              name="address"
              placeholder="Address"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Home number
            </label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emergencyNumber" className="form-label">
              Emergency contact number
            </label>
            <Field
              type="text"
              id="emergencyNumber"
              name="emergencyNumber"
              className="form-control"
            />
          </div>
          <div className="">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <Field
              name="gender"
              as="select"
              className="form-select"
              id="gender"
            >
              <option value="red">Male</option>
              <option value="green">Female</option>
            </Field>
          </div>

          <div className="col-md-6">
            <label htmlFor="Department" className="form-label">
              Department
            </label>
            <Field
              name="gender"
              as="select"
              className="form-select"
              id="gender"
            >
              <option value=""></option>
              <option value="IT">IT</option>
              <option value="Management">Management</option>
              <option value="HR">HR</option>
              <option value="Service">service</option>
            </Field>
          </div>
          <div className="col-md-6">
            <label htmlFor="Salary" className="form-label">
              Salary
            </label>
            <Field
              name="salary"
              type="text"
              placeholder="Salary"
              id="salary"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
