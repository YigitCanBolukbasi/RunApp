import React, {useState, useEffect} from 'react';

import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const FetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, [url]);

  return {error, loading, data};
};

export default useFetch;
