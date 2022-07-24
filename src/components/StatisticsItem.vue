<script setup>
import { defineProps, computed } from "vue";
import ChartIcon from "../icons/chart-bar-chart-svgrepo-com.svg";
import ArrowTopIcon from "../icons/arrow-top-right-svgrepo-com.svg";
const props = defineProps({
    data: {
        type: Object, 
        required: true,
    }
})
const setColor = computed(() => {
    if(props.data.status == "normal") {
        return "text-purple-600"
    }
    if (props.data.status == "success") {
        return "text-green-400"
    }
    if (props.data.status == "warning") {
        return "text-yellow-600"
    } else {
        return "text-blue-500"
    }
})
const setBackground = computed(() => {
    if(props.data.status == "normal") {
        return "bg-purple-100"
    }
    if (props.data.status == "success") {
        return "bg-green-100"
    }
    if(props.data.status == "warning") {
        return "bg-yellow-100"
    } else { return "text-blue-500" }
})
</script>

<template>
    <li class="flex items-center justify-between sm:shadow p-3 lg:shadow-none ">
        <div>
            <p class="font-semibold capitalize text-[11px] text-darkgray mb-2">{{ props.data.statsTitle }}</p>
            <div class="flex justify-between mb-2">
                <span 
                    class="font-semibold text-xl"
                    :class="setColor"
                >{{ props.data.numberOfTasks }}</span>
                <p class="flex rounded-[12px] px-2 items-center" :class="[setColor, setBackground]">
                    <span class="text-xs font-semibold">{{ props.data.amountOfIncreasing }}</span>
                    <ArrowTopIcon />
                </p>
            </div>
            <p class="text-darkgray text-[11px] font-medium capitalize">{{ props.data.dateStatus }}</p>
        </div>
        <ChartIcon class="h-[60px] w-[60px] stroke-current" />
    </li>
</template>