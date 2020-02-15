import { pinReducer } from './reducers/pinReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  pin: pinReducer
});
export type RootState = ReturnType<typeof rootReducer>;
