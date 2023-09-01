import { push, ref } from "firebase/database";
import { database } from "../configs/firebase";

export function writeData(col, data) {
  const result = push(ref(database, col), data);

  return result;
}
