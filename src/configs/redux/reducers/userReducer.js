const initialState = {
  profile: {},
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
    default:
      return state
  }
}

export default userReducer