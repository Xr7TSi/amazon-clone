import axios from "axios"

// baseURL is provided by Firebase and is noted in functions/index.js
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-14498/us-central1/api'
});

export default instance;
