import { Router } from "express";
import { CreateProductController } from "../modules/create-product/create-product.controler";

export const productRoute = Router();


productRoute.post('/product', (req, res) => {
    new CreateProductController().handle(req, res);
})