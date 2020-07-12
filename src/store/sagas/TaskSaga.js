import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NEXT_TASK } from '../actions/TaskActionTypes';
import { setTask } from '../actions/TaskActions';
import TaskService from '../../services/TaskService';

export function* nextTaskGet() {
  try {
    const { data } = yield call(TaskService.getNextTask);

    yield put(setTask(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* TaskSaga() {
  yield takeLatest(GET_NEXT_TASK, nextTaskGet);
}
