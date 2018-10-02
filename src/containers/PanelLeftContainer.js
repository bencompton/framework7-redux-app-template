import { connect } from 'react-redux'

import PanelLeft from '../components/modals/PanelLeft';
import { closePanelLeft, goToAboutPageFromLeftPanel, goToFormPageFromLeftPanel } from '../actions/PanelLeftActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToAbout: () => dispatch(goToAboutPageFromLeftPanel()),
    onGoToForm: () => dispatch(goToFormPageFromLeftPanel()),
  };
};

export default connect(null, mapDispatchToProps)(PanelLeft);
