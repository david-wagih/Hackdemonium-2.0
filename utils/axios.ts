import axios from "axios";

// Create axios instance

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
});

export default instance;
