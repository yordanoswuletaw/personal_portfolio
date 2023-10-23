<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~~/stores/data.js';

const dataStore = useDataStore()
const { mainInfo } = storeToRefs(dataStore)

</script>
<template>
  <div
    class="absolute xl:top-[30%] md:top-[20%] sm:top-[10%] top-[4%] left-[3%] right-0 flex sm:items-end items-center ">
    <img :src="mainInfo.avatar" alt="avatar"
      class="rounded-full object-cover xl:w-24 xl:h-24 sm:w-16 sm:h-16 w-12 h-12 ring-2 ring-light dark:ring-dark transition-all ease-in-out duration-300">
    <div class="ml-5 xl:mb-4 md:mb-2">
      <h1
        class="sm:font-semibold sm:text-sm text-xs font-medium text-light dark:text-dark tracking-wide transition-all ease-in-out duration-300">
        {{ `${mainInfo.firstname} ${mainInfo.lastname}` }}</h1>
      <h3
        class="sm:font-medium sm:text-sm text-xs font-normal text-light dark:text-dark transition-all ease-in-out duration-300">
        {{ mainInfo.username }}</h3>
    </div>
  </div>
</template>