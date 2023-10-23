<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~~/stores/data.js';

const dataStore = useDataStore()
const { mainInfo } = storeToRefs(dataStore)

</script>
<template>
    <div class="pl-12 pr-8 py-2 flex-1">
        <h3 class="text-primary font-medium mb-2">About me</h3>
        <p
            class="text-dark text-opacity-90 text-sm dark:text-white dark:text-opacity-85 transition-colors ease-in-out duration-300">
           {{mainInfo.aboutme}}
        </p>
        <div class="w-full flex items-center mb-2 mt-6">
            <h3 class="text-primary text-sm font-medium mr-3">Recent Activity</h3>
            <a :href="mainInfo.recentactivity?.activitiyurl" target="_blank"
                class="text-xs font-medium relative  text-dark dark:text-light after:content-['_↗'] hover:text-primary dark:hover:text-primary transition-all ease-in-out duration-300">
               {{mainInfo.recentactivity?.activitylabel}}</a>
        </div>
    </div>
</template>