<script setup>
import { BadgeCheckIcon } from "@heroicons/vue/solid";
import { storeToRefs } from "pinia";
import { useDataStore } from "~~/stores/data.js";
import endorse from "~/graphql/mutations/endorse.mutation.gql";
import { useMutation } from "@vue/apollo-composable";

const theme = useTheme();
const dataStore = useDataStore();
const { endorsement } = storeToRefs(dataStore);

const { mutate, loading, error } = useMutation(endorse);
const endorsed = useCookie("endorse", { maxAge: 1000 * 60 * 60 * 24 * 365 });
endorsed.value = endorsed.value || false;

const handleEndorse = async () => {
  if (!Object.is(NaN, endorsement.value)) {
    if (endorsed.value) {
      const newEndorsement = endorsement.value - 1;
      mutate({ endorsement: newEndorsement })
        .then(({ data }) => {
          dataStore.setEndorsement(newEndorsement);
          endorsed.value = null;
        })
        .catch((e) => {});
    } else {
      const newEndorsement = endorsement.value + 1;
      mutate({ endorsement: newEndorsement })
        .then(({ data }) => {
          dataStore.setEndorsement(newEndorsement);
          endorsed.value = true;
        })
        .catch((e) => {});
    }
  }
};

const formatedEndorse = (endorsement) => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(
    parseInt(endorsement).toExponential()
  );
};
</script>
<template>
  <div
    class="absolute xl:bottom-[36%] md:bottom-[24%] sm:bottom-[16%] bottom-0 sm:right-6 right-4 flex sm:gap-6 gap-4 items-center"
  >
    <p class="sm:text-sm text-xs font-semibold text-primary">
      {{ formatedEndorse(endorsement) }} <span class="sm:inline hidden">endorsements</span>
    </p>
    <button
      type="button"
      @click="handleEndorse"
      :disabled="loading"
      class="sm:w-32 sm:h-9 w-[6.7rem] h-8 rounded-lg bg-gradient-to-r from-variant to-primary font-medium text-light dark:text-dark sm:text-sm text-xs flex items-center justify-start ring-primary ring-opacity-30 hover:ring-4 focus:ring-1 ring-0 transition-all ease-in-out duration-300"
    >
      <BadgeCheckIcon class="ml-3 mr-2 w-4 h-4" />
      {{ endorsed ? "endorsed" : "endorse" }}
    </button>
  </div>
</template>
