import { Formik, Field, Form } from "formik";
import "../styles/register.css";
import { profile, user } from "../api/client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Register() {
  const [created, setCreated] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [
    state = {
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
      department: "",
    },
    setInitialState,
  ] = useState();
  const { profileId } = useParams();

  const submitForm = async ({
    username,
    password,
    email,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    state,
    emergencyNumber,
    phoneNumber,
    salary,
    department,
    address,
  }) => {
    const data = {
      username,
      password,
      email,
      profile: {
        firstName,
        email,
        lastName,
        dateOfBirth,
        gender,
        state,
        emergencyNumber,
        phoneNumber,
        salary,
        department,
        address,
      },
    };

    try {
      const newUser = await user.create(data);
      setCreated(true);
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await profile.get(profileId);
        setUpdating(true);
        setInitialState({
          ...data,
          dateOfBirth: data.dateOfBirth.slice(0, 10),
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (profileId) {
      getProfile();
    }
  }, [profileId]);

  if (created) {
    return <Navigate to={`/dashboard`} />;
  }

  return (
    <div className="container form_container">
      <Formik
        enableReinitialize
        initialValues={{
          ...state,
        }}
        onSubmit={submitForm}
      >
        <Form className="row g-3 form">
          {!updating && (
            <>
              {" "}
              <div className="col-md-6">
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
              <div className="col-md-6">
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
            </>
          )}
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
              <option value="Texas">Texas</option>
              <option value="New York">New York</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Kentucky">Kentucky</option>
              <option value="California">California</option>
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
              name="department"
              as="select"
              className="form-select"
              id="department"
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

          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              {updating ? "Update" : "Submit"}
            </button>
            <button
              onClick={() => setCreated(true)}
              type="button"
              className="btn btn-danger ms-2"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
