<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    count: number
}>()

const emit = defineEmits<{
    (event: 'add-count', num: number): void;
    (event: 'reset-count'): void;
    (event: 'change-count'): void;
    (event: 'toNull-count'): void;
}>()

const checkIfNum = computed(() => {
    if (typeof props.count === 'number'){
        return 'num';
    } else {
        return false
    }
})

</script>

<template>
    <div>
        <button v-if="checkIfNum" @click="emit('add-count', 1)">Add</button>  
        <button v-if="checkIfNum" @click="emit('reset-count')">Reset</button>
        <button v-if="checkIfNum" @click="emit('toNull-count')">Turn it to null!</button>    
        <button v-if="!checkIfNum" @click="emit('change-count')">Turn it to num!</button> 
    </div>
</template>


<style scoped>

</style>