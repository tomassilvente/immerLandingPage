import { app } from "../config"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";

const storage = getStorage(app);

export async function uploadImage(image) {
  console.log("Received image:", image);

  try {
    // Generate a unique name for the image based on the current timestamp
    const imageName = Date.now().toString();

    // Reference to the image in Firebase Storage
    const imageRef = ref(storage, `images/${imageName}`);

    // Upload the image bytes to Firebase Storage
    console.log("Uploading image...");
    await uploadBytes(imageRef, image);
    console.log("Image uploaded successfully.");

    // Get the download URL of the uploaded image
    const imageURL = await getDownloadURL(imageRef);

    return imageURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

