<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [Number, String],
        default: ""
    },
    value: {
        type: [Number, String],
        required: true
    }
})
</script>

<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input type="radio" :checked="modelValue === value" :value="value" @change="$emit('update:modelValue', value)">
    </div>
</template>

<style scoped></style>
