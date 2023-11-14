import {useState, useEffect} from "react"
import {View, Text, TextInput, TouchableOpacity, Image, FlatList, Dimensions, Button, SafeAreaView, ScrollView,} from "react-native"
import {useRouter} from "expo-router"
import styles from "./welcome.style"
import {test2} from "@env"
import {T} from "@app/style"
import {auth} from "@app/config/fb"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {onAuthStateChanged} from "firebase/auth"

var env = {test2}

const jobTypes = ["Full-time", "Part-time", "Contractor"]

export default ({searchTerm, setSearchTerm, handleClick}) => {
	const router = useRouter()
	const [activeJobType, setActiveJobType] = useState("Full-time")
	const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width)
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")
	var [load, setLoad] = useState(false)
	const [user, setUser] = useState()

	useEffect(() => {
		const updateDimensions = () => {
			setWindowWidth(Dimensions.get("window").width)
		}
		Dimensions.addEventListener("change", updateDimensions)
		return () => {
			Dimensions.removeEventListener("change", updateDimensions)
		}
	}, [])

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log("user", user)
			setUser(user)
			// if user == null then not signed in
		})
	}, [])

	var signIn = async () => {
		try {
			var res = await signInWithEmailAndPassword(auth, email, password)
			alert('sign in ok')
		} catch (error) {
			alert(error)
		}
	}

	var signUp = async () => {
		try {
			var res = await createUserWithEmailAndPassword(auth, email, password)
			alert('sign up ok')
		} catch (error) {
			alert(error)
		}
	}

	return (
		<View>
			<View style={styles.container}>
				<Text>You: {user?.email}</Text>
				<TextInput value={email} onChangeText={(v) => setEmail(v)} placeholder="Email" />
				<TextInput
					value={password}
					onChangeText={(v) => setPassword(v)}
					placeholder="Password"
					secureTextEntry={true}
				/>
				<Button title="Sign in" onPress={signIn} />
				<Button title="Sign up" onPress={signUp} />
				<Button title="Sign out" onPress={()=>auth.signOut()} />
				<Button title="" onPress={()=> router.push('/sw')}/>
			</View>

			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian {test2} </Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
				<Text>Window Width: {windowWidth}</Text>
				{/* <T>{w}</T> */}
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={[styles.searchInput, {}]}
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						placeholder="What are you looking for?"
					/>
				</View>

			</View>
			{/* router.push(`/search/${item}`) */}
		</View>
	)
}
