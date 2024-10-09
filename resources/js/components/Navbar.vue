<template>
    <nav :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-indigo-600 text-white'" class="py-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center px-4">
        <router-link to="/" class="text-2xl font-bold">Zohaib Gulzar</router-link>
        <div class="flex space-x-6">
          <router-link to="/" class="hover:text-indigo-200 transition duration-300">Home</router-link>
          <router-link to="/about" class="hover:text-indigo-200 transition duration-300">About</router-link>
          <router-link to="/skills" class="hover:text-indigo-200 transition duration-300">Skills</router-link>
          <router-link to="/contact" class="hover:text-indigo-200 transition duration-300">Contact</router-link>
          <!-- <button @click="toggleTheme" class="hover:text-indigo-200 transition duration-300">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button> -->
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    mounted() {
      const savedTheme = localStorage.getItem('isDarkMode');
      this.isDarkMode = savedTheme ? JSON.parse(savedTheme) : false;
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('isDarkMode', this.isDarkMode);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  