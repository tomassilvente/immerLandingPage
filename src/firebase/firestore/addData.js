import { app } from "../config";
import { getFirestore, doc, setDoc, addDoc, collection } from "@firebase/firestore";

const db = getFirestore(app);

export default async function addData(collectionName, id, data) {
  let result = null;
  let error = null;

  try {
    if (id) {
      result = await setDoc(doc(db, collectionName, id), data, {
        merge: true,
      });
    } else {
      result = await addDoc(collection(db, collectionName), data);
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
