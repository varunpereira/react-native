import {Page, View, Text, Button, Input, t} from "@app/imports/style"
import {state, effect, globalUser} from "@app/imports/state"
import Nav from "@app/Nav"
import {auth, authSet, db} from "@app/config/fb"
import {collection, addDoc} from "firebase/firestore"

export default ({navigation}) => {
	var user = globalUser()

	effect(() => {
		var unsub = authSet(auth, (newUser) => {
			if (!newUser) return navigation.push("SignIn")
			user(newUser)
			// query()
			unsub()
		})
	}, [])

	var addUser = async () => {
		try {
			// const doc = await addDoc(collection(db, "users"), {
			// 	first: "1",
			// 	last: "Lovelace",
			// 	born: 1815,
			// })
			// console.log("Document written with ID: ", doc.id)
		} catch (er) {
			console.error("Error adding document: ", er)
		}
	}

	return (
		<Page>
			<Nav />
			<View style={t`bg-black py-[2rem] h-full w-full flex items-center`}>
				<Text style={t`text-white text-lg font-semibold`}>Welcome {user()?.email}</Text>
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
