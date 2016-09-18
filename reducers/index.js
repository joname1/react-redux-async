import { combineReducers } from 'redux'
import {
  IS_FETCHING,
  SAVE_ITEMS,
  SAVE_POST_STATUS
} from '../actions'

const initState = {
  isFetch: false,
  postMsg: '',
  items: []
}

export function someResult(state = initState, action) {
  switch (action.type) {
    case IS_FETCHING:
      // return {...state,isFetch: action.status}
      return Object.assign({},state,{isFetch: action.status})
    case SAVE_ITEMS:
      // return {
      //   ...state,
      //   items: action.data
      // }
      return Object.assign({},state,{items: action.data})
    case SAVE_POST_STATUS:
      return Object.assign({},state,{postMsg: action.msg})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  someResult
})

export default rootReducer
