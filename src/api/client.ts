import axios from 'axios'

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_POKEMON_API_URL,
    timeout: 5000,
});

client.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            return Promise.reject(error.response?.data || { message: 'Something went wrong.' });
        } else {
            console.error('Unexpected error:', error);
            return Promise.reject({ message: 'Unexpected error occurred.' });
        }
    }
)


export { client }
