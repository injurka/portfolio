import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/experience', component: Experience, name: 'Experience' },
    { path: '/projects', component: Projects, name: 'Projects' },
    { path: '/about', component: About, name: 'About' },
  ],
});

export default router;
