import { 
    SET_TASK
} from '../actions/TaskActionTypes';

const initialState = {
    currentTask: null
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return { currentTask: action.payload };
        default:
            return state;
    }
};

export default taskReducer;
  