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
  classe: String
})
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <br>
    <input :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" id="opa">
  </div>
</template>

<style scoped></style>
