import { createRouter, createWebHistory } from 'vue-router'; // Import the necessary functions
import Welcome from '../components/Welcome.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

// Define your routes
const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
});

export default router; // Export the router instance
