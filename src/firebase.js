import { initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADeAtnZ7rnxcNsxGt2uolV3AcqI7ST-Qs",
  authDomain: "netflix-clone-8e96d.firebaseapp.com",
  projectId: "netflix-clone-8e96d",
  storageBucket: "netflix-clone-8e96d.appspot.com",
  messagingSenderId: "360120095429",
  appId: "1:360120095429:web:3b79e010228b71f31956ac",
  measurementId: "G-Z32DW6C6TG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error){
        console.log(error);
        alert(error);
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch(error) {
        console.log(error);
        alert(error)
    }
}

const logout = () => {
    signOut(auth)
}

export{auth, db, login,signUp,logout}