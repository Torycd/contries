import { useState, useEffect } from "react";

export const useApi = (url) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsloading(true);
        setError("");
        const response = await fetch(url);
        if (!response.ok)
          throw new Error("Something wrong with fecthing Country Data");
        const data = await response.json();
        setOriginalData(data); // store full data
        setData(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    getData();
  }, [url]);

  return { isLoading, error, originalData, data, setData };
};
