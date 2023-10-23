<script setup>
import updateview from "~/graphql/mutations/view.mutation.gql"
import { useMutation } from "@vue/apollo-composable";

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

const { mutate, loading, error, onError } = useMutation(updateview)

onError(e=>{

})

const handleVisit = () => {
    if (!Object.is(NaN, props.project.views)) {
        const newView = props.project.views + 1
        mutate({ id: props.project.id, views: newView }).then(({ data }) => {
        }).catch(e => { })
    }
}

</script>
<template>
    <div class="group flex items-center flex-col justify-center my-5 w-48">
        <img src="~/assets/ml.svg?url" alt="mlicon" class="m-1 pt-0.5">
        <h3 class="font-bold text-dark text-center dark:text-light transition-colors ease-in-out duration-300">
            {{ project.ptitle }}</h3>
        <p class="text-xs text-center text-dark dark:text-light transition-colors ease-in-out duration-300">
            {{ project.pdetail }}</p>
        <a @click="handleVisit" :href="project.plink" target="_blank"
            class="text-sm group relative font-medium text-primary mt-1 scale-100 sm:scale-0 sm:group-hover:scale-100 after:content-['_↗'] transition-all ease-in-out duration-300">
            visit project</a>
    </div>
</template>