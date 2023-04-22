import express from 'express';
import { productRoute } from './infra/routes';



const server = express();
const PORT = process.env.PORT ?? 3003;

server.use(express.json());
server.use(productRoute);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})