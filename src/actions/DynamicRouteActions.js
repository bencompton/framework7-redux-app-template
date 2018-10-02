import { goBack, navigateTo } from 'framework7-redux';

export const goToDynamicRoute = () => navigateTo('/dynamic-route/blog/45/post/125/?foo=bar#about');
export const goBackToHomePage = () => goBack();