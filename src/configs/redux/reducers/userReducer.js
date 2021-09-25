const initialState = {
  profile: {},
  user: {},
  avatar: "https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg",
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        profile: action.payload
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'REGISTER_USER':
      return {
        ...state,
        profile: action.payload
      }
    case 'SET_USER':
      return {
        ...state
      }
    case 'GET_USER':
        return {
          ...state,
          user: action.payload
        }
    default:
      return state
  }
}

export default userReducer