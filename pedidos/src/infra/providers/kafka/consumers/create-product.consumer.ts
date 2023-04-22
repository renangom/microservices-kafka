import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";


type ProductConsumer = {
    id: string,
    code: string
}

export async function createProductConsumer() {
    console.log('PRODUCT CONSUMER');
    const consumer = await kafkaConsumer("PRODUCT_CREATED")
    await consumer.run({
        eachMessage: async ({message}) => {
            const messageToString = message.value!.toString();
            console.log(messageToString);

            const product = JSON.parse(messageToString) as ProductConsumer;
            await prismaClient.product.create({
                data: {
                    externalId: product.id,
                    code: product.code
                }
            })
        }
    })
}

createProductConsumer();