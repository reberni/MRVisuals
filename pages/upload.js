import { storage } from "firebase/clientAPP"

export default function Test() {

    return (
        <>
            <form>
                <div className="flex justify-center items-center h-screen">
                    <div className="mb-3 w-96">
                        <label htmlFor="formFile" className="form-label mb-2 text-gray-700 text-xl font-bold">Select your Picture</label>
                        <input className="form-control
                    block
                    w-full
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    rounded
                    transition
                    ease-in-out
                    mt-3
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                    <button type="submit">Upload Image!</button>
                    </div>
                
                </div>
            </form>
        </>
    )
}