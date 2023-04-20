import { prismaClient } from "../../infra/database/prismaClient"
import { kafka } from "../../infra/provider/kafka";
import { KafkaSendMessage } from "../../infra/provider/kafka/producer";

type CreateClientRequest = {
    name: string,
    password: string,
    email: string,
    phone: string
}

export class CreateClienteUseCase {
    constructor(){}

    async execute(data:CreateClientRequest){
        const customer = await prismaClient.client.findFirst({where: {email: data.email}});
        
        if(customer) {
            throw new Error('Customer already exists!')
        }

        const customerCreated = await prismaClient.client.create({
            data: {
                ...data
            }
        })
        

        const kafkaSend = new KafkaSendMessage();
        await kafkaSend.execute("CUSTOMER_CREATED", {
            id: customerCreated.id,
            email: customerCreated.email
        });

        return customerCreated;
    }
}