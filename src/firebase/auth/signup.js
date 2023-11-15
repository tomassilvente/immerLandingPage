import { app } from "../config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth";


const auth = getAuth(app);

export default async function signUp(email, password, fullName, photoUrl) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user
                updateProfile(user, {
                    displayName: fullName,
                    photoURL: photoUrl
                })
            });
    } catch (e) {
        error = e;
    }

    return { result, error };
}