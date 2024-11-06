import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
// Import Bootstrap JS (optional, if you need Bootstrap's JavaScript components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import store from './store';

// Create and mount the Vue app
const app = createApp(App);

// Register the router with the app
app.use(router);
app.use(store);
// Mount the app to the DOM
app.mount('#app');

