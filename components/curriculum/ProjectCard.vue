<template>
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
        <img :src="image" :alt="title" 
             class="w-20 h-20 rounded-2xl object-cover mb-4 mx-auto">
        <h3 class="text-xl font-bold text-white mb-3 text-center">{{ title }}</h3>
        <p class="text-white/80 text-sm mb-4 text-center">{{ description }}</p>
        <div class="flex flex-wrap gap-2 justify-center mb-4">
            <span v-for="tech in technologies" :key="tech"
                  class="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold">
                {{ tech }}
            </span>
        </div>
        <a :href="url" target="_blank"
           class="block text-center bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all">
            Ver proyecto →
        </a>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        default: () => []
    }
})
</script>
