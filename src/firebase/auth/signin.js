import { app } from "../config";
import { signInWithEmailAndPassword, getAuth, setPersistence, browserLocalPersistence } from "@firebase/auth";

const auth = getAuth(app);

export default async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, password)
            })
    } catch (e) {
        error = e;
    }

    return { result, error };
}