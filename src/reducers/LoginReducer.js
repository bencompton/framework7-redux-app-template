const initialState = {
  username: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERNAME_UPDATED':
      return {
        ...state,
        username: action.payload
      };
    case 'PASSWORD_UPDATED':
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};
