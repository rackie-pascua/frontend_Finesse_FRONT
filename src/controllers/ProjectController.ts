import express from "express";
import { createProject, getAllProjects } from "../services/ProjectService"

export const getProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectForm.html', { clients: await getAllProjects() });
}

export const postProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await createProject(req.body);
        res.render('project.html');
    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('projectForm.html', req.body);
    }
}


