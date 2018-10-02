import { navigateTo, goBack } from 'framework7-redux';

export const openPopup = () => navigateTo('/popup/');
export const closePopup = () => goBack();
