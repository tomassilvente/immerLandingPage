import { app } from "../config";
import { getFirestore, doc, getDoc, collection, getDocs } from "@firebase/firestore";

const db = getFirestore(app);

export default async function getData(collectionName, id) {
  let result = null;
  let error = null;

  try {
    if (id) {
      const docRef = doc(db, collectionName, id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        result = docSnapshot.data();
      } else {
        error = new Error("No such document!");
      }
    } else {
      const querySnapshot = await getDocs(collection(db, collectionName));
      result = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
