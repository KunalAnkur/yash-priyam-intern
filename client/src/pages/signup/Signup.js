import React, { useEffect } from 'react'
import {Link, useHistory} from "react-router-dom"
import {connect} from "react-redux"
import {signupUser} from "../../redux/actions/userAction"
import { useState } from 'react';
function Signup({ signupUser, loading, authenticated, errors }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    if (!loading && authenticated) {
      history.replace("/");
    }
  }, [authenticated, loading,history]);
  const handleSubmit = () => {
    const signupData = {
      email,
      password,
      confirmPassword,
    };
    signupUser(signupData, history);
  };
  return (
    <div className="form">
      <h3>Signup</h3>
      <div className="container">
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="error-alert">{errors?.email}</p>
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label for="psw">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Re enter Password"
          name="psw"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className="error-alert">{errors?.confirmPassword}</p>
        <button className="button" onClick={handleSubmit} type="submit">
          Signup
        </button>
        <p className="error-alert">{errors?.error}</p>
      </div>
      <span>
        Already have an account, <Link to="/login">Click here</Link>
      </span>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    loading: state.user.loading,
    errors: state.user.errors
  };
};
export default connect(mapStateToProps, { signupUser })(Signup);
