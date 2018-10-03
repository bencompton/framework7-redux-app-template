import { connect } from 'react-redux'

import FormPage from '../components/pages/FormPage';
import {
  goBackToHomePage,
  nameUpdated,
  emailUpdated,
  urlUpdated,
  passwordUpdated,
  phoneUpdated,
  genderUpdated,
  birthdateUpdated,
  toggleUpdated,
  sliderUpdated,
  textAreaUpdated,
  resizableUpdated,
  checkboxUpdated,
  radioButtonUpdated
} from '../actions/FormActions';
import { getFormData } from '../selectors/FormSelectors';

const mapStateToProps = (state) => {
  return getFormData(state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage()),
    onNameUpdated: (name) => dispatch(nameUpdated(name)),
    onEmailUpdated: (email) => dispatch(emailUpdated(email)),
    onUrlUpdated: (url) => dispatch(urlUpdated(url)),
    onPasswordUpdated: (password) => dispatch(passwordUpdated(password)),
    onPhoneUpdated: (phone) => dispatch(phoneUpdated(phone)),
    onGenderUpdated: (gender) => dispatch(genderUpdated(gender)),
    onBirthdateUpdated: (birthdate) => dispatch(birthdateUpdated(birthdate)),
    onToggleUpdated: () => dispatch(toggleUpdated()),
    onSliderUpdated: (range) => dispatch(sliderUpdated(range)),
    onTextAreaUpdated: (text) => dispatch(textAreaUpdated(text)),
    onResizableUpdated: (text) => dispatch(resizableUpdated(text)),
    onCheckboxUpdated: (checkbox) => dispatch(checkboxUpdated(checkbox)),
    onRadioButtonUpdated: (radioButton) => dispatch(radioButtonUpdated(radioButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
