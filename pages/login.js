import { FaUserCircle } from "react-icons/fa"
import { useState } from "react"
import { isEmail } from 'validator'
import ErrorSpan from "../components/ErrorSpan"
import Link from "next/link"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, githubAuth, googleAuth } from '../firebase/clientAPP'
import { useRouter } from 'next/router'
import LoadingScreen from "../components/LoadingScreen"
import { uiConfig } from '../config/firebaseAuthUI.config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function Login() {
    const router = useRouter()
    const [state, setState] = useState({
        email: "",
        password: "",
        emailValid: "",
        loginfalse: false,
        loginError: "",
    })

    const [loading, setLoading] = useState(false)


    const signIn = (e) => {
        setLoading(true)
        e.preventDefault()
        signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
            setLoading(false)
            router.push('/')
            setState({ ...state, loginfalse: false, loginError: "", })
        })
        .catch((error) => {
            setLoading(false)
            setState({ ...state, loginfalse: true, loginError: "Wrong Password!" })
        }) 
        
    }
    const validateEmail = () => {
        if (isEmail(state.email)) {
            setState({ ...state, emailValid: true })
        }
        else {
            setState({ ...state, emailValid: false })
        }
    }

    if (loading) return <LoadingScreen/>
    const authConfig = uiConfig(githubAuth, googleAuth)

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
                <p className="mb-5 text-3xl uppercase text-indigo-700">Sign In</p>
                <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
        </div>
    )
}