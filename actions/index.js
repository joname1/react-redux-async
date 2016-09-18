import { Fetch } from '../Fetch.js'
export const IS_FETCHING = 'IS_FETCHING'
export const SAVE_ITEMS = 'SAVE_ITEMS'
export const SAVE_POST_STATUS = 'SAVE_POST_STATUS'

export function isFetching(status) {
  return {
    type: IS_FETCHING,
    status
  };
}

export function saveItems(data) {
  return {
    type: SAVE_ITEMS,
    data
  };
}

export function savePostStatus(msg) {
  return {
    type: SAVE_POST_STATUS,
    msg
  };
}


export function postFetch(formData){
  return (dispatch) => {
    dispatch(isFetching(true))
    return Fetch('api/addComments',{
      method: 'POST',
      body: formData
    })
    .then(data => {
      dispatch(isFetching(false))
      dispatch(savePostStatus(data.message))
    })
  }
}

export function getFetch(){
  return (dispatch) => {
    dispatch(isFetching(true))
    return Fetch('api/getComments',{})
    .then(data => {
      dispatch(saveItems(data.data))
      dispatch(isFetching(false))
    })
  }
}


