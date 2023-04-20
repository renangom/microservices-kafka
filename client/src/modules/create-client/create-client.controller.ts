import { Request, Response } from "express";
import { CreateClienteUseCase } from "./create-client.usecase";



export class ClientController {
    constructor() {}

    async handle(req: Request, res:Response) {
        const useCase = new CreateClienteUseCase();

        try{
          const result = await useCase.execute(req.body);
          return res.status(201).json(result);
        }catch(err){
            return res.status(400).json(err);
        }
    }
}