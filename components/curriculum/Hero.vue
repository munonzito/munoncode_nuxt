<template>
    <section class="max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            <div class="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 class="font-extrabold text-4xl lg:text-6xl tracking-tight flex flex-col gap-3 items-center lg:items-start">
                    <span class="relative">{{ name }}</span>
                    <span class="whitespace-nowrap relative">
                        <span class="mr-3 sm:mr-4 md:mr-5">aka</span>
                        <span class="relative whitespace-nowrap">
                            <span class="absolute bg-white -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                            <span class="relative text-secondary-purple">{{ username }}</span>
                        </span>
                    </span>
                </h1>
                
                <p class="text-xl opacity-90 leading-relaxed max-w-2xl">
                    {{ description }}
                </p>

                <div class="flex gap-4 justify-center lg:justify-start flex-wrap">
                    <a v-for="social in socialLinks" :key="social.name"
                       :href="social.url" target="_blank" 
                       class="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <font-awesome-icon :icon="social.icon" class="text-3xl"/>
                    </a>
                </div>
            </div>
            
            <div class="relative">
                <img class="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-white/20 shadow-2xl object-cover" 
                     :src="profileImage" 
                     :alt="name">
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    socialLinks: {
        type: Array,
        default: () => []
    }
})
</script>
