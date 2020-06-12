import user from './user';
import menu from './menu'
import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        call(user),
        call(menu)
    ])
}
