import { connect } from 'react-redux'

import About from '../components/pages/AboutPage';
import * as AboutActions from '../actions/AboutActions';

export default connect(null, AboutActions)(About);