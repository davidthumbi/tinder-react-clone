import axios from "axios"

const instance = axios.create({
  baseURL: "https://tinder-backend-clone.up.railway.app/",
});

export default instance;