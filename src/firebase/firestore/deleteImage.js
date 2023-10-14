import { deleteDoc, doc } from "@firebase/firestore";
import { app } from "../config"; 
import { deleteObject, getStorage,ref } from "@firebase/storage";

const storage = getStorage(app);

export async function deleteImage(image) {
    
    try {
    const docRef = ref(storage, `${image}`);
    await deleteObject(docRef)

    return docRef;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
}
