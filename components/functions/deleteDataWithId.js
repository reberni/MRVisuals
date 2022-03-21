import { auth, db } from "firebase/clientAPP";
import { deleteDoc, doc } from "firebase/firestore";
import { storage } from "firebase/clientAPP";
import { deleteObject, ref, listAll } from "firebase/storage";


export default async function deleteDataWithId(id) {
    await deleteDoc(doc(db, "Folders", id))
    const images = []
    await listAll(ref(storage, id)).then((res) => {
        res.items.forEach((folderRef) => {
            images.push(folderRef._location.path_)
        })
        
    })

    images.map((res) => {
        deleteObject(ref(storage, res))
    })
    
    
    
}

