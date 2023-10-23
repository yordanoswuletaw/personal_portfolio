<script setup>
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/solid'
import { storeToRefs } from 'pinia';
import { useDataStore } from '~~/stores/data.js';

const dataStore = useDataStore()
const { projects } = storeToRefs(dataStore)
const app = computed(()=> projects.value.filter(project => project.ptype === 'App'))
const website = computed(()=> projects.value.filter(project => project.ptype === 'Website' || project.ptype === 'Other'))
const ml = computed(()=> projects.value.filter(project => project.ptype === 'Machine Learning'))

const shown = reactive({ app: false, web: false });

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <main class="relative w-full min-h-full overflow-x-hidden ">
    <h1
      class="xl:ml-20 md:ml-14 sm:mx-10 mx-8 mt-1 font-extrabold text-5xl text-dark dark:text-light transition-colors ease-in-out duration-300">
      My Projects</h1>
    <div
      class="xl:ml-20 xl:mr-14 md:ml-14 md:mr-8 sm:mx-10 mx-8 my-6 flex md:flex-row flex-col items-start transition-colors ease-in-out duration-300">

      <div class="md:w-[50%] w-full">
        <h3 class="font-semibold text-xl text-dark dark:text-light mb-4 transition-colors ease-in-out duration-300">Apps
        </h3>
        <CardsProject v-for="project in app.slice(0, shown.app ? app.length : 3)" :key="project.id" :project="project" />
        <div v-if="app.length > 3" class="flex flex-col items-center justify-center h-fit mt-6">
          <p @click="shown.app = !shown.app" class="text-xs text:dark font-medium dark:text-light transition-colors ease-in-out duration-300 flex flex-col items-center cursor-pointer">
            <component :is="shown.app ? ChevronDoubleUpIcon : ChevronDoubleDownIcon"
            class="text-primary w-5 h-5 cursor-pointer animate-bounce duration-300" />
            {{shown.app ? 'See less' : 'See more'}}
          </p>
        </div>
      </div>

      <IconsDivider class="mx-16 md:block hidden transition-all ease-in-out duration-300 self-center" />

      <div class="md:w-[50%] w-full md:mt-0 mt-8">
        <h3 class="font-semibold text-xl text-dark dark:text-light transition-colors ease-in-out duration-300">Websites
        </h3>
        <CardsProject v-for="project in website.slice(0, shown.web ? website.length : 3)" :key="project.id" :project="project" />
        <div v-if="website.length > 3" class="flex flex-col items-center justify-center h-fit mt-6">
          <p @click="shown.web = !shown.web" class="text-xs text:dark font-medium dark:text-light transition-colors ease-in-out duration-300 flex flex-col items-center cursor-pointer">
            <component :is="shown.web ? ChevronDoubleUpIcon : ChevronDoubleDownIcon"
            class="text-primary w-5 h-5 cursor-pointer animate-bounce duration-300" />
            {{shown.web ? 'See less' : 'See more'}}
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col mt-14">
      <h4 class="font-semibold text-dark dark:text-light transition-colors ease-in-out duration-300">Machine Learning
        Projects</h4>
      <div class="flex items-center xl:gap-24 md:gap-16 gap-10 flex-wrap justify-center">
        <CardsMlProject v-for="project in ml" :key="project.id" :project="project" />
      </div>
    </div>
  </main>
</template>