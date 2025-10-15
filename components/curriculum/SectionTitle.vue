<template>
    <div class="text-center lg:text-left" :class="marginClass">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span v-if="highlightWord" v-html="getHighlightedTitle()"></span>
            <span v-else>{{ title }}</span>
        </h2>
        <p v-if="subtitle" class="text-xl text-white/90 max-w-4xl leading-relaxed">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    marginClass: {
        type: String,
        default: 'mb-8'
    },
    highlightWord: {
        type: String,
        default: ''
    }
})

const getHighlightedTitle = () => {
    if (!props.highlightWord) return props.title
    
    const parts = props.title.split(props.highlightWord)
    return parts.join(`<span class="relative whitespace-nowrap"><span class="absolute bg-white -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span><span class="relative text-secondary-purple">${props.highlightWord}</span></span>`)
}
</script>
