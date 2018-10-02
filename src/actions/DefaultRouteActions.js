import { goBack, navigateTo } from 'framework7-redux';

export const goToDefaultRoute = () => navigateTo('/load-something-that-doesnt-exist/');
export const goBackToHomePage = () => goBack();