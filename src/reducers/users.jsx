import { GET_USERS_LIST, GET_USERS_DETAIL, POST_USERS, PUT_USER } from "../actions/userAction"


let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
  title: "wadudu"
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage
      }

    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage
      }

    case POST_USERS:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage
      }

    case PUT_USER:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage
      }

    default:
      return state;
  }
}

export default users