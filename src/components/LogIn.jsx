import { Formik, Field, Form } from "formik";
import "../styles/global.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logInAuth, setLoading } from "../store/userSlice";
import { useEffect } from "react";
export default function LogIn() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  const location = useLocation();

  const onSubmit = async ({ username, password }) => {
    dispatch(logInAuth({ username, password }));
  };

  return (
    <div className="container form">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="login">Sign in to GenManagement</label>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Sign in</button>
        </Form>
      </Formik>
    </div>
  );
}
