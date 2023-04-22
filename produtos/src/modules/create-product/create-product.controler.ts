import { Request, Response } from "express";
import { CreateProductUseCase } from "./create-product.usecase";



export class CreateProductController {
    constructor() {}

    async handle(req:Request, res: Response) {
        const useCase = new CreateProductUseCase();


        try{
           const result = await useCase.execute(req.body);
           return res.status(201).json(result)
        }catch(err) {
            console.log(err)
            res.status(400).json(err);
        }
    }
}