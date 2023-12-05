<script setup>
import { defineProps, watchEffect, ref } from 'vue';
import server from '@/services/server.js';

const props = defineProps({
  content: String
})

let generatedContent = ref('');
let isLoading = ref(false);
let thread_id = ref('');

watchEffect(async () => {
  if (props.content) {
    isLoading.value = true;
    const [response, t_id] = await server.assistantResponse(props.content, thread_id.value);
    thread_id.value = t_id;
    generatedContent.value = response;
    isLoading.value = false;
  }
})
</script>

<template>
  <div v-if="isLoading" class="govuk-tag govuk-tag--yellow">Loading</div>
  <div v-else class="govuk-body" v-html="generatedContent"></div>
</template>