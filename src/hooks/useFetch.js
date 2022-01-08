import React, {useState, useEffect} from 'react';

import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=45&lon=43&appid=88bb13a8e61f58f9d1aade3dde2535a9`,
      );
      setData(response.data);
      console.log(response.data.main.temp);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return {error, loading, data};
};

export default useFetch;
