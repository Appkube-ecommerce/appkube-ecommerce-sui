import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

 
 export  const fetchCategories = async () => {
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
            query ListProducts {
              listProducts {
                items {
                  id
                  image
                  name
                  price
                  unit
                  category
                }
              }
            }
          `,
        });

        console.log(result)
        // setData(result.data.listProducts.items)
        return result

      }
      catch(error){
          console.log(error)
      }
    }
//   fetchCategories()

//   const [Data, setData] = useState([])
//   console.log(Data);

//   const uniqueCategories = [...new Set(Data.map((item) => item.category))];

//   console.log(uniqueCategories);