import { useState } from "react";
import "./LoginBox.css";

const LoginBox = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogin = (event) => {
    props.handleLoginRequest(email, password, event);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-box">
      <div className="logo">logo</div>
      <h2 className="login-title">member login</h2>
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-button" onClick={submitLogin}>
          Login
        </button>
      </form>
      <footer className="login-footer">All right reserved</footer>
    </div>
  );
};

export default LoginBox;
