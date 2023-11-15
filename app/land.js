import {useState, useEffect} from "react"
import {View, Text, Image, FlatList, Dimensions, Button, ScrollView} from "react-native"
import {Page, Input, t} from "@app/imports/style"
import {auth} from "@app/config/fb"
import {onAuthStateChanged} from "firebase/auth"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

export default ({navigation}) => {
	const [user, setUser] = useState()
	const [width, setWidth] = useState(Dimensions.get("window").width)
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")

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
			alert("sign in ok")
		} catch (error) {
			alert(error)
		}
	}

	var signUp = async () => {
		try {
			var res = await createUserWithEmailAndPassword(auth, email, password)
			alert("sign up ok")
		} catch (error) {
			alert(error)
		}
	}

	return (
		<Page>
			<View style={t`bg-red-500 pt-[1rem]`}>
				<Text style={""}>
					You: {user?.email} {width}
				</Text>
				<Input
					value={email}
					onChangeText={(v) => setEmail(v)}
					placeholder="Email"
					focusStyle={t`border-2 border-yellow-600`}
				/>
				<Input
					value={password}
					onChangeText={(v) => setPassword(v)}
					placeholder="Password"
					secureTextEntry={true}
				/>
				<Button title="Sign in" onPress={signIn} />
				<Button title="Sign up" onPress={signUp} />
				<Button title="Sign out" onPress={() => auth.signOut()} />
				<Button title="nav" onPress={() => navigation.push("Name")} />
			</View>
		</Page>
	)
}

/*
	var [load, setLoad] = useState(false)

useEffect(() => {
	onAuthStateChanged(auth, (user) => {
		console.log("user", user)
		setUser(user)
		// if user == null then not signed in
	})
	var updateDimensions = () => setWidth(Dimensions.get("window").width)
	Dimensions.addEventListener("change", updateDimensions)
	return () => Dimensions.removeEventListener("change", updateDimensions)
}, [])
*/
