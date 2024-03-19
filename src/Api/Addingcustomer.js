import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import { v4 as uuidv4 } from 'uuid';

const client = generateClient();

export const createCustomers = async (name, phone) => {
    try {
        // Generate a unique ID for the customer
        // const id = uuidv4();

        // Ensure proper configuration and initialization of Amplify
        await Amplify.configure({
            API: {
                GraphQL: {
                    endpoint: 'https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql',
                    region: 'us-east-1',
                    defaultAuthMode: 'apiKey',
                    apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a'
                }
              }
})

        const result = await client.graphql({
            query: `
                mutation MyMutation( $name: String!, $phone: String!) {
                    createCustomer(input: {name: $name, phone: $phone }) {
                    
                        name
                        phone
                    }
                }
            `,
            variables: {
                // id,
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
