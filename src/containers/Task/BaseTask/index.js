import { connect } from 'react-redux';
import { compose } from 'redux';

import BaseTask from './BaseTask';

import { getNextTask, completeTask } from '../../../store/actions/TaskActions';

const mapStateToProps = state => {
    return {
        currentTask: state.task.currentTask
    };
};
  
const mapDispatchToProps = {
    getNextTask,
    completeTask
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(BaseTask)
