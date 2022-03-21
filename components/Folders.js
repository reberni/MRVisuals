
import { collection } from "firebase/firestore"
import { db } from "firebase/clientAPP";
import Folder from "./Folder";
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Folders({ name, onClick }) {

    const [value, loading, error] = useCollectionData(collection(db, "Folders"))



    return (
        <div className="mt-4">
        {
            !loading && 
            value.map((folder, i) => {
                return(<Folder name={folder.FolderName} key={i} onClick={onClick} id={folder.FolderName}/>)
            })
        }
        </div>
    )
}