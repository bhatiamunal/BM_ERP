// src/globalState.js
import { reactive } from 'vue';

const state = reactive({
  counter: 0, // Example state
});

const increment = () => {
  state.counter++;
};

const decrement = () => {
  state.counter--;
};

export default {
  state,
  increment,
  decrement,
};
