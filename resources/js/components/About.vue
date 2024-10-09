<template>
    <section :class="isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-8">About Me</h2>
            <div class="flex flex-col md:flex-row items-center md:items-start">
                <!-- Profile Picture -->
                <img :src="profilePic" alt="Zohaib Gulzar"
                    class="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0 object-cover" />

                <!-- About Text -->
                <div class="md:flex-1 text-center md:text-left">
                    <h3 class="text-2xl font-semibold mb-4">Hello! I'm Zohaib Gulzar</h3>
                    <p class="mb-4">
                        I am a passionate Laravel developer with over 2 years of experience in building dynamic web
                        applications. I specialize in creating efficient and scalable solutions that meet client needs
                        while ensuring an exceptional user experience. My journey in web development has equipped me
                        with a strong foundation in both frontend and backend technologies.
                    </p>
                    <h4 class="text-xl font-semibold mb-2">Skills & Technologies:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Laravel</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <p>
                        I am dedicated to continuous learning and adapting to new technologies to improve my skill set.
                        When I’m not coding, I enjoy contributing to open-source projects and collaborating with fellow
                        developers to enhance my understanding of various programming paradigms.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isDarkMode: false,
            profilePic: '/storage/profile_pics/7ASEHhLgve6CWFfap6X2h2Sui3ZcUFuKwGApvRa5.jpg',  // Correct path to the profile picture
        };
    },
    mounted() {
        const savedTheme = localStorage.getItem('isDarkMode');
        this.isDarkMode = savedTheme ? JSON.parse(savedTheme) : false;
    },
}
</script>

<style scoped>
.container {
    max-width: 1200px;
}

img {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Soft shadow */
    object-fit: cover;
    /* Ensures the image covers the entire circle */
}

h2 {
    color: #1a202c;
    /* Tailwind's Gray-900 */
}

p,
li {
    line-height: 1.6;
}
</style>
