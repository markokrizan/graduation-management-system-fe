import { GET_NEXT_TASK, SET_TASK } from './TaskActionTypes';

export const getNextTask = () => {
    return {
        type: GET_NEXT_TASK,
    }
}

export const setTask = payload => {
    return {
        type: SET_TASK,
        payload
    }
}
