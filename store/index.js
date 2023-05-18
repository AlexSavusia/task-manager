import axios from "axios"

export const state = () => ({
  tasks: [
    ],
})
const baseURL = 'http://localhost:3001'
export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  },
  addTask(state, task) {
    state.tasks.push(task)
  },
  removeTask(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  },
  updateTaskStatus(state, { taskId, status }) {
    const task = state.tasks.find(task => task.id === taskId)
    if (task) {
      task.status = status
    }
  }
}

export const actions = {
  async fetchTasks({ commit }) {
    try {
      const response = await axios.get(`http://localhost:3001/tasks`);
      commit('setTasks', response.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  },
  async addTask({ commit }, task) {
    try {
      const response = await axios.post(`http://localhost:3001/tasks`, task)
      commit('addTask', response.data)
    } catch (error) {
      console.error('Error creating task:', error)
    }
  },
  async removeTask({ commit }, taskId) {
    try {
      await axios.delete(`http://localhost:3001/tasks/${taskId}`)
      commit('removeTask', taskId)
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  },
  async updateTaskStatus({ commit }, { taskId, title, main, status }) {
    try {
      await axios.put(`http://localhost:3001/tasks/${taskId}`, { status, title, main })
      commit('updateTaskStatus', { taskId, status })
    } catch (error) {
      console.error('Error updating task status:', error)
    }
  }
}