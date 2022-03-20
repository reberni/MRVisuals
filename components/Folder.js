import { FcOpenedFolder } from "react-icons/fc"
import { GrFormClose } from "react-icons/gr"
export default function Folder({ name, onClick }) {

    return (

        <div className="flex items-center border border-gray-200 rounded-lg mb-2 p-2 shadow-sm cursor-pointer hover:shadow-md transition-all justify-between" onClick={() => onClick('path', name)}>
            <div className="flex gap-3 items-center">
                <FcOpenedFolder className="mr-2 text-xl" />
                <p>{name}</p>
            </div>
            <GrFormClose className="text-gray-100 hover:text-red-400 text-lg" />
        </div>
    )

}