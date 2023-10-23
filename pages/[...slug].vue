<script setup>
import { useRouter } from "vue-router";

definePageMeta({
  layout: "default",
});

const router = useRouter();

</script>
<template>
    <main
        class="w-full min-h-screen flex flex-col items-center gap-6 justify-center bg-light bg-opacity-[0.85] dark:bg-dark dark:bg-opacity-90">
        <h1 class="font-extrabold text-3xl text-dark dark:text-light transition-colors ease-in-out duration-300">404
            '/{{ $route.params.slug.join('/') }} ' Page Not Found!</h1>
        <button type="button" @click="router.replace('/')"
            class="mx-2 w-48 h-10 rounded-lg font-semibold bg-primary text-dark hover:text-light dark:text-light dark:hover:text-dark flex items-center justify-center hover:ring-2 ring-primary ring-opacity-30 focus:ring-4 ring-0 transition-all ease-in-out duration-300">
            Back to Home
        </button>
    </main>
</template>