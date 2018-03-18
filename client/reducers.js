import { combineReducers } from 'redux';

// Import Reducers
import intl from '../src/App/components/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
});
