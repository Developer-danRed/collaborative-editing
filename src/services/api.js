import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchDocuments = () => axios.get(`${API_URL}/documents`);

export const saveDocument = (id, content) =>
  axios.put(`${API_URL}/documents/${id}`, { content });
