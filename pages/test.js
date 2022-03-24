import Iterate from "components/Iterate";
import { collection, getDocs } from "firebase/firestore"
import { db } from "firebase/clientAPP";
import { useState } from "react";
import { useEffect } from "react";

import View from "components/view"

export default function Test() {

    const [folder, setFolder] = useState([])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "Folders"))

        let folders = []
        querySnapshot.forEach((doc) => {
            const folderName = doc.data().FolderName
            folders.push(folderName)
        })
        setFolder(folders)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <View text="Gallery" />
                <div className="flex">
                    {
                        folder.map((no, i) => {
                            return <Iterate folder={no.toString()} key={i} preview={true} />
                        })
                    }
                </div>


            
        </>
    )
}
