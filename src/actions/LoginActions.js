import { goBack, navigateTo, showAlert } from 'framework7-redux';

import { loginValid } from '../selectors/LoginSelectors';

export const openLogin = () => navigateTo('/login/');
export const closeLogin = () => goBack();

export const usernameUpdated = (username) => ({
  type: 'USERNAME_UPDATED',
  payload: username
});

export const passwordUpdated = (password) => ({
  type: 'PASSWORD_UPDATED',
  payload: password
});

export const login = () => {
    return (dispatch, getState) => {
      if (loginValid(getState())) {
        dispatch(closeLogin());
      } else {
        dispatch(showAlert('Incorrect password! Hint: please enter "password!".', 'Failed Login'));
      }
    };
};
