<template>
    <div class="main flex flex-col gap-10 px-5 py-10 lg:p-10 lg:flex-row">
        <div class="flex gap-5 lg:flex-col lg:mr-20">
            <img class="w-32 h-32 rounded-full" src="https://images-ext-2.discordapp.net/external/_g3yTiOuyF-We75avCfForGUH97hiLg0Ngh7TxDf8fU/%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fscl1-1.fna.fbcdn.net%26_nc_cat%3D103%26_nc_ohc%3D411u9t_ds3YAX9hpHpd%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfD7-WGuXfSX5iewSHqDi13BgHvhsSkiOMHZdEsmNpOs6w%26oe%3D6584EBAF%26_nc_sid%3D8b3546/https/instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-19/402904674_237572645808243_2763874709548207554_n.jpg?format=webp&width=400&height=400" alt="">
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