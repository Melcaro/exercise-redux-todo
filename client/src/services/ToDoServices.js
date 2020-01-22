import axios from 'axios';

const URL =
  'https://www.jsonstore.io/69a5ad8b7b235459f7e1b12f3cd1d89a88a46eb454e26d17ea4dedda0dcee2af';

export async function fetchTaskService() {
  const {
    data: { result },
  } = await axios.get(`${URL}/tasks`);
  return Object.values(result);
}

export function addTask(taskName, done, taskID) {
  return axios.post(`${URL}/tasks/${taskID}`, { taskName, done, taskID });
}
