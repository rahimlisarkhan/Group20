import { useContext } from "react";
import { homeContext } from ".";

export const useHomeState = () => {
  const values = useContext(homeContext);

  return values;
};
