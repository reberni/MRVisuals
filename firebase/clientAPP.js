import { getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../config/firebaseApp.config.js'
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const githubAuth = new GithubAuthProvider()
const googleAuth = new GoogleAuthProvider()
const storage = getStorage(app)

export { auth, githubAuth, googleAuth, storage }