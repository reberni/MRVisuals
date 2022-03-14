import { storage } from "firebase/clientAPP"
import { ref, uploadBytes  } from "firebase/storage"
import { useState } from "react"


export default function Test() {

    const [image, setImage] = useState("hallo")
    const upload = () => {
        if (image == null) {
            return
        }
        else {
            const reference = ref(storage, `/images/${image.name}`)
            uploadBytes(reference, image)
        }
    }
    
    return (
        <>
        <div className="flex justify-center items-center h-screen">
        <div className="mb-3 w-96">
          <label htmlFor="formFileSm" className="form-label inline-block mb-2 text-gray-700 font-bold">Please, Select your file</label>
          <input className="form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
            <button className='bg-black text-white font-bold py-2 px-4 rounded mt-2 hover:bg-blue-500' onClick={upload}>Upload</button>
        </div>
      </div>
    </>
    )
}