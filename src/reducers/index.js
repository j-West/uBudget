import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
import budgetReducer from './budgetReducer'

const rootReducer = combineReducers({
  budget: budgetReducer,
  form: formReducer
});

export default rootReducer;
