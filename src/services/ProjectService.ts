import axios, { AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";
import { ProjectResponse } from "../models/ProjectResponse";


export const createProject = async (project: ProjectRequest): Promise<number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/management/", project);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}


export const getAllClients = async (): Promise<ProjectResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/management/");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}
