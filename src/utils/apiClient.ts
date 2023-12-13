import axios from 'axios';
import { cookies } from 'next/headers';

const cookiesStore = cookies();
const token = cookiesStore.get('token');
let headers = {};
if (token) {
  headers = { Authorization: `${token}` };
}

export const apiClient = axios.create({
  baseURL: 'http://54.214.130.15:8082/api/',
  headers,
});
