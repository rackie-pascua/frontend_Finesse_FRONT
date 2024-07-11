import { Request, Response } from "express";
import { createProject, getAllProjects } from "../services/ProjectService"


export const getProjectForm = async (req: Request, res: Response): Promise<void> => {
    res.render('projectForm.html', { clients: await getAllProjects() });
}

export const postProjectForm = async (req: Request, res: Response): Promise<void> => {
    try {
        await createProject(req.body);
        res.render('project.html');
    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('projectForm.html', req.body);
    }
}

