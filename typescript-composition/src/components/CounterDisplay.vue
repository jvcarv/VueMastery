<script setup lang="ts">
import {reactive} from 'vue'
import Counter from "./Counter.vue"

interface appInfo {
  name: String,
  slogan: String,
};

const appInfo: appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})
</script>

<template>
  <div>
    <h1>
      {{ appInfo.name }}
    </h1>
    <h2>
      {{ appInfo.slogan }}
    </h2>
    <Counter :limit="10" />
  </div>
</template>

<style scoped>

</style>
