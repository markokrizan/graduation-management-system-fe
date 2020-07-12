import ApiService from './ApiService';

const ENDPOINTS = {
  TASK: '/api/task',
};

class TaskService extends ApiService {
  constructor() {
    super();
  }

  getNextTask = () => {
    return this.apiClient.get(ENDPOINTS.TASK);
  };
}

const taskService = new TaskService();

export default taskService;
