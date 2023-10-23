<script setup>
import { LinkIcon, ChartBarIcon } from '@heroicons/vue/solid'
import updateview from "~/graphql/mutations/view.mutation.gql"
import { useMutation } from "@vue/apollo-composable";

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

const randomColor = () => {
    return ['#5680E3', '#6366F1', '#10B989', '#8B5CF6', '#2F80ED'].at(Math.floor(Math.random() * 5))
}
const formatView = (views) => {
    return Intl.NumberFormat('en', { notation: 'compact' }).format(parseInt(views).toExponential())
}

const { mutate, loading, error, onError } = useMutation(updateview)

onError(e=>{

})

const handleVisit = () => {
    if (!Object.is(NaN, props.project.views)) {
        const newView = props.project.views + 1
        mutate({ id: props.project.id, views: newView })
    }
}

</script>
<template>
    <div
        class="bg-light dark:bg-dark bg-opacity-60 dark:bg-opacity-20 min-w-fit min-h-[9rem] p-4 mt-8 mb-2 rounded-md border-[1.5px] border-white border-opacity-70 dark:border-opacity-5 flex flex-col items-stretch justify-start overflow-hidden transition-all ease-in-out duration-300">
        <h3 class="text-base font-semibold text-dark dark:text-white transition-colors ease-in-out duration-300">
            {{ project.ptitle }}</h3>
        <p class="text-xs font-medium py-1 text-dark dark:text-light transition-colors ease-in-out duration-300">
            {{ project.pdetail }}</p>
        <div class="w-fit flex items-center pt-2 pb-4">
            <a @click="handleVisit" :href="project.plink" target="_blank"
                class="relative group text-sm font-medium text-primary transition-all ease-in-out duration-300 flex items-center">

                <div
                    class="absolute scale-x-0 group-hover:scale-x-100 -bottom-3 left-8 text-primary transition-all ease-in-out duration-300">
                    ーーー
                </div>

                <LinkIcon class="mr-0.5 w-5 h-4" />
                visit project
            </a>
            <span
                class=" mx-4 text-xs text-gray-500 dark:text-gray-400 font-medium dark:text-opacity-70 flex items-center gap-x-1">
                <ChartBarIcon class="w-3 h-3" /> {{ formatView(project.views) }} visitors
            </span>
        </div>

        <div class="flex-1 flex items-end flex-wrap gap-x-3 gap-y-1">
            <p v-for="(tech, i) in project.techused" :key="i" :style="`color: ${randomColor()};`"
                class="text-[10px] font-medium">{{ tech }}</p>
        </div>
    </div>
</template>