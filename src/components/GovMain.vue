<script setup>
import { ref } from 'vue';
import GenContent from './GenContent.vue'

let inputText = ref('');
let content = ref('');

const handleSubmit = () => {
  content.value = inputText.value;
}
</script>

<template>
  <main>
    <br />
    <form @submit.prevent="handleSubmit">
      <div class="govuk-form-group">
        <label class="govuk-label" for="address">
          Describe the interface you want to build:
        </label>
        <textarea class="govuk-textarea" rows="5" v-model="inputText"></textarea>
      </div>
      <button type="submit" class="govuk-button">Submit</button>
    </form>
    <GenContent :content="content" />
    <br />
  </main>
</template>