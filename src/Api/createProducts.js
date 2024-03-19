import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

export const CreateProduct = async (id, image, name, description, unit, category, price) => {
    try {
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
        throw error; 
    }
}