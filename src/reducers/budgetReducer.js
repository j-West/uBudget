import { GET_BUDGETS } from '../actions/types'
import _ from 'lodash'

export default function(state = {}, action) {

  switch(action.type) {

  case GET_BUDGETS:
    return { budgets: _.mapKeys(action.payload.data, "budgetName") }

  default:
    return state
  }
}
