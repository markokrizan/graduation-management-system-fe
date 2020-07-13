import { GET_NEXT_TASK, COMPLETE_TASK, SET_TASK } from './TaskActionTypes';

export const getNextTask = () => {
    return {
        type: GET_NEXT_TASK,
    }
}

export const completeTask = payload => {
    return {
        type: COMPLETE_TASK,
        payload
    }
}

export const setTask = payload => {
    return {
        type: SET_TASK,
        payload
    }
}
