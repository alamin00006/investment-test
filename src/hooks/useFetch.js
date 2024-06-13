import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(error);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://investment-server-om2a.onrender.com/api/${path}`
        );
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://investment-server-om2a.onrender.com/api/${path}`
      );
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return {
    data,
    loading,
    error,
    reFetch,
  };
};

export default UseFetch;
