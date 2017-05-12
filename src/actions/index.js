import axios from 'axios'

export const TRY_LOGIN = 'TRY_LOGIN'
export const GET_BUDGETS = 'GET_BUDGETS'
export const ADD_EXPENSE = 'ADD_EXPENSE'

const ROOT_URL = `http://localhost:3000/api/`

export function tryLogin(values,
  // redirectCB
) {
  //make request to server for login
  // .then(() => redirectCB())

  return {
    type: TRY_LOGIN,
    payload: { msg: 'slow down there speedracer'}
  }
}


export function addExpense(values,
  // redirectCB
) {
  //make request to server for login
  // .then(() => redirectCB())

  return {
    type: ADD_EXPENSE,
    payload: { msg: 'slow down there speedracer'}
  }
}


export function getUserBudgets() {
  const endpoint = "getBudgets"
  const request = axios.get(`${ROOT_URL}${endpoint}`)

  return {
    type: GET_BUDGETS,
    payload: request
  }
}
