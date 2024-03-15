import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
// import { useDispatch} from "react-redux"
// import { useEffect } from 'react';
// import { AddAllProducts } from "../redux/slice/getAllProductSlice";


const client = generateClient();

 
 export  const fetchcustomer = async () => {
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
          query MyQuery {
            listCustomers {
              items {
                id
                name
                phone
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