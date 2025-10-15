<template>
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
        <div class="flex items-start gap-4 mb-4">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center"
                 :class="iconBgClass">
                <span class="text-4xl">{{ icon }}</span>
            </div>
            <div class="flex-1">
                <h3 class="text-2xl font-bold text-white mb-1">{{ degree }}</h3>
                <p class="text-sm text-white/60 mb-2">Diploma en Tecnologías de la Información</p>
                <p class="font-semibold text-lg">{{ institution }}</p>
                <p class="text-white/70">{{ period }}</p>
             
            </div>
        </div>
        <div v-if="major || minor" class="mt-6 pt-6 border-t border-white/10">
            <div class="grid md:grid-cols-2 gap-4">
                <div v-if="major" class="bg-gradient-to-br from-preuai-green/20 to-preuai-green/10 p-4 rounded-xl border border-preuai-green/30">
                    <p class="text-sm text-white/60 font-semibold mb-1 uppercase tracking-wide">Major</p>
                    <p class="text-white font-bold text-lg">{{ major }}</p>
                </div>
                <div v-if="minor" class="bg-gradient-to-br from-white/15 to-white/5 p-4 rounded-xl border border-white/20">
                    <p class="text-sm text-white/60 font-semibold mb-1 uppercase tracking-wide">Minor</p>
                    <p class="text-white font-bold text-lg">{{ minor }}</p>
                </div>
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
        default: 'bg-primary-purple/20'
    },
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    institutionColorClass: {
        type: String,
        default: 'text-white/80'
    },
    period: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: ''
    },
    major: {
        type: String,
        default: ''
    },
    minor: {
        type: String,
        default: ''
    }
})
</script>
