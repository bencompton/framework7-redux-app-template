import { connect } from 'react-redux'

import Home from '../components/pages/HomePage';
import * as HomeActions from '../actions/HomeActions';

export default connect(null, HomeActions)(Home);