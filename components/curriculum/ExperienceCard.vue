<template>
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300">
        <div class="flex items-start gap-4 mb-3">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                 :class="iconBgClass">
                <span class="text-3xl">{{ icon }}</span>
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="text-xl font-bold text-white">{{ title }}</h3>
                <p class="font-semibold" :class="companyColorClass">{{ company }}</p>
                <p class="text-sm text-white/60">{{ period }}</p>
            </div>
        </div>
        <div class="space-y-1.5 text-sm text-white/80">
            <div v-for="(achievement, index) in achievements" :key="index" 
                 class="flex items-start gap-2">
                <span class="text-preuai-green mt-0.5 flex-shrink-0">✓</span>
                <span v-html="achievement" class="leading-relaxed"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    iconBgClass: {
        type: String,
        default: 'bg-preuai-green/20'
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    companyColorClass: {
        type: String,
        default: 'text-preuai-green'
    },
    period: {
        type: String,
        required: true
    },
    achievements: {
        type: Array,
        required: true
    }
})
</script>
