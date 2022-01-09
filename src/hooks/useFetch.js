import React, {useEffect, useState} from 'react';

import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      response = await axios.get(url);
      setData(response.data);
      console.log('data', data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return {data, loading, error};
}

export default useFetch;
