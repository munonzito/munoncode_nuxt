<template>
    <div class="main flex flex-col gap-10 px-5 py-10 lg:p-10 lg:flex-row">
        <div class="flex gap-5 lg:flex-col lg:mr-20">
            <img class="w-32 h-32 rounded-full" src="assets/public/img/profile-pic.png" alt="">
            <div class="flex flex-col space-y-2">
                <h1 class="text-2xl font-bold">Martín Muñoz</h1>
                <h2 class="text-xl font-bold">@munoncode</h2>
                <p class="text-gray-500 w-2/3">Desarrollando y Monetizando Aplicaciones</p>
                <div class="flex space-x-10">
                  <nuxt-link to="https://www.youtube.com/@munoncode"><font-awesome-icon icon="fa-brands fa-youtube" class="text-2xl"/></nuxt-link>
                  <nuxt-link to="https://www.instagram.com/munoncode"><font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl"/></nuxt-link>
                  <nuxt-link to="https://www.tiktok.com/@munoncode"><font-awesome-icon icon="fa-brands fa-tiktok" class="text-2xl"/></nuxt-link>
                </div>
            </div>

        </div>
        <div class="w-full space-y-5">
            
                <ItemCard v-for="item in items" :title="item.title" :description="item.description" :image="item.image" :url="item.url" />
            
        </div>

    </div>
</template>

<script setup>
 const items = ref([
     {
         title: 'Tutor AI',
         description: 'Crea Tutores Personalizados de Inteligencia Artificial',
         image: 'https://play-lh.googleusercontent.com/jGccq1xrZ7XxhCIA3UOfO4mWhcKjRQAHpMoxEeZLZ0lE8RDgmmFVM4Cgo-29wXn4Gm4=w240-h480-rw',
         url: 'https://play.google.com/store/apps/details?id=com.munoncode.ai_tutor_app'
        },
     {
         title: 'AImage',
         description: 'Remueve el Fondo de Tus Fotos Usando Inteligencia Artificial',
         image: 'https://play-lh.googleusercontent.com/wJEqeRZGZds8tVZKQq-azZ1sp7IjYgF92zXVKYD1vy1LrV6xz4KVriABCjdjS8jQyA=w240-h480-rw',
         url: 'https://play.google.com/store/apps/details?id=com.munoncode.aimage'
        },
        {
         title: 'Threads AI',
         description: 'Escribe Posts Para Threads Usando La IA de ChatGPT ',
         image: 'https://play-lh.googleusercontent.com/jOSwNh-LBNEp2pQHNBoc9FLKdrYADgm3BgWN3CgxbnEzrJVMqb3l0CE_Nc05u9ZJb3o=w240-h480-rw',
         url: 'https://play.google.com/store/apps/details?id=com.munoncode.threadsai'
        },
     {
         title: 'Gigachad Esquiva Balas',
         description: 'Juego Meme Estilo Flappy Bird',
         image: 'https://play-lh.googleusercontent.com/aMo_WkfjZEH_euPR443t7w3EZ19rfDQcjUnTvZp5IbnSij5WC4DjPxghZ9wu1K8AZA=w240-h480-rw',
         url: 'https://play.google.com/store/apps/details?id=com.munoncode.gigachadapp'
        }
 ])

 useHead({
     title: 'munoncode',
     meta: [
         {
             name: 'description',
             content: 'Desarrollando y Monetizando Aplicaciones'
         }
     ]
 })
</script>

<style scoped>
.main {
    background-color: #f3f4f6;
    height: 100vh;
}

</style>