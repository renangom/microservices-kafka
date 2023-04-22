import express from 'express';
import "./infra/providers/kafka/consumers/index"


const server = express();
const PORT = process.env.PORT ?? 3002;

server.use(express.json());



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})