import axios from 'axios';

// URL config
export const API_BASE_URL = 'https://dummyjson.com/';

// services points config
export const cartProducts = {
  userProduct: {
    getItem: 'products',
  },
};
// Api call Methods
export const method = {
  get: 'get',
};

// axios config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

async function NetworkRequest(requestConfig) {
  try {
    const response = await apiClient.request(requestConfig);

    if (response) {
        const {data} = response;
        return data;
    }
    return null;
  } catch (error) {
    return error.message;
  }
}

export default NetworkRequest;
