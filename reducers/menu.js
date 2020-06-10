const initialState = {
    menu: [{
        user: {
            id: 1,
            nickname: "jongyeol",
        },
        content: "안녕하세요",
        img: "https://www.woowahan.com/img/pc/main-fonts-img.png",
    }],
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
