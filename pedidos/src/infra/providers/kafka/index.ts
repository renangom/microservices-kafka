import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    brokers: ['growing-mammal-9678-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'Z3Jvd2luZy1tYW1tYWwtOTY3OCRtcmR1GantIPFOVHw9_RmKLv9gqds5RgwEohg',
      password: '909d19acfe6c488497a8b08b2d8f938c',
    },
    ssl: true,
  })