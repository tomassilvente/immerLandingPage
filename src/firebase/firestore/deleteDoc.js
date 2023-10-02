import { app } from "../config";
import { deleteDoc, doc, getFirestore } from "@firebase/firestore";

const db = getFirestore(app);

export default async function deleteBlog(id){
  try {
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
    console.log(`Blog with ID ${id} deleted successfully.`);
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    return false;
  }
};
