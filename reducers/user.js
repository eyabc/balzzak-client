const dummyUser = {
    nickName: '박종열',
}

const initialState = {
    isLoggedIn: false,
    user: {
        nickName: null,
    }
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginAction = {
    type: LOGIN,
}

export const logoutAction = {
    type: LOGOUT,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;