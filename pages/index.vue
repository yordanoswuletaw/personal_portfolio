<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~~/stores/data.js';

const dataStore = useDataStore()
const { skills } = storeToRefs(dataStore)

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <main class="relative w-full min-h-fit overflow-x-hidden">
    <div class="flex items-start md:flex-row flex-col justify-between">
      <HomeAboutme />
      <HomeExperience />
    </div>

    <div
      class="w-[900px] mx-16 border-b-[1px] border-black_light dark:border-light rounded-full border-opacity-[0.1] dark:border-opacity-[0.03] transition-colors ease-in-out duration-300">
    </div>

    <div class="px-12 py-4">
      <h3 class="text-primary  font-medium mb-2">Skills</h3>
      <div class="my-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-8 max-h-max shrink">
        <CardsSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
      </div>
    </div>
  </main>
</template>