import { connect } from 'react-redux'

import FormPage from '../components/pages/FormPage';
import { goBackToHomePage } from '../actions/FormActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  };
};

export default connect(null, mapDispatchToProps)(FormPage);