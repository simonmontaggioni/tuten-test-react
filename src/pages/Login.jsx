import { connect } from "react-redux";
import { validationRequest } from "../redux/actions/ActionCreators";
import { Redirect } from "react-router-dom";

import LoginBox from "../components/LoginBox/LoginBox";

const Login = (props) => {
  const handleLoginRequest = (email, password, event) => {
    event.preventDefault();
    console.log(`login request: ${email}  ${password}`);
    props.validationRequest(email, password);
  };
  return (
    <div>
      {props.token.value ? (
        <Redirect to="/bookings" />
      ) : (
        <div>
          <LoginBox handleLoginRequest={handleLoginRequest}></LoginBox>
          {props.token.isLoading
            ? "Loading..."
            : props.token.errorMessage || null}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    user: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => ({
  validationRequest: (email, password) =>
    dispatch(validationRequest(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
