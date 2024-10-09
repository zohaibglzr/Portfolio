require('./bootstrap');

import { createApp } from 'vue';  // Import createApp from Vue
import App from './App.vue';
import router from './router';  // Import the router
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); // Initialize AOS for animations on scroll

// Create the Vue application instance
const app = createApp(App);  // Pass App as the root component

// Register Vue components
import Welcome from './components/Welcome.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';

// Register components globally
app.component('welcome', Welcome);
app.component('about', About);
app.component('skills', Skills);
app.component('contact', Contact);

// Use the router
app.use(router);

// Mount the application to the DOM
app.mount('#app');
