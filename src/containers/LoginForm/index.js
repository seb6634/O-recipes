import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import {
  setFieldValue,
  sendLogin,
  logout,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
