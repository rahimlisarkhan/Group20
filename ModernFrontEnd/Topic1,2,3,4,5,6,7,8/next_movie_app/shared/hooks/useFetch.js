import { useEffect, useState } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refetch = async () => {
      try {
        const resData = await callback();

        setData(resData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    refetch();
  }, []);

  return { data, error, loading };
};
