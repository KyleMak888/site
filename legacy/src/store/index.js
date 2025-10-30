import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayContactForm: false
  },
  getters: {
    displayContactForm: state => {
      return state.displayContactForm
    }
  },
  mutations: {
    showContactForm: (state) => {
      state.displayContactForm = true
    },
    hideContactForm: (state) => {
      state.displayContactForm = false
    }
  },
  actions: {
    showContactForm: ({ commit }) => {
      commit('showContactForm')
    },
    hideContactForm: ({ commit }) => {
      commit('hideContactForm')
    }
  },
  modules: {
  }
})
