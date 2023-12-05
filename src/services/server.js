import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for your server
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  newThread() {
    return apiClient.post('/newThread');
  },
  getThread(threadId) {
    return apiClient.get(`/getThread/${threadId}`);
  },
  listMessages(threadId) {
    return apiClient.get(`/listMessages/${threadId}`);
  },
  getMessage(threadId, messageId) {
    return apiClient.get(`/getMessage/${threadId}/${messageId}`);
  },
  addMessage(content, threadId) {
    return apiClient.post('/addMessage', { content, threadId });
  },
  listRuns(threadId) {
    return apiClient.get(`/listRuns/${threadId}`);
  },
  getRun(threadId, runId) {
    return apiClient.get(`/getRun/${threadId}/${runId}`);
  },
  startRun(threadId, assistantId) {
    return apiClient.post('/startRun', { threadId, assistantId });
  },
  listRunSteps(threadId, runId) {
    return apiClient.get(`/listRunSteps/${threadId}/${runId}`);
  },
  getRunStep(threadId, runId, stepId) {
    return apiClient.get(`/getRunStep/${threadId}/${runId}/${stepId}`);
  },
  getCompletion(content, task) {
    return apiClient.post('/getCompletion', { content, task });
  },
  assistantResponse(content, threadId) {
    return apiClient.post('/assistantResponse', { content, threadId });
  },
  checkThread(threadId, runId) {
    return apiClient.get(`/checkThread/${threadId}/${runId}`);
  }
};
