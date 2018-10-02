import { connect } from 'react-redux'

import DynamicRoutePage from '../components/pages/DynamicRoutePage';
import { goBackToHomePage } from '../actions/DynamicRouteActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  };
};

export default connect(null, mapDispatchToProps)(DynamicRoutePage);