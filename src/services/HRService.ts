import axios, { AxiosResponse } from "axios";
import { Employee } from "../models/Employee";
// import { getHeader } from "./AuthUtils";

export const createDeliveryEmployee = async (employee: Employee): Promise<number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/HR", employee);
        
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to create delivery employee');
    }
}