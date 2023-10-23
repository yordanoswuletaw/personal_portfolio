<script setup>
import { useRoute } from 'vue-router';

let theme = useTheme()
const route = useRoute()

const onThemeSwitch = () => {
    theme = useTheme(!theme.value)
}
</script>

<template>
    <div class="min-w-full min-h-full">
        <nav
            class="fixed z-50 bg-gradient-to-r from-primary via-blue-500 to-transparent bg-cover top-0 left-0 right-0 w-full h-14 flex justify-between items-center px-8">
            <div class="flex-1 flex items-center sm:justify-start justify-between">
                <NuxtLink :to="{ name: 'index' }" :class="[route.path === '/' ? 'active-nav' : 'nav']" class="group">Home
                    <div :class="{ 'text-light dark:text-dark': route.path === '/' }"
                        class="absolute text-sm left-[1px] -bottom-[0.45rem] scale-x-0 group-hover:scale-x-100 text-dark dark:text-light transition-all ease-in-out duration-300">
                        ーーー
                    </div>
                </NuxtLink>
                <NuxtLink :to="{ name: 'Projects' }" :class="[route.path.match(/\/projects/i) ? 'active-nav' : 'nav']" class="group">
                    Projects
                    <div :class="{ 'text-light dark:text-dark': route.path.match(/\/projects/i)}"
                        class="absolute text-sm left-[0.5rem] -bottom-[0.6rem] scale-x-0 group-hover:scale-x-100 text-dark dark:text-light transition-all ease-in-out duration-300">
                        ーーー
                    </div>
                </NuxtLink>
                <NuxtLink :to="{ name: 'Feedback' }" :class="[route.path.match(/\/feedback/i) ? 'active-nav' : 'nav']" class="group">
                    Feedback
                    <div :class="{ 'text-light dark:text-dark': route.path.match(/\/feedback/i)}"
                        class="absolute text-sm left-[0.7rem] -bottom-[0.48rem] scale-x-0 group-hover:scale-x-100 text-dark dark:text-light transition-all ease-in-out duration-300">
                        ーーー
                    </div>
                </NuxtLink>
                <button type="button" @click="onThemeSwitch" class="invert">
                    <img v-if="theme" src="~/assets/switch-dark.svg?url" alt="switch dark">
                    <img v-else src="~/assets/switch-light.svg?url" alt="switch light">
                </button>
            </div>

            <div
                :class="[theme ? 'sm:flex hidden md:gap-12 sm:gap-8 items-center invert-0 transition-all ease-in-out duration-300' : 'sm:flex hidden md:gap-12 sm:gap-8 items-center invert transition-all ease-in-out duration-300']">
                <a href="https://www.linkedin.com/in/yordanos-wuletaw/" target="_blank"><img
                        src="~/assets/LinkedIn.svg?url" alt="linkeding" /></a>
                 <a href="https://www.upwork.com/freelancers/~01bda3e2e690665627?viewMode=1" target="_blank"><img src="~/assets/Upwork.svg?url"
                        alt="upwork" /></a>        
                <a href="https://github.com/J0RdN-w" target="_blank"><img src="~/assets/GitHub.svg?url"
                        alt="github" /></a>
                <a href="https://stackoverflow.com/users/19396835/j0rdn" target="_blank"> <img
                        src="~/assets/StackOverflow.svg?url" alt="stackoverflow" /></a>
            </div>
        </nav>

        <div class=" min-h-[calc(100vh-3.5rem)] mt-[3.5rem] overflow-hidde flex flex-col">
            <IconsZCurve v-if="['/projects', '/feedback'].includes(route.path.toLocaleLowerCase())"
                class="min-w-full object-cover mt-[1rem]" />

            <div v-if="route.path === '/'" class="xl:-mt-[3rem]  min-w-full relative">
                <IconsUCurve class="xl:mt-[1.5rem]  min-w-full object-cover" />
                <HomeProfile />
                <HomeEndorse />
            </div>

            <div :class="[route.path === '/' ? 'home-bg' : 'other-bg']">
                <slot />
            </div>

            <footer :class="[route.path === '/' ? 'footer-home' : 'footer-other']">
                <div
                    :class="[theme ? 'sm:hidden flex gap-16 items-center invert-0 transition-all ease-in-out duration-300 py-1' : 'sm:hidden flex  items-center invert gap-16 transition-all ease-in-out duration-300 py-1']">
                    <a href="https://www.linkedin.com/in/yordanos-wuletaw/" target="_blank"><img
                            src="~/assets/LinkedIn.svg?url" alt="linkeding" /></a>
                     <a href="https://www.upwork.com/freelancers/~01bda3e2e690665627?viewMode=1" target="_blank"><img src="~/assets/Upwork.svg?url"
                        alt="upwork" /></a>
                    <a href="https://github.com/J0RdN-w" target="_blank"><img src="~/assets/GitHub.svg?url"
                            alt="github" /></a>
                    <a href="https://stackoverflow.com/users/19396835/j0rdn" target="_blank"> <img
                            src="~/assets/StackOverflow.svg?url" alt="stackoverflow" /></a>
                </div>
                <p class="text-xs sm:-order-1 order-2 ">Copyright &copy; {{ (new Date()).getFullYear() }} J0RdN-w. All
                    rights
                    reserved.</p>
                <div class="flex items-center gap-8 text-xs hover:text-primarys">
                    <a href="https://twitter.com/_randomchain" target="_blank" class="flex items-center hover:text-secondary transition-colors ease-in-out duration-300"> <img
                            src="~/assets/tweeter.svg?url" alt="tweeter"> twitter </a>
                    <a href="https://t.me/random_chain" target="_blank" class="flex items-center hover:text-secondary transition-colors ease-in-out duration-300"> <img
                            src="~/assets/telegram.svg?url" alt="tweeter"> telegram </a>
                </div>
            </footer>
        </div>
    </div>
</template>