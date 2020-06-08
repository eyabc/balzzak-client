const initialState = {
    menu: [],
}

// 타입
const ADD_MENU = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

// 액션
const addMenu = {
    type: ADD_MENU,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MENU: {
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export default reducer;
