<script setup>
import { useField, useForm } from 'vee-validate';

const theme = useTheme()
const msgStatus = ref(null)
const msgTime = ref(null)

const { meta, handleSubmit, resetForm } = useForm()
const { value: emailValue, errorMessage: emailError } = useField('email', 'email|required')
const { value: feedbackValue, errorMessage: feedbackError } = useField('feedback', 'required')

const sendMail = handleSubmit(async values => {
    msgStatus.value = "sending"
    const { email, feedback } = values
    const { data, pending, error } = await useFetch(
        '/api/feedback',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: { email: email, feedback: feedback }
        }
    )
    msgStatus.value = data.value.status
    if (msgStatus.value !== 'error')
        resetForm()
    msgTime.value = setTimeout(() => {
        msgStatus.value = null
    }, 1500)
})

onUnmounted(() => {
    clearInterval(msgTime.value)
})

definePageMeta({
    layout: "custom",
});

</script>
<template>
    <main
        class="w-full min-h-full overflow-x-hidden  flex md:flex-row md:gap-0 gap-16 flex-col  items-center justify-evenly py-16">
        <img v-if="theme" src="~/assets/oval-dark.svg?url" alt="oval"
            class="z-0 fixed md:top-[15%] tp[-[25%]] xl:left-[3%] md:-left-[9%] sm:-left-[35%] -left-[55%] object-contain transition-colors ease-in-out duration-300">
        <img v-else src="~/assets/oval.svg?url" alt="oval"
            class="z-0 fixed md:top-[15%] tp[-[25%]] xl:left-[3%] md:-left-[9%] sm:-left-[35%] -left-[55%] object-contain transition-colors ease-in-out duration-300">
        <div class="flex flex-col mx-2 z-10">
            <h2 class="font-extrabold text-5xl text-dark dark:text-light transition-colors ease-in-out duration-300">
                Feedbacks
            </h2>
            <p class="font-medium text-sm my-4 text-dark dark:text-light transition-colors ease-in-out duration-300">
                Please type it if you have something to say.</p>
        </div>

        <form class="flex flex-col mx-2 gap-2 items-end z-10" @submit="sendMail">
            <div class="relative flex flex-col mb-4">
                <input type="email" name="email" id="email" placeholder="example@example.com" v-model="emailValue"
                    class="peer mt-4 mx-4 placeholder-transparent ring-2 ring-dark hover:ring-primary focus:ring-primary dark:hover:ring-primary dark:focus:ring-primary dark:ring-light px-2 pt-2 pb-0  rounded sm:w-96 w-[22rem]  h-11 bg-transparent focus:border-none focus:outline-none text-dark dark:text-light transition-all ease-in-out duration-300" />
                <label for="email"
                    class="font-medium absolute peer-placeholder-shown:top-5 peer-placeholder-shown:left-5 p-1 peer-placeholder-shown:text-base text-xs peer-hover:top-[0.85rem] peer-hover:left-4 peer-hover:text-xs top-[0.85rem] text-dark dark:text-light left-4 rounded-full transition-all ease-in-out duration-300"
                     :class="[ emailError ? 'text-red-500 peer-placeholder-shown:text-red-500 dark:peer-placeholder-shown:text-red-500 peer-hover:text-red-500 dark:text-red-500 dark:peer-hover:text-red-500':'peer-hover:text-primary dark:peer-hover:text-primary peer-placeholder-shown:text-dark dark:peer-placeholder-shown:text-light']">email</label>
                <span class="text-xs mx-4 mt-1 text-red-500">{{ emailError }}</span>
            </div>

            <div class="relative flex flex-col mb-4">
                <textarea name="feedback" id="feedback" cols="30" rows="2" v-model="feedbackValue"
                    placeholder="feedback..."
                    class="peer placeholder-transparent resize-none mt-4 mx-4 ring-2 hover:ring-primary rounded bg-transparent p-2 ring-dark sm:w-96 w-[22rem] dark:ring-light focus:border-none focus:outline-none text-dark dark:text-light transition-all px-2 pt-3 pb-0 ease-in-out duration-300"></textarea>
                <label for="feedback"
                  :class="[feedbackError ? 'text-red-500 peer-placeholder-shown:text-red-500 dark:peer-placeholder-shown:text-red-500 peer-hover:text-red-500 dark:text-red-500 dark:peer-hover:text-red-500':'peer-hover:text-primary dark:peer-hover:text-primary peer-placeholder-shown:text-dark dark:peer-placeholder-shown:text-light']"
                    class="font-medium absolute peer-placeholder-shown:top-3 peer-placeholder-shown:left-5 p-1 peer-placeholder-shown:text-base text-xs peer-hover:top-[0.85rem] peer-hover:left-4 peer-hover:text-xs top-[0.85rem] text-dark dark:text-light left-4 rounded-full transition-all ease-in-out duration-300">feedback</label>
                <span class="text-xs mx-4 mt-1 text-red-500">{{ feedbackError }}</span>
            </div>

            <div class="flex items-center justify-end gap-6 mx-2">
                <h5 v-if="msgStatus !== 'error' && msgStatus"
                    class="font-semibold text-sm text-dark dark:text-light bg-primary bg-opacity-50 text-opacity-70 px-6 rounded-full py-1">
                    {{ msgStatus === 'sending' ? ' sending feedback...' : 'feedback sent. thank you!' }}</h5>
                <h5 v-else-if="msgStatus === 'error'"
                    class="font-semibold text-sm text-dark dark:text-light bg-red-500 bg-opacity-50 text-opacity-70 px-2 rounded-full py-1">
                    feedback not sent.please try again!</h5>

                <button :disabled="msgStatus === 'sending'"
                    class="group mx-2 w-32 h-[2.5rem] rounded-lg font-semibold bg-primary disabled:bg-black_light text-dark hover:text-light dark:text-light dark:hover:text-dark flex items-center ring-primary ring-opacity-30 focus:ring-4 ring-0 transition-all ease-in-out duration-300">
                    <img v-if="theme" src="~/assets/send.svg?url" alt="send"
                        class="px-3 group-hover:invert transition-all ease-in-out duration-300">
                    <img v-else src="~/assets/send-dark.svg?url" alt="send"
                        class="px-3 group-hover:invert transition-all ease-in-out duration-300">
                    Send
                </button>
            </div>
        </form>
    </main>
</template>