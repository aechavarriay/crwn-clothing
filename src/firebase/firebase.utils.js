import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const config = {
    apiKey: "AIzaSyDbUb5BFxJmUePovr4GkLrNParfi37yv60",
    authDomain: "el-imperio-73380.firebaseapp.com",
    projectId: "el-imperio-73380",
    storageBucket: "el-imperio-73380.appspot.com",
    messagingSenderId: "884824408590",
    appId: "1:884824408590:web:6846c423c8725a66e9b25f",
    measurementId: "G-ED79N80DB0"
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


// export default firebase;