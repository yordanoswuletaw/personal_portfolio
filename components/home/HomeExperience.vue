<script setup>
import { LocationMarkerIcon } from '@heroicons/vue/solid'
import { storeToRefs } from 'pinia';
import { useDataStore } from '~~/stores/data.js';

const dataStore = useDataStore()
const { mainInfo, experiences } = storeToRefs(dataStore)

</script>
<template>
    <div class="ml-12 mr-4">
        <h3 class="text-primary  font-medium mb-2 md:mt-auto mt-8">Experience</h3>
        <div class="min-w-full md:grid xl:grid-cols-2 md:grid-cols-2 gap-x-3 gap-y-2 flex flex-row flex-wrap">
             <CardsExperience v-for="experience in experiences" :key="experience.id" :experience="experience" />
        </div>

        <div class="my-2">
            <h3 class="text-primary  font-medium mb-2">Location</h3>
            <div class="flex items-center gap-4 my-2 px-6">
                <LocationMarkerIcon class="text-primary w-5 h-5" />
                <p
                    class="text-sm font-medium text-black_light dark:text-light dark:text-opacity-70 transition-colors ease-in-out duration-300">
                    {{mainInfo.location}}</p>
            </div>
        </div>
    </div>
</template>