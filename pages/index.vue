<template>
    <div class="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end text-white">
        <!-- Hero Section -->
        <CurriculumHero 
            :name="heroData.name"
            :username="heroData.username"
            :description="heroData.description"
            :profile-image="heroData.profileImage"
            :social-links="heroData.socialLinks"
        />

        <!-- Resumen Profesional -->
        <section class="max-w-7xl mx-auto px-8">
            <CurriculumSectionTitle 
                title="Resumen Profesional"
                :subtitle="professionalSummary"
            />
        </section>

        <!-- Educación -->
        <section class="max-w-7xl mx-auto px-8">
            <CurriculumSectionTitle 
                title="Educación"
            />

            <div class="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                <CurriculumEducationCard
                    v-for="(education, index) in educationList"
                    :key="index"
                    :icon="education.icon"
                    :icon-bg-class="education.iconBgClass"
                    :degree="education.degree"
                    :institution="education.institution"
                    :institution-color-class="education.institutionColorClass"
                    :period="education.period"
                    :status="education.status"
                    :major="education.major"
                    :minor="education.minor"
                />
            </div>
        </section>

        <!-- Experiencia -->
        <section class="max-w-7xl mx-auto px-8 py-8">
            <CurriculumSectionTitle 
                title="Experiencia Profesional"
            />

            <div class="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                <CurriculumExperienceCard
                    v-for="(experience, index) in experiences"
                    :key="index"
                    :icon="experience.icon"
                    :icon-bg-class="experience.iconBgClass"
                    :title="experience.title"
                    :company="experience.company"
                    :company-color-class="experience.companyColorClass"
                    :period="experience.period"
                    :achievements="experience.achievements"
                />
            </div>
        </section>

        <!-- Proyectos Destacados -->
        <section class="max-w-7xl mx-auto px-8 py-8">
            <CurriculumSectionTitle 
                title="Proyectos Destacados"
                subtitle="Portfolio de aplicaciones con más de 100,000 descargas totales"
                highlight-word="Destacados"
            />

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CurriculumProjectCard
                    v-for="project in projects"
                    :key="project.title"
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                    :url="project.url"
                    :technologies="project.technologies"
                />
            </div>
        </section>

        <!-- Habilidades -->
        <section class="max-w-7xl mx-auto px-8 py-8">
            <CurriculumSectionTitle 
                title="Habilidades Técnicas"
            />

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CurriculumSkillCategory
                    v-for="category in skills"
                    :key="category.category"
                    :category="category.category"
                    :skills="category.items"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
// Hero Data
const heroData = {
    name: 'Martín Muñoz',
    username: '@munoncode',
    description: 'Indie Developer & Emprendedor Digital especializado en aplicaciones móviles con IA. Fundador de Munon Technologies con +100K descargas en Google Play.',
    profileImage: '/img/profile-pic.png',
    socialLinks: [
        { name: 'YouTube', url: 'https://www.youtube.com/@munoncode', icon: 'fa-brands fa-youtube' },
        { name: 'Instagram', url: 'https://www.instagram.com/munoncode', icon: 'fa-brands fa-instagram' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/munoncode', icon: 'fa-brands fa-linkedin' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@munoncode', icon: 'fa-brands fa-tiktok' }
    ]
}

// Professional Summary
const professionalSummary = 'Desarrollador indie y emprendedor digital especializado en la creación y monetización de aplicaciones móviles. Fundador de Munon Technologies, con un portafolio de 7+ aplicaciones publicadas en Google Play Store, alcanzando más de 100,000 descargas totales. Experto en integración de inteligencia artificial aplicada a soluciones educativas y de productividad.'

// Experiences
const experiences = [
    {
        icon: '🚀',
        iconBgClass: 'bg-preuai-green/20',
        title: 'Founder & Indie Developer',
        company: 'Munon Technologies',
        companyColorClass: 'text-white/80',
        period: '2020 - Presente',
        achievements: [
            'Desarrollo y publicación de 7+ aplicaciones móviles en Google Play Store con más de 100,000 descargas totales',
            'Creación de <strong>Preu AI</strong>: plataforma educativa con IA para preparación de exámenes PAES con ensayos ilimitados, tutor IA 24/7 y +400 miniclases',
            'Desarrollo de <strong>Tutor AI</strong>: app con 100,000+ descargas que permite crear tutores personalizados de IA para cualquier materia',
            'Integración avanzada de APIs de IA (ChatGPT, Computer Vision) en aplicaciones educativas y de productividad'
        ]
    },
    {
        icon: '📱',
        iconBgClass: 'bg-primary-purple/20',
        title: 'Content Creator & Educator',
        company: 'YouTube, Instagram, TikTok',
        companyColorClass: 'text-white/80',
        period: '2021 - Presente',
        achievements: [
            'Creación de contenido educativo sobre desarrollo de aplicaciones móviles con Flutter y tecnologías modernas',
            'Tutoriales sobre monetización de apps, estrategias de marketing digital y ASO (App Store Optimization)',
            'Enseñanza práctica de integración de IA en aplicaciones: ChatGPT API, Computer Vision y Machine Learning'
        ]
    },
    {
        icon: '💼',
        iconBgClass: 'bg-preuai-correct-green/20',
        title: 'Desarrollador Freelance',
        company: 'Independiente',
        companyColorClass: 'text-white/80',
        period: '2019 - Presente',
        achievements: [
            'Desarrollo de aplicaciones móviles multiplataforma con Flutter para iOS y Android',
            'Desarrollo de aplicaciones web modernas con Nuxt.js, Vue.js y Tailwind CSS',
            'Consultoría especializada en estrategias de monetización y growth hacking para apps'
        ]
    }
]

// Projects
const projects = ref([
    {
        title: 'Preu AI: Salva la PAES',
        description: 'Plataforma educativa completa con ensayos PAES ilimitados, tutor IA 24/7 y +400 miniclases.',
        image: 'https://play-lh.googleusercontent.com/kSLiGaFoOwSRJca5ve_4wIQ8dpvdHjVOrtjfUAAuZAJy2bpOh3sylqVjE6QQFH5_nxQ=w480-h960-rw',
        url: 'https://preuai.com',
        technologies: ['Nuxt.js', 'Flutter', 'ChatGPT API', 'Firebase']
    },
    {
        title: 'Tutor AI',
        description: 'App con 100,000+ descargas para crear tutores personalizados de IA.',
        image: 'https://play-lh.googleusercontent.com/jGccq1xrZ7XxhCIA3UOfO4mWhcKjRQAHpMoxEeZLZ0lE8RDgmmFVM4Cgo-29wXn4Gm4=w240-h480-rw',
        url: 'https://play.google.com/store/apps/details?id=com.munoncode.ai_tutor_app',
        technologies: ['Flutter', 'ChatGPT API', 'Firebase']
    },
    {
        title: 'Gigachad: Latin America',
        description: 'Videojuego casual tipo endless runner. +10,000 descargas, rating 4.6★',
        image: 'https://play-lh.googleusercontent.com/aMo_WkfjZEH_euPR443t7w3EZ19rfDQcjUnTvZp5IbnSij5WC4DjPxghZ9wu1K8AZA=w240-h480-rw',
        url: 'https://play.google.com/store/apps/details?id=com.munoncode.gigachadapp',
        technologies: ['Flutter', 'Flame Engine', 'Game Design']
    },
    {
        title: 'Wardify',
        description: 'MVP de sistema de monitoreo de cámaras de seguridad con inteligencia artificial para detección de amenazas en tiempo real.',
        image: 'https://www.wardify.cl/_nuxt/camera_hero.CJve9hS_.png',
        url: 'https://www.wardify.cl/',
        technologies: ['Nuxt.js', 'Computer Vision', 'AI Detection', 'Real-time Monitoring']
    },
])

// Education
const educationList = ref([
    {
        icon: '🎓',
        iconBgClass: 'bg-primary-purple/20',
        degree: 'Ingeniería Civil Industrial',
        institution: 'Pontificia Universidad Católica de Chile',
        institutionColorClass: 'text-primary-purple',
        period: 'En curso',
        status: 'Cursando actualmente',
        major: 'Ingeniería Robótica',
        minor: 'Ingeniería Industrial'
    }
])

// Skills
const skills = ref([
    {
        category: 'Desarrollo Móvil',
        items: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase']
    },
    {
        category: 'Inteligencia Artificial',
        items: ['ChatGPT API', 'Computer Vision', 'RecSys', 'Deep Learning']
    },
    {
        category: 'Desarrollo Web',
        items: ['Nuxt.js', 'Vue.js', 'JavaScript', 'Tailwind CSS']
    },
    {
        category: 'Monetización',
        items: ['AdMob', 'In-App Purchases', 'Subscriptions', 'ASO']
    },
    {
        category: 'Backend & DB',
        items: ['Firebase', 'Firestore', 'Cloud Functions', 'REST APIs']
    }
])

// Achievements
const achievements = [
    { value: '100K+', label: 'Descargas en Google Play', colorClass: 'text-preuai-green' },
    { value: '7+', label: 'Aplicaciones Publicadas', colorClass: 'text-primary-purple' },
    { value: '34K+', label: 'Vistas en YouTube', colorClass: 'text-preuai-correct-green' }
]

useHead({
    title: 'Currículum - Martín Muñoz (@munoncode)',
    meta: [
        {
            name: 'description',
            content: 'Currículum profesional de Martín Muñoz - Indie Developer especializado en desarrollo móvil con Flutter e inteligencia artificial.'
        }
    ]
})
</script>
