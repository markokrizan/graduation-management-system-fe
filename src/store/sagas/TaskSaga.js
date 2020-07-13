import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NEXT_TASK, COMPLETE_TASK } from '../actions/TaskActionTypes';
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

export function* taskComplete({ payload }) {
  try {
    const { data } = yield call(TaskService.completeTask, payload);

    yield put(setTask(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* TaskSaga() {
  yield takeLatest(GET_NEXT_TASK, nextTaskGet);
  yield takeLatest(COMPLETE_TASK, taskComplete);
}
