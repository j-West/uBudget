import { GET_BUDGETS, ADD_EXPENSE, TRY_LOGIN } from '../actions'

export default function(state = {}, action) {

  switch(action.type) {

  case GET_BUDGETS:
    console.log(action.payload.data)
    return { ...state, [action.payload.data[0]._id]: action.payload.data[0] }

  default:
    return state
  }
}
