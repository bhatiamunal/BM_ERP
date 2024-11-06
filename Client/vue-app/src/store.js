// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    data: {}, // Example state
  },
  mutations: {
    // increment(state) {
    //   state.counter++;
    // },
    // decrement(state) {
    //   state.counter--;
    // }
  },
//   actions: {
//     increment({ commit }) {
//       commit('increment');
//     },
//     decrement({ commit }) {
//       commit('decrement');
//     }
//   },
//   getters: {
//     counter: (state) => state.counter,
//   },
});

export default store;
