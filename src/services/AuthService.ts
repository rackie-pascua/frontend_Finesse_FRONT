import axios, { AxiosResponse } from "axios";
import { LoginRequest } from "../models/LoginRequest"
import { RegisterRequest } from "../models/RegisterRequest";

export const getToken = async (loginRequest: LoginRequest): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/auth/login", loginRequest);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}

export const registerNewUser = async (registerRequest: RegisterRequest) : Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/register", registerRequest);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
        
    }}