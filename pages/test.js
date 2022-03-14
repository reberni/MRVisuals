import Iterate from "components/Iterate";
import { collection, getDocs } from "firebase/firestore"
import { db } from "firebase/clientAPP";
import { useState } from "react";
import { useEffect } from "react";



export default function Test() {

    const [folder, setFolder] = useState([])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "Folders"))
        querySnapshot.forEach((doc) => {
            const folderName = doc.data().FolderName
            setFolder([...folder, folderName])
            console.log(folderName)
        })
    }

    useEffect(() => {
        getData()
    }, [])




    const hallo = "test"
    return (
        <>
            {
                folder.map((no, i) => {
                    return <Iterate folder={folder[i]} />
                })
            }
        </>
    )
}