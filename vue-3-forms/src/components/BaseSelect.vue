<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [Number, String],
        default: ''
    },
    options: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <label v-if="label">{{ label }}</label>
    <select :value="modelValue" class="field" @change="($event) => { $emit('update:modelValue', $event.target.value) }">
        <option v-for="option in options" :value="option" :key="option" :selected="option === modalValue">
            {{ option }}
        </option>
    </select>
</template>