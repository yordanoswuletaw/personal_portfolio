<script setup>

const props = defineProps({
    subSkill: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="text-dark dark:text-light">
        <h5 class="mt-3 text-xs font-medium">{{subSkill.subtitle}}</h5>
        <div class="flex items-center gap-3 mt-2">
            <div  class="w-4/5 h-[0.4rem] bg-gray-400 rounded-full overflow-hidden">
                <div :style="`width: ${subSkill.sublevel}%;`" class="h-[0.4rem] bg-primary rounded-r-full">
                </div>
            </div>
            <h6 class="text-xs font-medium">{{subSkill.sublevel}}%</h6>
        </div>
    </div>
</template>