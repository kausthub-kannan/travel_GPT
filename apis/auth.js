import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
        signOut, GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import {auth, db} from '../config.js'
import { collection, addDoc  } from "firebase/firestore";

const signup = async (user) => {
    try{
        const response = await createUserWithEmailAndPassword(auth, user.email, user.password)
        if(response) {
            const ans = await addDoc(collection("user/"),{
                name: user.name,
                email: user.email
            })
            if(ans)
                return 200
        }
    }catch (error) {
        console.log(error)
        return error.message
    }
}

const login = async (user) => {
    try{
        const response = await signInWithEmailAndPassword(auth, user.email, user.password)
        if(response)
            return 200
    }catch (error) {
        console.log(error)
        return error.message
    }
}

const oauth = async (user) => {
    try{
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider)
        if(response){
            const user = response.user;
            if(response) {
                const ans = await addDoc(collection("user/"),{
                    name: user.name,
                    email: user.email
                })
                if(ans)
                    return 200
            }
        }
    }catch (error) {
        console.log(error)
        return error.message
    }
}

const logout = async () => {
    try{
        await signOut(auth)
        return 200
    }catch (error) {
        console.log(error)
        return error.message
    }
}