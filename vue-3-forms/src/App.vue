<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseRadio from './components/BaseRadio.vue';
import BaseRadioGroup from './components/BaseRadioGroup.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])
const event = reactive({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 1,
  extras: {
    catering: false,
    music: false
  }
})
</script>

<template>
  <main>
    <div class="container">
      <div class="form">
        <BaseInput v-model="event.title" label="Título" />
        <BaseInput v-model="event.description" label="Descrição" />
        <BaseInput v-model="event.location" label="Endereço" />
        <BaseRadioGroup v-model="event.pets" name="pets" :options="[
          { value: 1, label: 'Yes' },
          { value: 0, label: 'No' }
        ]" />
        <div class="checks">
          <BaseCheckbox v-model="event.extras.catering" label="Refeição no local?" />
          <BaseCheckbox v-model="event.extras.music" label="Música ao vivo?" />
        </div>
        <BaseSelect v-model="event.category" label="Categoria do evento:" :options="categories" />
      </div>
      <div class="event">
        <p>{{ event }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container,
.radios,
.checks {
  display: flex;
}

.container {
  width: 500px;
  justify-content: center;
}

.form {
  min-width: 300px;
  margin-right: 1rem;
}

.event {
  min-width: 200px;
}

.radios,
.checks {
  justify-content: space-between;
}
</style>
