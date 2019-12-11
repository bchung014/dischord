import { connect } from 'react-redux';
import { register, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  formType: 'Register',
  user: {
    email: '',
    username: '',
    password: ''
  },
  errors: state.errors.session
});

const mdp = dispatch => ({
  submitRequest: user => dispatch(register(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () => dispatch(login({ email: 'warreng@regulate.com', password: 'hunter2' }))
});

export default connect(msp, mdp)(SessionForm);