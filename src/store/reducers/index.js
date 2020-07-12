import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import loaderReducer from './LoaderReducer';
import taskReducer from './TaskReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    loader: loaderReducer,
    task: taskReducer,
    router: connectRouter(history)
  });
