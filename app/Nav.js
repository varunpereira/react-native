import {View, Text, Button, Input, t} from "@app/imports/style"
import {auth, authSet, db} from "@app/config/fb"
import {collection, addDoc} from "firebase/firestore"
import {globalUser} from "@app/imports/state"

export default () => {
	var user = globalUser()

	return (
		<View style={t`bg-black py-[2rem] flex items-center`}>
			<Text style={t`text-white text-lg font-semibold`}>Welcome {user()?.email}</Text>
		</View>
	)
}

/*
<Nav user={user} />

export default ({user}) => {
	var [user2, setUser2] = useState()
	useEffect(() => setUser2(user), [user])
 */
