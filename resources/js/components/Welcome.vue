<template>
    <!-- Fullscreen Welcome Section -->
    <section class="relative h-screen flex flex-col justify-center items-center bg-dark-blue text-white"
        :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black opacity-60"></div>

        <!-- Main Content -->
        <div class="relative z-10 text-center mx-auto">
            <h1 class="text-7xl font-extrabold mb-4 uppercase tracking-wide leading-tight" data-aos="fade-up">Zohaib
                Gulzar</h1>
            <p class="text-2xl font-light mb-8" data-aos="fade-up" data-aos-delay="200">
                Laravel Developer | 2 Years of Experience
            </p>
            <div class="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="400">
                <router-link to="/contact"
                    class="bg-transparent border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    Get in Touch
                </router-link>
                <router-link to="/about"
                    class="bg-transparent border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    Learn More
                </router-link>
            </div>
        </div>
    </section>

    <!-- About My Work Section -->
    <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-12 uppercase text-dark-blue">About My Work</h2>
            <p class="text-lg max-w-2xl mx-auto text-center mb-8 text-gray-700">
                Over the past 2 years, I have worked on a range of Laravel projects including custom APIs,
                e-commerce solutions, and user dashboards. I ensure scalable and high-performance applications
                that enhance user experiences.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <h3 class="text-2xl font-semibold mb-4">API Development</h3>
                    <p class="text-base text-gray-600">Building robust APIs for seamless data flow between frontend and
                        backend.</p>
                </div>
                <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <h3 class="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
                    <p class="text-base text-gray-600">Developing scalable e-commerce platforms with payment gateway
                        integration.</p>
                </div>
                <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <h3 class="text-2xl font-semibold mb-4">User Dashboards</h3>
                    <p class="text-base text-gray-600">Creating intuitive user interfaces with real-time data
                        visualizations.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-light-gray">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <h2 class="text-5xl font-bold text-dark-blue mb-12 uppercase">Skills</h2>
            <div class="flex flex-wrap justify-center gap-8">
                <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <h3 class="text-xl font-semibold text-dark-blue">Laravel</h3>
                    <div class="bg-gray-300 rounded-full h-2 mt-2">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: 85%;"></div>
                    </div>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <h3 class="text-xl font-semibold text-dark-blue">Vue.js</h3>
                    <div class="bg-gray-300 rounded-full h-2 mt-2">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: 75%;"></div>
                    </div>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <h3 class="text-xl font-semibold text-dark-blue">PHP</h3>
                    <div class="bg-gray-300 rounded-full h-2 mt-2">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-dark-blue text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8">Contact Me</h2>
            <p class="text-lg">Email: <a href="mailto:zohaibgulzar2474@gmail.com"
                    class="underline hover:text-blue-400 transition duration-300">zohaibgulzar2474@gmail.com</a></p>
            <p class="text-lg">GitHub: <a href="https://github.com/zohaibglzr"
                    class="underline hover:text-blue-400 transition duration-300">github.com/zohaibglzr</a></p>
            <p class="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/zohaib-gulzar-3204251b1"
                    class="underline hover:text-blue-400 transition duration-300">linkedin.com/in/zohaib-gulzar</a></p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            backgroundImage: '/images/background.jpg', // Placeholder for the background image
        };
    },
    mounted() {
        AOS.init();
    },
};
</script>

<style scoped>
/* Colors */
.bg-dark-blue {
    background-color: #2c3e50;
}

.bg-light-gray {
    background-color: #f7f7f7;
}

.text-dark-blue {
    color: #2c3e50;
}

/* Animations */
[data-aos="fade-up"] {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
}

[data-aos="fade-up"].aos-animate {
    opacity: 1;
    transform: translateY(0);
}

button:hover,
a:hover {
    transform: scale(1.05);
}

button {
    transition: transform 0.3s ease-in-out;
}

img {
    border-radius: 50%;
}
</style>
