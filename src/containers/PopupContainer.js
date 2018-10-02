import { connect } from 'react-redux'

import Popup from '../components/modals/Popup';
import { openPopup, closePopup } from '../actions/PopupActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenPopup: () => dispatch(openPopup()),
    onClosePopup: () => dispatch(closePopup()),    
  };
};

export default connect(null, mapDispatchToProps)(Popup);
