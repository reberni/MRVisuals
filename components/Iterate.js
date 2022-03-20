
import { storage } from "firebase/clientAPP"
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { useEffect, useState } from "react";
import Link from "next/link"

export default function Iterate({ folder, preview }) {



    const [links, setlinks] = useState([])
    const [path, setPath] = useState([])
    const testReference = ref(storage, folder)
    useEffect(() => {
        listAll(testReference).then(res => {
            setlinks(res.items)
        })
    }, [])


    useEffect(() => {
        if (links) getUrls()
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
                preview ?
                    <Link href={`folders/${folder}`}>
                        <img src={path[0]} className="cursor-pointer rounded w-24" />
                    </Link > :
                    <div className="grid grid-cols-3">{

                        path.map((url, i) => {
                            return (
                                <div className="col-span-1">
                                    <div className="overflow-hidden h-60 rounded-lg">
                                        <img src={url} key={i} className="cursor-pointer rounded-lg object-cover w-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            }
        </>
    )
}
