import { createContext, useEffect, useState } from 'react'
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'
import useAxiosPublic from '../hooks/useAxiosPublic'

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const provider = new GoogleAuthProvider()

	const axiosPublic = useAxiosPublic()

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		setLoading(true)
		return signOut(auth)
	}

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		})
	}

	const signInWithGoogle = () => {
		setLoading(true)
		return signInWithPopup(auth, provider)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			// console.log('current user', currentUser)
			// get and set token
			if (currentUser) {
				const currentUserInfo = { email: currentUser.email }
				axiosPublic.post('/jwt', currentUserInfo).then(res => {
					if (res.data.token) {
						localStorage.setItem('access-token', res.data.token)
					}
					setLoading(false)
				})
			} else {
				localStorage.removeItem('access-token')
				setLoading(false)
			}
		})
		return () => {
			unsubscribe()
		}
	}, [axiosPublic])

	const authInfo = {
		user,
		loading,
		createUser,
		logIn,
		logOut,
		updateUserProfile,
		signInWithGoogle,
	}

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
