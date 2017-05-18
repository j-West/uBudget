import { GET_BUDGETS, ADD_EXPENSE, TRY_LOGIN } from '../actions/types'
import _ from 'lodash'

export default function(state = {}, action) {

  switch(action.type) {

  case GET_BUDGETS:
  console.log(`action:`, action);
    return { budgets: _.mapKeys(action.payload.data, "monthName") }


  default:
    return state
  }
}
