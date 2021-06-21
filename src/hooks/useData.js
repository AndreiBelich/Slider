import { useState, useEffect } from "react";

const useData = (loadData) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setIsFetching(true);
    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(()=> setIsFetching(false))
  }, []);

  return { data, error, isFetching };
}

export default useData;