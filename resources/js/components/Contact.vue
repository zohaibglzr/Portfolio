<template>
    <section class="bg-gray-900 text-white min-h-screen flex items-center justify-center py-20">
        <div class="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 class="text-4xl font-bold mb-8">Contact Me</h2>
            <p class="text-lg mb-4">I'm always open to discussing new projects or opportunities. Feel free to reach out!</p>
            <div class="space-y-4">
                <p class="text-lg">WhatsApp: 
                    <a href="+92301-6647384" class="underline hover:text-blue-400 transition">+92301-6647384</a>
                </p>
                <p class="text-lg">Email: 
                    <a href="mailto:zohaibgulzar2474@gmail.com" class="underline hover:text-blue-400 transition">zohaibgulzar2474@gmail.com</a>
                </p>
                <p class="text-lg">GitHub: 
                    <a href="https://github.com/zohaibglzr" class="underline hover:text-blue-400 transition">github.com/zohaibglzr</a>
                </p>
                <p class="text-lg">LinkedIn: 
                    <a href="https://www.linkedin.com/in/zohaib-gulzar-3204251b1" class="underline hover:text-blue-400 transition">linkedin.com/in/zohaib-gulzar-3204251b1</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    mounted() {
        AOS.init();
    }
}
</script>

<style scoped>
.min-h-screen {
    min-height: 100vh; /* Ensures the section takes the full height of the viewport */
}

@media (max-width: 640px) {
    h2 {
        font-size: 2.5rem; /* Adjust heading size for smaller screens */
    }

    .text-lg {
        font-size: 1rem; /* Adjust paragraph size for smaller screens */
    }
}
</style>
