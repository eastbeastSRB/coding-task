import { createStore } from "vuex";

// mock data
import UsersMock from '../data/user_roles.json';


export const store = createStore({
  state: {
    userList: [],
    statusSearch: false,
  },
  mutations: {
    setUsersList(state, payload){
      state.userList = payload;
    },
  },
  actions: {
    async setUsersList({commit}) {
      // usually when comes to https req i'm using axios, to handle the data
      // const url = `${URL}`;
      // const data = await axios.get(url);

      const userList = UsersMock;
      commit('setUsersList', userList)
    },
    async searchUser({commit }, form) {
      // next line should be http req in real scenario, in our case just loading mock
      const mockedUsers = UsersMock
      const filteredUser = mockedUsers.filter((user) => {
        if (form !== null && user.name.toLowerCase().includes(form.toLowerCase())) {
          return user
        }
      })

      commit('setUsersList', filteredUser)
    },
    async searchUserByStatus({commit}, form) {
      const userList = UsersMock;
      const status =
      form === 'Active' ? true : form === 'Active and Inactive' ? null : false

      const filteredUser = userList.filter((user) => {
        if (status === null) return user
        else if (user.active === status) {
          return user
        }
      })

      commit('setUsersList', filteredUser)
      },

      async deleteUser({commit, state}, id){
        const role = state.userList.find((role) => role.id === id)
        const filtered = state.userList.filter(userRole => userRole !== role);

        commit('setUsersList', filtered)
      }
    },
  getters: {
    userList: (state) => {
      return state.userList;
    },
    user: (state) => (id) => {
      return state.userList.find((player) => player.id === id);
    }
  }
});
