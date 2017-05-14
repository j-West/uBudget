import { GET_BUDGETS, ADD_EXPENSE, TRY_LOGIN } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {

  switch(action.type) {

  case GET_BUDGETS:
    return _.mapKeys(action.payload.data, '_id')

  default:
    return state
  }
}
