import {Page, View, Text, Button, Input, t} from "@app/imports/style"
import {useState, useEffect} from "react"
import {auth, authChanged, db} from "@app/config/fb"
import {collection, addDoc} from "firebase/firestore"
import Nav from "@app/Nav"
import {useUser} from "@app/imports/state"

export default ({navigation}) => {
	var [user, setUser] = useUser()
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")

	useEffect(() => {
		var unsub = authChanged(auth, (user) => {
			console.log("user", user)
			setUser(user)
			if (user) {
				// fetch()
				unsub()
			} else {
				// not signed in so nav to sign in page
			}
		})

		var fetch = async () => {
			try {
				const doc = await addDoc(collection(db, "users"), {
					first: "1",
					last: "Lovelace",
					born: 1815,
				})
				console.log("Document written with ID: ", doc.id)
			} catch (e) {
				console.error("Error adding document: ", e)
			}
		}
	}, [])

	return (
		<Page>
			<Nav/>
			<View style={t`bg-black py-[2rem] h-full w-full flex items-center`}>
				<Text style={t`text-white text-lg font-semibold`}>Welcome {user?.email}</Text>
			</View>
		</Page>
	)
}

/*
	var [load, setLoad] = useState(false)

	const [width, setWidth] = useState(Dimensions.get("window").width)
	useEffect(() => {
		var updateDimensions = () => setWidth(Dimensions.get("window").width)
		Dimensions.addEventListener("change", updateDimensions)
		return () => Dimensions.removeEventListener("change", updateDimensions)
	}, [])

*/
