import express from "express";
import { createDeliveryEmployee } from "../services/HRService"

export const getCreateDeliveryEmployeeForm = async (req: express.Request, res: express.Response) => {
   res.render('deliveryEmployeeForm.html');
}

export const postDeliveryEmployeeForm = async (req: express.Request, res: express.Response) => {
    try {
        const id = await createDeliveryEmployee(req.body);
        res.render('deliveryEmployee.html', id);
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('deliveryEmployeeForm.html', req.body);
    }
}