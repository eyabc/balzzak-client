import { all, fork, put, takeLatest, take, delay } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../reducers/user";

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {

}

// function* login() {
//     try{
//         yield call(loginAPI);
//         yield put({
//             type: LOGIN_SUCCESS
//         })
//     } catch (e) {
//         console.error(e);
//         yield put({
//             type: LOGIN_FAIL
//         })
//     }
// }

// takeLatest가 LOGIN 액션이 dispatch 되길 기다려서 dispatch될 때 login 제너레이터를 호출
function* watchLogin() {
    while(true){
        yield take(LOGIN); // take: 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트 (take함수 안에 next가 들어있다)
        yield delay(2000);
        yield put({ // put: dispatch의 기능
            type: LOGIN_SUCCESS
        });
    }
}

// 메인 화면 접속시
function* hellosaga() {
    console.log('before saga');
    yield take(HELLO_SAGA);
    console.log('hello saga')
}

export default function* userSaga() {
    yield all([
        watchLogin(),
        hellosaga(),
    ])
}
