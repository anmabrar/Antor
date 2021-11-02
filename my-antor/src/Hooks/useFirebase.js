import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, createUserWithEmailAndPassword, sendEmailVerification,onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =()=>{
    const [user,setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
    

    const handleRegistration =e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    // ...
  })
        
    }
    
    const logOut =()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setLoading(false))
    }
//observe whether user auth state changed or not
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return{
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleRegistration,
       
    }
     
}

export default useFirebase;