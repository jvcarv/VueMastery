<template>
    <div>
        <h1>Are pets allowed?</h1>
        <component v-for="opts in options" :key="opts.value" :is="vertical ? 'div' : 'span'"
            :style="vertical ? '' : 'margin-right: 20px;'">
            <BaseRadio :name="name" :label="opts.label" :modelValue="modelValue" :value="opts.value"
                @update:modelValue="$emit('update:modelValue', $event)" />
        </component>
    </div>
</template>

<script setup>
import BaseRadio from './BaseRadio.vue';
defineProps({
    vertical: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: [String, Number],
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>