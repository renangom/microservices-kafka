import express from 'express';
import { productRouter } from './infra/routes';


const server = express();
const PORT = process.env.PORT ?? 3002;

server.use(express.json());
server.use(productRouter);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})