import { connect } from 'react-redux'

import NotFoundPage from '../components/pages/NotFoundPage';
import { goBackToHomePage } from '../actions/DefaultRouteActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  };
};

export default connect(null, mapDispatchToProps)(NotFoundPage);
