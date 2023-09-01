import { ref, onValue } from "firebase/database";
import { database } from "../configs/firebase";

export const readData = (col, onData) => {
  const starCountRef = ref(database, col);
  onValue(starCountRef, (snapshot) => {
    const data = Object.entries(snapshot.val() ?? {})?.map((item) => ({
      id: item[0],
      ...item[1],
    }));
    onData(data);
  });
};
