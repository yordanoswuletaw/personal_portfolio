<script setup>
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/vue/solid'
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>
<template>
    <div class="flex items-center gap-4 my-3 px-3">
        <component :is="experience.exptype === 'Education' ? AcademicCapIcon : BriefcaseIcon " class="text-primary w-5 h-5"/>
        <div>
            <h3 class="font-medium text-sm text-dark dark:text-white transition-color ease-in-out duration-300">{{experience.exptitle}}</h3>
            <p class="text-xs font-medium text-black_light dark:text-light dark:text-opacity-70 transition-colors ease-in-out duration-300">{{experience.expplace}}</p>
        </div>
    </div>
</template>