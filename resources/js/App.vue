<template>
    <div id="app">
        <navbar></navbar> <!-- If you're using a Navbar component -->
        <router-view /> <!-- This is where your routed pages will be rendered -->
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>