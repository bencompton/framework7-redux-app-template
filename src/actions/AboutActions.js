import { goBack, navigateTo } from 'framework7-redux';

export const goToAbout = () => navigateTo('/about/');
export const goBackToHomePage = () => goBack();
