
import { storage } from "firebase/clientAPP"
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { useEffect, useState } from "react";

export default function Iterate( { folder } ) {

    console.log("iterate --> ", folder)

    const [links, setlinks] = useState([])
    const [path, setPath] = useState([])
    const testReference = ref(storage, folder)
    useEffect(() => {
        listAll(testReference).then(res => {
            setlinks(res.items)
            console.log("Set links -->", links)
        })
    }, [])


    useEffect(() => {
        if (links) getUrls(), console.log("geting URLS...")
    }, [links])

    const getUrls = async () => {
        let urls = []
        for (const imgPath of links) {
            const pathReference = ref(storage, imgPath._location.path_)
            const url = await getDownloadURL(pathReference)
            urls.push(url)
        }
        setPath(urls)
        
    }


    return (
        <>
            {
                path.map((url, i) => {
                    return <img src={url} key={i} />
                })
            }
        </>
    )
}