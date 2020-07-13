import ApiService from './ApiService';

const ENDPOINTS = {
  TASK: '/api/task',
  COMPLETE_TASK: '/api/task/complete'
};

class TaskService extends ApiService {
  constructor() {
    super();
  }

  getNextTask = () => {
    return this.apiClient.get(ENDPOINTS.TASK);
  };

  completeTask = data => {
    return this.apiClient.post(ENDPOINTS.COMPLETE_TASK, data);
  }
}

const taskService = new TaskService();

export default taskService;
