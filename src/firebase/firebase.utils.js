import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbUb5BFxJmUePovr4GkLrNParfi37yv60",
    authDomain: "el-imperio-73380.firebaseapp.com",
    projectId: "el-imperio-73380",
    storageBucket: "el-imperio-73380.appspot.com",
    messagingSenderId: "884824408590",
    appId: "1:884824408590:web:6846c423c8725a66e9b25f",
    measurementId: "G-ED79N80DB0"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  };

  console.log(snapShot);
  return userRef;
  
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;