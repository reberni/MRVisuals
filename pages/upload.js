import Folders from "components/Folders";
import { storage, db } from "firebase/clientAPP"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { useForm } from "react-hook-form";


export default function Test() {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        const path = data.path
        const newdata = path.toString().toLowerCase()
        linkDB(newdata)
        const reference = ref(storage, `/${newdata}/${data.image[0].name}`)
        uploadBytes(reference, data.image[0])

        reset()
    }

    const linkDB = async (name) => {
        await setDoc(doc(db, "Folders", name), {
            FolderName: name
        })
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" type="file" {...register('image', { required: true })} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:w-2/3">
                            <input className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Path" {...register('path', {required:true})} />
                        </div>
                        <Folders onClick={setValue} />
                        <input type="submit" className='bg-black text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer' value="Upload" />
                    </form>
                </div>
            </div>
        </>
    )
}