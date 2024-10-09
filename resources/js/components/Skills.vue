<template>
    <section class="py-20 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-10" data-aos="fade-up">My Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="skill in skills" :key="skill.name" class="skill-card" data-aos="zoom-in">
                    <h3 class="text-2xl font-semibold mb-4">{{ skill.name }}</h3>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div :style="{ width: skill.level }" class="bg-blue-500 h-2 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: 'Laravel', level: '100%' },
                { name: 'Vue.js', level: '75%' },
                { name: 'JavaScript', level: '70%' },
                { name: 'PHP', level: '90%' },
                { name: 'MySQL', level: '90%' },
                { name: 'PgSQL', level: '80%' },
            ],
        };
    },
};
</script>

<style scoped>
.skill-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.container {
    max-width: 1200px;
}

.bg-blue-500 {
    transition: width 0.5s ease;
    /* Add smooth transition for the progress bar */
}
</style>
