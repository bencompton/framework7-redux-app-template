import { goBack, navigateTo } from 'framework7-redux';

export const goBackToHomePage = () => goBack();
export const goToForm = () => navigateTo('/form/');

export const nameUpdated = (name) => ({
    type: 'FORM_NAME_UPDATED',
    payload: name
});

export const emailUpdated = (email) => ({
    type: 'FORM_EMAIL_UPDATED',
    payload: email
});

export const urlUpdated = (url) => ({
    type: 'FORM_URL_UPDATED',
    payload: url
});

export const passwordUpdated = (password) => ({
    type: 'FORM_PASSWORD_UPDATED',
    payload: password
});

export const phoneUpdated = (phone) => ({
    type: 'FORM_PHONE_UPDATED',
    payload: phone
});

export const genderUpdated = (gender) => ({
    type: 'FORM_GENDER_UPDATED',
    payload: gender
});

export const birthdateUpdated = (birthdate) => ({
    type: 'FORM_BIRTHDATE_UPDATED',
    payload: birthdate
});

export const toggleUpdated = () => ({
    type: 'FORM_TOGGLE_UPDATED'
});

export const sliderUpdated = (value) => ({
    type: 'FORM_SLIDER_UPDATED',
    payload: value
});

export const textAreaUpdated = (text) => ({
    type: 'FORM_TEXTAREA_UPDATED',
    payload: text
});

export const resizableUpdated = (text) => ({
    type: 'FORM_RESIZABLE_UPDATED',
    payload: text
});

export const checkboxUpdated = (checkbox) => ({
    type: 'FORM_CHECKBOX_UPDATED',
    payload: checkbox
});
