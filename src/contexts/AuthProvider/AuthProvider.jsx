
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLoginWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const providerLoginWithGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User inside state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }
        , [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://skill-up-server-flax.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    const authInfo = { user, courses, providerLoginWithGoogle, providerLoginWithGithub, createUser, userLogin, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;