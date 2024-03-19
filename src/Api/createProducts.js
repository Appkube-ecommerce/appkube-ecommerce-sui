import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

export const CreateProduct = async (id, image, name, description, unit, category, price) => {
    try {
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
        });

        const result = await client.graphql({
            query: `
                mutation CreateProduct($id: ID!, $image: String!, $name: String!, $description: String!, $unit: String!, $category: String!, $price: Float!) {
                    createProduct(input: {category: $category, image: $image, name: $name, price: $price, unit: $unit, description: $description, id: $id}) {
                        id
                    }
                }
            `,
            variables: {
                id,
                image,
                name,
                description,
                unit,
                category,
                price
            }
        });

        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error for handling in the calling function
    }
}