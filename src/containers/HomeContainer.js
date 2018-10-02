import { connect } from 'react-redux'

import HomePage from '../components/pages/HomePage';
import { goToAbout } from '../actions/AboutActions';
import { goToForm } from '../actions/FormActions';
import { goToDynamicRoute } from '../actions/DynamicRouteActions';
import { goToDefaultRoute } from '../actions/DefaultRouteActions';
import { openPanelLeft } from '../actions/PanelLeftActions';
import { openPanelRight } from '../actions/PanelRightActions';
import { openPopup } from '../actions/PopupActions';
import { openLogin } from '../actions/LoginActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoToAbout: () => dispatch(goToAbout()),
    onGoToForm: () => dispatch(goToForm()),
    onGoToDynamicRoute: () => dispatch(goToDynamicRoute()),
    onGoToDefaultRoute: () => dispatch(goToDefaultRoute()),        
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    onOpenRightPanel: () => dispatch(openPanelRight()),            
    onOpenPopup: () => dispatch(openPopup()),
    onOpenLoginScreen: () => dispatch(openLogin())
  };
};

export default connect(null, mapDispatchToProps)(HomePage);