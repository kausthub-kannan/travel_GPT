import {auth, db} from '../config.js'
import { collection, doc, addDoc, updateDoc, getDoc} from "firebase/firestore";

const intrests = async (id,data) => {
    try{
        const response = await updateDoc(doc("user/"+id),data)
        return 200
    }catch (error) {
        console.log(error)
        return error.message
    }
}

const viewProfile = async (id) => {
    try{
        const response = await getDoc(doc("user/"+id))
        return response.data()
    }catch (error) {
        console.log(error)
        return error.message
    }
}
