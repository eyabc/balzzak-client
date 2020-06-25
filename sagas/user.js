import {
  all, fork, put, takeEvery, take, call, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL,
} from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

// 로그인
function loginAPI() {

}

// call 동기 _ api요청에서 주로 사용
function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAIL,
    });
  }
}

// takeLatest가 LOGIN 액션이 dispatch 되길 기다려서 dispatch될 때 login 제너레이터를 호출
function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
  // while(true){
  //     yield take(LOGIN); // take: 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트 (take함수 안에 next가 들어있다)
  //     yield delay(2000);
  //     yield put({ // put: dispatch의 기능
  //         type: LOGIN_SUCCESS
  //     });
  // }
}

// 회원가입
function signUpApi() {
  return axios.post('/signUp');
}

function* signUp() {
  try {
    //yield call(signUpApi);
    yield delay(2000);
    throw new Error('에러에러');
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGNUP_FAIL,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

// 메인 화면 접속시
function* hellosaga() {
  console.log('before saga');
  yield take(HELLO_SAGA);
  console.log('hello saga');
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(hellosaga),
  ]);
}
