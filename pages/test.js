import { storage } from "firebase/clientAPP"
import { ref, getDownloadURL } from "firebase/storage"
import { useState } from "react";

export default function Test() {

    const [Link, setLink] = useState("")
    const pathReference = ref(storage, 'Susten/DSC02172.webp');
    getDownloadURL(pathReference).then(url => {
        setLink(url)
        console.log(url)
    })
    return(
        <>
            <img src={Link}></img>
        </>
    )
}