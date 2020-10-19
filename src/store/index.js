import { createStore } from 'vuex'
import actions from './actions'

export default createStore({
  state: {
    users: []
  },
  getters: {
    getUserByName (state) {
      return (name) => {
        return state.users.find((user) => {
          return user.login === name
        })
      }
    }
  },
  mutations: {
    updateUsers (state, payload) {
      state.users = payload
    }
  },
  actions,
  modules: {
  }
})
