const initialState = {
    name: '',
    email: '',
    url: '',
    password: '',
    phone: '',
    gender: '',
    birthdate: '1999-04-05',
    toggle: false,
    slider: 50,
    textArea: '',
    resizable: '',
    checkboxGroup: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    },
    radioButtonsGroup: 0
};
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'FORM_NAME_UPDATED':
        return {
          ...state,
          name: action.payload
        };
      case 'FORM_EMAIL_UPDATED':
        return {
          ...state,
          email: action.payload
        };
      case 'FORM_URL_UPDATED':
        return {
          ...state,
          url: action.payload
        };
      case 'FORM_PASSWORD_UPDATED':
        return {
          ...state,
          password: action.payload
        };
      case 'FORM_PHONE_UPDATED':
        return {
          ...state,
          phone: action.payload
        };
      case 'FORM_GENDER_UPDATED':
        return {
          ...state,
          gender: action.payload
        };
      case 'FORM_EMAIL_UPDATED':
        return {
          ...state,
          email: action.payload
        };
      case 'FORM_TOGGLE_UPDATED':
        return {
          ...state,
          toggle: action.payload
        };
      case 'FORM_SLIDER_UPDATED':
        return {
          ...state,
          slider: action.payload
        };
      case 'FORM_RESIZABLE_UPDATED':
        return {
          ...state,
          resizable: action.payload
        };
      case 'FORM_CHECKBOX_UPDATED':
        return {
          ...state,
          checkboxGroup: {
            ...state.checkboxGroup,
            [`checkbox${action.payload}`]: !state.form.checkboxGroup[`checkbox${action.payload}`]
          }
        };
      case 'FORM_RADIO_BUTTON_UPDATED':
        return {
          ...state,
          radioButtonsGroup: action.payload
        };        
      default:
        return state;
    }
  };
  