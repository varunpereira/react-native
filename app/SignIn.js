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
			<View style={s(`sxFull syFull p=40 cBlack dy oMid`)}>
				<View style={s(`sx=350 p=20 mb=20 cWhite r=10 `)}>
					<Text style={s(`ts=20 tw=500 mb=10`)}>Sign in</Text>
					<Input
						value={email()}
						onChangeText={(v) => email(v)}
						placeholder={`Email`}
						style={s(`bw=1 r=10 px=5 mb=10 sy=30`)}
						focusStyle={t`bw=2`}
					/>
					<Input
						value={password()}
						onChangeText={(v) => password(v)}
						placeholder={"Password"}
						secureTextEntry={true}
						style={s(`bw=1 r=10 px=5 mb=10 sy=30`)}
						focusStyle={t`bw=2`}
					/>
					<Button
						onPress={signIn}
						style={t`h-[1.5rem] flex items-center justify-center bg-black rounded-lg px-2 w-full mb-1`}>
						<Text style={t`text-white`}>Sign in </Text>
					</Button>
					<Text style={t`text-red-600 text-xs h-[2rem]`}>{error()}</Text>
				</View>
				<View style={s('sx=350 dx')}>
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
