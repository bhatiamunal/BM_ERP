import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Define routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Using history mode
  routes
});

export default router;
