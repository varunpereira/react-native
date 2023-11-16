import {Page, View, Text, Button, Input, t} from "@app/imports/style"
import {useState, useEffect} from "react"
import {auth, authChanged, db} from "@app/config/fb"
import {collection, addDoc} from "firebase/firestore"
import {useUser} from "@app/imports/state"

export default (props) => {
	var [user, setUser] = useUser()
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")

	return (
		<Page>
			<View style={t`bg-black py-[2rem] h-full w-full flex items-center`}>
				<Text style={t`text-white text-lg font-semibold`}>Welcome {user?.email}</Text>
			</View>
		</Page>
	)
}