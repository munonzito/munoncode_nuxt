<template>
    <div class="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
        <div class="text-5xl font-bold mb-2" :class="valueColorClass">{{ value }}</div>
        <p class="text-white/90 font-semibold text-lg">{{ label }}</p>
    </div>
</template>

<script setup>
defineProps({
    value: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    valueColorClass: {
        type: String,
        default: 'text-preuai-green'
    }
})
</script>
