import {Page, View, Text, Button, Input, t} from "@app/imports/style"
import {useState, useEffect} from "react"
import {auth, authChanged, db} from "@app/config/fb"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import Nav from "@app/Nav"

export default ({navigation}) => {
	var [error, setError] = useState("")
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")

	var signIn = async () => {
		try {
			var res = await signInWithEmailAndPassword(auth, email, password)
			navigation.push("Home")
		} catch (error) {
			setError("Sign in failed.")
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
			<Nav />
			<View style={t`bg-black py-[2rem] h-full w-full flex items-center`}>
				<View style={t`bg-white rounded-lg w-[16rem] p-[1rem] mb-[1rem] `}>
					<Text style={t`text-lg font-semibold mb-[.5rem]`}>Sign in</Text>
					<Input
						value={email}
						onChangeText={(v) => setEmail(v)}
						placeholder="Email"
						style={t`border rounded-lg px-1 mb-2 h-[1.5rem]`}
						focusStyle={t`border-2`}
					/>
					<Input
						value={password}
						onChangeText={(v) => setPassword(v)}
						placeholder="Password"
						secureTextEntry={true}
						style={t`border rounded-lg px-1 mb-4 h-[1.5rem]`}
						focusStyle={t`border-2`}
					/>
					<Button
						onPress={signIn}
						style={t`h-[1.5rem] flex items-center justify-center bg-black rounded-lg px-2 w-full mb-1`}>
						<Text style={t`text-white`}>Sign in </Text>
					</Button>
					<Text style={t`text-red-600 text-xs h-[2rem]`}>{error}</Text>
				</View>
				<View style={t`w-[16rem] flex flex-row`}>
					<Text style={t`text-white text-xs`}>Don't have an account?</Text>
					<Button onPress={""} style={t`ml-[.2rem]`}>
						<Text style={t`text-white text-xs `}>Sign up</Text>
					</Button>
				</View>
			</View>
		</Page>
	)
}
/* 
items = x, justify = y
<Button title="Sign out" onPress={() => auth.signOut()} /> */
