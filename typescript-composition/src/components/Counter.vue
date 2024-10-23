<script setup lang="ts">
import {ref, onMounted} from 'vue'
import ControlBar from './ControlBar.vue';
const count= ref<number | null>(null)

//the question mark turns "alertMessageOnLimit" optional
interface Props{
    limit: number;
    alertMessageOnLimit?: string;
}

const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: "can't go any bigger"
})

// const nextCount = computed(() => {
//   if (typeof count.value === 'number') return count.value + 1;
//   else null
// })

const incrementCounter = () => {
  if (typeof count.value == "number"){
    if(count.value >= props.limit) {
        alert(props.alertMessageOnLimit)
        return 0;
    }
    count.value ++;
  }
}

// onMounted(() =>{
//   count.value = 0;
// })
</script>

<template>
  <div >
      <p v-if="typeof count === 'number'">{{ count }}</p>
      <ControlBar 
      :count="count"
      @add-count="incrementCounter"
      @reset-count="count = 0"
      @change-count="count = 0"
      @toNull-count="count = null"/>
  </div>
</template>