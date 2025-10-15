<template>
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-preuai-green rounded-full"></span>
            {{ category }}
        </h3>
        <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill"
                  class="bg-gradient-to-r from-gradient-start to-gradient-end text-white px-3 py-1 rounded-lg font-semibold text-sm">
                {{ skill }}
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    category: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
})
</script>
