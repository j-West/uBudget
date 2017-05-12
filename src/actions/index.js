export const TRY_LOGIN = 'TRY_LOGIN'
export const GET_BUDGETS = 'GET_BUDGETS'
export const ADD_EXPENSE = 'ADD_EXPENSE'


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


export function getUserBudgets(values,
  // redirectCB
) {
  //make request to server for login
  // .then(() => redirectCB())

  return {
    type: GET_BUDGETS,
    payload: { msg: 'slow down there speedracer'}
  }
}
