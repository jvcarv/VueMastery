<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    classe: String
})
</script>

<template>
    <div id="check">
        <label v-if="label">{{ label }}</label>
        <br>
        <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    </div>
</template>

<style scoped>
#check {
    width: fit-content;
}
</style>
