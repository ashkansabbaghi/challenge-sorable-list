<template>
    <div class="flex items-center justify-evenly w-full h-full">
        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm w-[70%]
            dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure class="flex flex-col gap-y-3 items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg
                md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <div v-for="(num, iNum) in numInputSkill" :key="iNum" class="relative">
                    <input :id="`id-${num}`" ref="refInput" v-model="skillsModel[num]" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-30"
                        :placeholder="`skill ${iNum + 1}`" :disabled="checkStepDisable(num)"
                        @keyup.enter.prevent="setSelectedSkill()" @blur="setSelectedSkill"
                        @click.prevent="selectInput(num)">
                    <XMarkIcon class="w-4 absolute top-[30%] right-3 dark:stroke-white cursor-pointer"
                        @click.prevent="skillsModel[num] = ''" />
                    <div v-if="isSuggestionSkill[iNum]" class="z-10 shadow w-full absolute right-0">
                        <ul>
                            <li v-for="(skill, iSkill) in suggestSkills" :key="iSkill" class="cursor-pointer bg-white p-2 text-black border-b border-slate-200 
                                dark:bg-slate-600 dark:text-slate-200 dark:border-slate-700"
                                @click.prevent="setSuggestionUser(sugUser?.id, sugUser?.name)">
                                <p class="ms-2 text-sm font-medium cursor-pointer [&>*]:cursor-pointer">
                                    <span class="text-gray-500 dark:text-slate-100 text-xs"> {{ skill }}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </figure>
            <figure class="flex flex-col items-start justify-center p-8 text-center bg-white border-b border-gray-200 
                md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">

                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Suggested Skills</h2>
                <ul v-for="(skill, iSkill) in suggestSkills" :key="iSkill"
                    class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        <span class="cursor-pointer" @click.prevent="setSuggestSideSkill(skill)">{{ skill }}</span>
                    </li>
                </ul>

            </figure>
        </div>

    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';
import skillsData from "./../data/Skills.json";

const numInputSkill = 5
const isSuggestionSkill = ref([])
const suggestSkills = skillsData?.skills
// const selectedSkill = ref([])
const skillsModel = ref([])
const refInput = ref([])
const currInput = ref(null)


// functions
const setSelectedSkill = () => {
    // console.log('handlerSkills'  , refInput.value);
}

const checkStepDisable = (num) => {
    if (num === 1) return false;
    return (!skillsModel.value[num - 1]) && (!skillsModel.value[num])
}

const selectInput = (num) => {
    currInput.value = num
}

const setSuggestSideSkill = (skill) => {
    if (!currInput.value) return
    skillsModel.value[currInput.value] = skill
    const targetInput = refInput.value[currInput.value]
    if (targetInput) targetInput.focus() 
    currInput.value++


}
</script>

<style lang="scss" scoped></style>