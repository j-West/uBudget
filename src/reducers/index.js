import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
import BudgetReducer from './budgetReducer'

const rootReducer = combineReducers({
  budgets: BudgetReducer,
  form: formReducer
});

export default rootReducer;
