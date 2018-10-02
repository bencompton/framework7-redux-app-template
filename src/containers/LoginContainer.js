import { connect } from 'react-redux'

import LoginScreen from '../components/modals/LoginScreen';
import { usernameUpdated, passwordUpdated, login } from '../actions/LoginActions';
import { getUsername, getPassword } from '../selectors/LoginSelectors';

const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    password: getPassword(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameUpdated: (username) => dispatch(usernameUpdated(username)),
    onPasswordUpdated: (password) => dispatch(passwordUpdated(password)),
    onLogin: () => dispatch(login())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
