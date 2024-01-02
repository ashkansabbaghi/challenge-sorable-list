<template>
    <div>
        <div
            class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg
                md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <div class="relative">
                    <input type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required>
                    <XMarkIcon class="w-4 absolute top-[30%] right-3 dark:stroke-white" />
                    <div v-if="isSuggestionSkill" class="z-10 shadow w-full absolute right-0">
                        <ul>
                            <li v-for="(skill, iSkill) in suggestSkills" :key="iSkill"
                                class="cursor-pointer bg-white p-2 text-black border-b border-slate-200 
                                dark:bg-slate-600 dark:text-slate-200 dark:border-slate-700"
                                @click.prevent="setSuggestionUser(sugUser?.id, sugUser?.name)">
                                <p class="ms-2 text-sm font-medium cursor-pointer [&>*]:cursor-pointer">
                                    <span class="text-gray-500 dark:text-slate-100 text-xs"> {{ skill}}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </figure>
            <figure class="flex flex-col items-start justify-center p-8 text-center bg-white border-b border-gray-200 
                md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">

                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Suggested Skills</h2>
                <ul 
                v-for="(skill , iSkill) in suggestSkills"
                :key="iSkill"
                class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                       <a href="">{{ skill }}</a>
                    </li>
                </ul>

            </figure>
        </div>

    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';

const isSuggestionSkill = ref(true)
const suggestSkills = ['javascript', 'vue', 'nuxt', 'next', 'react', 'C#', 'C++']

</script>

<style lang="scss" scoped></style>