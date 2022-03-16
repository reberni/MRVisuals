import { getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../config/firebaseApp.config.js'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const githubAuth = new GithubAuthProvider()
const googleAuth = new GoogleAuthProvider()
const storage = getStorage(app)

export { db, auth, githubAuth, googleAuth, storage }