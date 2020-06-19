const dummyUser = {
  me: '박종열',
};

const initialState = {
  isLoggedIn: false,
  me: null,
  loggingIn: false,
  loggingOut: false,
  signedUp: false,
  isSigningUp: false,
  signUpErrorReason: false,
  loading: false,
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const loginAction = {
  type: LOGIN_REQUEST,
};

export const logoutAction = { type: LOGOUT_REQUEST };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        me: null,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        me: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
