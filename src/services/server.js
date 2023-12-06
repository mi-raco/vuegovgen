import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://192.168.0.118:3000/", // Base URL for your server
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
