import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
import BudgetReducer from './budgetReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  userBudgets: BudgetReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
