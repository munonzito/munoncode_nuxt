<template>
    <div>
        <button class="w-full">
            <nuxt-link :to="url" target="_blank">
        <div class="w-full rounded-lg">
            <div class="shadow-lg bg-white w-full flex rounded-lg space-x-5">
                <div class="w-28">
                    <img class="w-28 h-full object-cover rounded-l-lg" :src="image" alt="">
                </div>
                <div class="flex flex-col my-5 text-start w-2/3 ">
                    <h1 class="font-bold ">{{ title }}</h1>
                    <p class="">{{ description }}</p>
            </div>
            </div>
        </div>
    </nuxt-link>
    </button>
       
    </div>
</template>

<script setup>

    const { title, description } = defineProps([
        'title',
        'description',
        'image',
        'url'
    ])

</script>

<style scoped>

</style>