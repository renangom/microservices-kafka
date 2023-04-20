import { Router } from "express";
import { ClientController } from "../modules/create-client/create-client.controller";

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.post('/client', (req, res) => {
    clientController.handle(req,res);
})

export {clientRouter}