import { navigateTo, goBack } from 'framework7-redux';

import { goToForm } from './FormActions';
import { goToAbout } from './AboutActions';

export const openPanelLeft = () => navigateTo('/panel-left/');
export const closePanelLeft = () => goBack();

export const goToAboutPageFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft());
    dispatch(goToAbout());    
  };
};

export const goToFormPageFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft());
    dispatch(goToForm());    
  };
};