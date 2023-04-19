import axios from "axios";

export const api = axios.create({
  // baseURL:"http://localhost:3000"
  baseURL:"https://stage8-api.onrender.com"
})