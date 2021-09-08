import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.css"
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";
function Login({ loginUser, authenticated, loading, errors }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (!loading && authenticated) {
      history.replace("/");
    }
  }, [authenticated, loading, history]);
  const handleSubmit = () => {
    const signupData = {
      email,
      password,
    };
    loginUser(signupData, history);
  };
  return (
    <div className="form">
      <h3>Login</h3>
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
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="error-alert">{errors?.password}</p>
        <button className="button" onClick={handleSubmit} type="submit">
          Login
        </button>

        <p className="error-alert">{errors?.error}</p>
      </div>

      <span>
        Don't have an account, <Link to="/signup">Click here</Link>
      </span>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    loading: state.user.loading,
    errors: state.user.errors,
  };
}
export default connect(mapStateToProps, { loginUser })(Login);
