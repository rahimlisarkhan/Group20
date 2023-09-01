import { useEffect, useState } from "react";
import { writeData } from "../helper/writeData";
import { readData } from "../helper/readData";

export const useFireQuery = ({ collection }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const createData = (newData) => {
    writeData(collection, newData);
  };

  useEffect(() => {
    setLoading(true);
    readData(collection, (d) => {
      setData(d);
      setLoading(false);
    });
  }, []);

  return { data, loading, createData };
};
