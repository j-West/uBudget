import axios from 'axios'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_BUDGETS, ADD_EXPENSE } from './types'


const ROOT_URL = `http://localhost:3000/api/`

export function signInUp({email, password}, endpoint) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}${endpoint}`, {email, password})
    .then(response => {

      dispatch({
        type : AUTH_USER,
        payload : response.data.userId
       })

       dispatch({
         type: GET_BUDGETS,
         payload: response.data.budgets
       })

      localStorage.setItem('token', response.data.token)
    })
    .catch(() => {
      dispatch(authError('The email and password you entered to not match a registered user.'))
    })
  }
}

export function authError(error) {
  return {
    type:AUTH_ERROR,
    payload: error
  }
}

export function signUserOut() {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}


export function addExpense(values) {

  return {
    type: ADD_EXPENSE,
    payload: { msg: 'slow down there speedracer'}
  }
}


export function getUserBudgets(userId) {

  const request = axios.get(`${ROOT_URL}getbudgets`, {userId})

    return{
      type: GET_BUDGETS,
      payload: request
    }
}
