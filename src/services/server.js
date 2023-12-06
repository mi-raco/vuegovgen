import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://ai-service-g36vbielxq-nw.a.run.app", // Base URL for your server
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const askAssistant = async (content, assistant_id, thread_id) => {
  console.log(content, assistant_id, thread_id);
  return apiClient.post('/openai/askAssistant', { content, assistant_id, thread_id});
}
