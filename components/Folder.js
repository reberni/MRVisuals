import { FcOpenedFolder } from "react-icons/fc"

export default function Folder({ name, onClick }) {

    return (

        <div className="flex items-center border border-gray-200 rounded-lg mb-2 p-2 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => onClick('path', name)}>
            <FcOpenedFolder className="mr-2 text-xl" />
            <p>{name}</p>
        </div>
    )

}