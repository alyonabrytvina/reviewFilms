import { useEffect, useState } from "react";

export const useFetch = (url) => {
  console.log(url, "url")
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const json = await result.json();

        setFetchedData(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url])

  return {
    fetchedData,
    isError,
    isLoading
  }
}