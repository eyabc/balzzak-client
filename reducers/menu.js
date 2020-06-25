const initialState = {
  menu: [{
    user: {
      id: 1,
      nickname: 'jongyeol',
    },
    content: '안녕하세요',
    img: 'https://www.woowahan.com/img/pc/main-fonts-img.png',
  }],
  imagePaths: [],
  addPostErrorReason: false,
  isAddingMenu: false,
};

// 타입
const ADD_MENU = 'ADD_POST';
// eslint-disable-next-line no-unused-vars
const ADD_DUMMY = 'ADD_DUMMY';

// 메인 메뉴 요청
export const LOAD_MAIN_MENUS_REQUEST = 'LOAD_MAIN_MENUS_REQUEST';
export const LOAD_MAIN_MENUS_SUCCESS = 'LOAD_MAIN_MENUS_SUCCESS';
export const LOAD_MAIN_MENUS_FAIL = 'LOAD_MAIN_MENUS_FAIL';

// 메뉴 올리기
export const ADD_MENU_REQUEST = 'ADD_MENU_REQUEST';
export const ADD_MENU_SUCCESS = 'ADD_MENU_SUCCESS';
export const ADD_MENU_FAIL = 'ADD_MENU_FAIL';

// 메뉴 삭제
export const REMOVE_MENU_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_MENU_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_MENU_FAIL = 'REMOVE_POST_FAIL';

// 댓글
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL';

// 해시태그
export const LOAD_HASHTAG_MENUS_REQUEST = 'LOAD_HASHTAG_MENUS_REQUEST';
export const LOAD_HASHTAG_MENUS_SUCCESS = 'LOAD_HASHTAG_MENUS_SUCCESS';
export const LOAD_HASHTAG_MENUS_FAIL = 'LOAD_HASHTAG_MENUS_FAIL';

// 이미지 올리기
export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGES_FAIL';

// 이미지 삭제
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

// 좋아요 버튼
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAIL = 'LIKE_POST_FAIL';

// 좋아요 버튼 취소
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAIL = 'UNLIKE_POST_FAIL';

// 액션
// eslint-disable-next-line no-unused-vars
const addMenu = {
  type: ADD_MENU,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
