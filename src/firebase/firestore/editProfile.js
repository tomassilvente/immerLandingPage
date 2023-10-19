import { app } from "../config";
import {getAuth, updateProfile} from '@firebase/auth'

const auth = getAuth(app);

export default async function editProfile(user,email, fullName) {
    let result = null,
        error = null;
    try{
    result = updateProfile((user), {
        displayName: fullName,
        email:email,
    })
}
catch (e) {
    error = e;
}
return { result, error }
}