import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const loginUser = async(payload)=>{
    const response = await axios.post(
        "https://dummyjson.com/auth/login",
        payload
    );
    return response.data;
};