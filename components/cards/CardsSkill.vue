<script setup>
import Tf from '~/assets/tf.svg?url';
import Vite from '~/assets/Vite.svg?url';
import Flutter from '~/assets/flutter.svg?url'
import Nodejs from '~/assets/nodejs.svg?url'
import Ui from '~/assets/ui.svg?url'
import DefaultIcon from '~/assets/skilldefault.svg?url'
import { ref } from "@vue/reactivity"
import { ChevronDownIcon } from '@heroicons/vue/solid'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const getIcon = () => {
    return props.skill.stitle === 'Machine Learning' ? Tf : props.skill.stitle === 'Front End Development' ?
        Vite : props.skill.stitle === 'Flutter App Development' ? Flutter :
            props.skill.stitle === 'Back End Development' ? Nodejs : props.skill.stitle === 'UI/UX' ? Ui : DefaultIcon
}

const expanded = ref(false);

</script>
<template>
  <div :style="expanded ? `height: ${skill.subskills.length * 3.3 + 8}rem;` : 'height: 8rem;'"
    class="bg-light dark:bg-dark bg-opacity-60 dark:bg-opacity-20 max-h-fit min-w-fit p-4 rounded border-[1.5px] border-white border-opacity-70 dark:border-opacity-5 flex flex-col overflow-hidden transition-all ease-in-out duration-[400ms]">
    <div class="text-dark dark:text-white flex items-start transition-all duration-300">
      <img  :src="getIcon()" alt="flutter" class="pt-1.5"  width="23" height="23" />
      <div class=" pl-2 pr-1 flex-1"> 
        <h3 class="text-base font-medium">{{ skill.stitle }}</h3>
        <p class="min-h-[3rem] text-xs break-all">{{ skill.sdetail }}</p>
      </div>
    </div>

    <div class="flex items-center justify-between mt-1">
      <p
        class="text-xs font-medium text-black_light dark:text-light dark:text-opacity-70 transition-colors ease-in-out duration-300">
        From {{ skill.sdate }}
      </p>
      <p @click="expanded = !expanded"
        class="cursor-pointer text-xs font-medium  text-black_light dark:text-light dark:text-opacity-70 flex items-center transition-all ease-in-out duration-300">
        {{ expanded ? 'See Less' : 'See More' }}

        <ChevronDownIcon class="w-[22px] h-[22px] transition-all ease-in-out duration-300"
          :class="expanded ? '-rotate-180' : 'rotate-0'" />
      </p>
    </div>
    <CardsProgressBar v-for="(subskill, i) in skill.subskills" :key="i" :subSkill="subskill" />
  </div>
</template>