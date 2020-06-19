import { all, call } from 'redux-saga/effects';
import user from './user';
import menu from './menu';

export default function* rootSaga() {
  yield all([
    call(user),
    call(menu),
  ]);
}
