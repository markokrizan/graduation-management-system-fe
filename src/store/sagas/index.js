import { fork } from 'redux-saga/effects';

import AuthSaga from './AuthSaga';
import TaskSaga from './TaskSaga';

export default function* rootSaga() {
  yield fork(AuthSaga);
  yield fork(TaskSaga);
}
