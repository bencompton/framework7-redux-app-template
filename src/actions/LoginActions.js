import { goBack, navigateTo } from 'framework7-redux';

export const openLogin = () => navigateTo('/login/');
export const closeLogin = () => goBack();