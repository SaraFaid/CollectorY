const axios = require('axios').default;
import * as SecureStore from 'expo-secure-store';

axios.interceptors.request.use(async (config: any) => {
  const token = await SecureStore.getItemAsync('accessToken'); 

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; 
  }

  return config;
});