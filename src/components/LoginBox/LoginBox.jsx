import "./LoginBox.css";

const LoginBox = (props) => {
  return (
    <div className="login-box">
      <div className="logo">logo</div>
      <h2 className="login-title">member login</h2>
      <form action="">
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
          />
        </div>
        <button className="login-button" onClick={props.handleLoginRequest}>
          Login
        </button>
      </form>
      <footer className="login-footer">All right reserved</footer>
    </div>
  );
};

export default LoginBox;
