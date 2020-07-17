import axios from 'axios'

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS = "POST_USERS";
export const PUT_USER = "PUT_USER";



export const getUsersList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3004/users')
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: GET_USERS_LIST,
          payload:{
            data: response.data,
            errorMessage:false
          }
        })
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        dispatch({
          type:GET_USERS_LIST,
          payload:{
            data:false,
            errorMessage: error.message
          }
        })
      })
  }
}
 
export const getUsersDetail= (id) => {
  return (dispatch) => {
    axios.get('http://localhost:3004/users/'+id)
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: GET_USERS_DETAIL,
          payload:{
            data: response.data,
            errorMessage:false
          }
        })
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        dispatch({
          type:GET_USERS_DETAIL,
          payload:{
            data:false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const postUser= (data) => {
  return (dispatch) => {
    axios.post('http://localhost:3004/users',data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_USERS,
          payload:{
            data: response.data,
            errorMessage:false
          }
        })
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        dispatch({
          type:POST_USERS,
          payload:{
            data:false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const putUser= (data,id) => {
  return (dispatch) => {
    axios.put('http://localhost:3004/users/'+id,data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: PUT_USER,
          payload:{
            data: response.data,
            errorMessage:false
          }
        })
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        dispatch({
          type:PUT_USER,
          payload:{
            data:false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const deleteUser= (id) => {
  return (dispatch) => {
    axios
      .delete('http://localhost:3004/users/'+id)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
}


export const deleteDataUser = () => {
  return(dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload:{
        data:false,
        errorMessage: false
      }
    });

    dispatch({
      type: POST_USERS,
      payload:{
        data:false,
        errorMessage: false
      }
    })
  }
}