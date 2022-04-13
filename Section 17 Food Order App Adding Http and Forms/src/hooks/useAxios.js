import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://react-http-demo-944cb-default-rtdb.asia-southeast1.firebasedatabase.app/";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const sendRequest = useCallback((requestConfig) => {
    setloading(true);
    axios[requestConfig.method ? requestConfig.method : "get"](
      requestConfig.url,
      JSON.parse(requestConfig.body ? requestConfig.body : null),
      JSON.parse(requestConfig.headers ? requestConfig.headers : null)
    )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return { response, error, loading, sendRequest };
};

export default useAxios;
