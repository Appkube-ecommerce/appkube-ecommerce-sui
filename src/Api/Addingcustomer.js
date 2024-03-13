import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

export const createCustomer = async (name,phone) => {
    try {
        // Ensure proper configuration and initialization of Amplify
        await Amplify.configure({
            API: {
                GraphQL: {
                    endpoint: 'https://rcvvni5tqzb4lorqzgibgi4wc4.appsync-api.us-east-1.amazonaws.com/graphql',
                    region: 'us-east-1',
                    defaultAuthMode: 'apiKey',
                    apiKey: 'da2-6f52wp2npzd3vgd2nmm5vwigra'
                }
            }
        });

        const result = await client.graphql({
            query: `
               
                    mutation MyMutation {
                        createCustomer(input: {name: $name,phone:$phone}){
                      }

                }
            `,
            variables: {
                
                name,
                phone,
            }
        });

        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error for handling in the calling function
    }
}