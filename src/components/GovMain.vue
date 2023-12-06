<script setup>
import { ref } from 'vue';
var server = require('../services/server.js');

//let assistant_id = ref('asst_75jNB2zts4yr9IIuiPC6hsMl');
let assistant_id = ref('asst_2udgUUyd0VmAoO9wktKry1c6');
let thread_id = ref('');
let isLoading = ref(false);
let inputText = ref('');
let generatedContent = ref('');

let handleSubmit = async () => {
  if (inputText) {
    isLoading.value = true;
    const response = await server.askAssistant(inputText.value, assistant_id.value, thread_id.value);
    thread_id.value = response.data.t_id;
    generatedContent.value = response.data.text;
    isLoading.value = false;
  }
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
    <br />
    <div v-if="isLoading" class="govuk-tag govuk-tag--yellow">Loading</div>
    <div class="govuk-body" v-html="generatedContent"></div>
    <br />
  </main>
</template>