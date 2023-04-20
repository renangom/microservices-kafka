import express from 'express';
import { clientRouter } from './infra/routes';


const server = express();
const PORT = process.env.PORT ?? 3001;

server.use(express.json());
server.use(clientRouter);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})