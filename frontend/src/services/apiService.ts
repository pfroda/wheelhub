import axios from 'axios';

// const API_URL = process.env.REACT_APP_APP_URL;
const API_URL = 'http://localhost:8080';

interface sentUserData {
  username: string;
  password: string;
}

export async function postUser(user: sentUserData) {
  try {
    const response = await axios.post(`${API_URL}/create`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to post user');
    }

    return response.data;
  } catch (err) {
    console.error('Error posting user', err);
  }
}
