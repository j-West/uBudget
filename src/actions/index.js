import axios from 'axios'
import _ from 'lodash'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_BUDGETS, ADD_EXPENSE } from './types'

const ROOT_URL = `https://morning-fortress-82747.herokuapp.com/api/`

axios.defaults.headers.common['authorization'] = localStorage.getItem('token');

export function signInUp(values, endpoint) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}${endpoint}`, values)
    .then(response => {
      
      if (response.data.error) {
        throw new Error()
      }

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.userId)

      dispatch({
        type : AUTH_USER,
        payload : response.data.userId
       })

       return response
     })

     .then(response => {
       dispatch(getUserBudgets(response.data.userId))
    })

    .catch((error) => {
      if (endpoint === 'signup') {
        dispatch(authError('Email is already in use'))
      } else {
      dispatch(authError('The email and password you entered to not match a registered user.'))
        }
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
  localStorage.removeItem('userId')

  return { type: UNAUTH_USER }
}

export function createBudget(values) {
  return function(dispatch, getState) {
    const currentState = getState()
    values.budgetName = values.budgetName.toLowerCase()
    values._creator = currentState.auth.userId
    axios.post(`${ROOT_URL}addbudget`, values)
    .then(response => {
      dispatch(getUserBudgets(currentState.auth.userId))
    })
      // return{
      //   type: ADD_BUDGET,
      //   payload: request
      // }
  }
}


export function addExpense(values) {
  return function(dispatch, getState) {
    const currentState = getState()
    values.month = values.month.toLowerCase()
    let addNewExpense = {}
    _.map(currentState.userBudgets.budgets[values.month.toLowerCase()], month => {
      _.map(month, expense => {
        addNewExpense[expense.category] = expense.category === values.category.toLowerCase()
          ? {
            "expense" : (expense.expense + Number(values.expense)),
            "_id" : expense._id
          } : ''
      })
    })

    if (addNewExpense[values.category]) {
      values.expense = addNewExpense[values.category].expense
      values._id = addNewExpense[values.category]._id
    }

    axios.post(`${ROOT_URL}addexpense`, { values, "_id" : currentState.userBudgets.budgets[values.month]._id })
    .then(response => {
      dispatch(getUserBudgets(currentState.auth.userId))
    })

  }
}


export function getUserBudgets(userId) {
  const request = axios.post(`${ROOT_URL}getbudgets`, { userId })
    return{
      type: GET_BUDGETS,
      payload: request
    }
}
