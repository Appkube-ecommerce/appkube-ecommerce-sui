import { fetchcustomer } from '@/Api/fetchingcustomers';
import { useState, useEffect } from 'react';

const useFetchCustomers = () => {
  const [customers, setcustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchcustomer(); // Assuming fetchProducts is your API call function

        setcustomer(result.data.listCustomers.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, []); // Empty dependency array ensures this effect runs only once

  return { customers, loading, error };
};

export default useFetchCustomers;
