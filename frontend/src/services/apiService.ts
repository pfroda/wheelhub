import { User } from '../types/User';
import axios from 'axios';

const API_URL = process.env.REACT_APP_APP_URL;

export async function postUser(user: User) {
  try {
    const response = await axios.post(`${API_URL}/create`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error posting user', err);
  }
}
