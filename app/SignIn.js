import {Page, View, Text, Button, Input, t, s} from "@app/imports/style"
import {state, effect, globalUser} from "@app/imports/state"
import {auth, authSet, db} from "@app/config/fb"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

export default ({navigation}) => {
	var error = state("")
	var email = state("")
	var password = state("")

	var signIn = async () => {
		try {
			var res = await signInWithEmailAndPassword(auth, email(), password())
			navigation.push("Home")
		} catch (e) {
			error("Sign in failed.")
		}
	}

	var signUp = async () => {
		try {
			var res = await createUserWithEmailAndPassword(auth, email(), password())
			alert("sign up ok")
		} catch (error) {
			alert(error)
		}
	}

	return (
		<Page>
			{/*<View style={t`bg-black py-[2rem] h-full w-full flex items-center`}> */}
			<View style={s("syFull sxFull p=40 cBlack aCol axMid ayMid")}>
				<View style={s("cWhite sx=400 p=20 mb=20 r=10")}>
					<Text style={t`text-lg font-semibold mb-[.5rem]`}>Sign in</Text>
					<Input
						value={email()}
						onChangeText={(v) => email(v)}
						placeholder="Email"
						style={t`border rounded-lg px-1 mb-2 h-[1.5rem]`}
						focusStyle={t`border-2`}
					/>
					<Input
						value={password()}
						onChangeText={(v) => password(v)}
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
					<Text style={t`text-red-600 text-xs h-[2rem]`}>{error()}</Text>
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
