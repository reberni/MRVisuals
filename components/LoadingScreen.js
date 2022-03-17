import { BarLoader } from "react-spinners";

export default function LoadingScreen() {
    return (
        <div className="flex justify-center items-center h-screen w-full bg-slate-100">
            <BarLoader loading={ true } width={ 120 } height={ 4 } color="#4f46e5"/>
        </div>
    )
}