import { app } from "../config"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { deleteImage } from "./deleteImage";

const storage = getStorage(app);

export async function replaceImage(imageName,image) {
    console.log("Received image:", image);
  try {

    await deleteImage(imageName)
    // Reference to the image in Firebase Storage
    const imageRef = ref(storage, `${imageName}`);

    // Upload the image bytes to Firebase Storage
    await uploadBytes(imageRef, image);

    // Get the download URL of the uploaded image
    const imageURL = await getDownloadURL(imageRef);

    return imageURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
