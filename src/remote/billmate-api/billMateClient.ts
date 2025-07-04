import axios from 'axios';

// This is the configuration for sending HTTP Requests with Axios
// Very simple, but it also doesn't give us much abstraction
const billMateClient = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  });
  
  export interface billMateApiResponse {
    status: number;
    payload: any;
  }
  
  export default billMateClient;