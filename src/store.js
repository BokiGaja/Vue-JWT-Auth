import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null
  },
  getters: {
    loggedIn: state => state.token !== null
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    async login({commit}, credentials) {
      try {
        const {data} = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials);
        const token = data.access_token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('retrieveToken', token);
      } catch (e) {
        return e;
      }
    },
    async logout(context) {
      if (context.getters.loggedIn) {
        try {
          localStorage.removeItem('token');
          context.commit('destroyToken')
        } catch (e) {
          localStorage.removeItem('token');
          return e;
        }
      }
    }
  }
})
