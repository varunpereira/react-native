import {StatusBar} from "expo-status-bar"
import {Text, View} from "react-native"
import {style} from "@src/style"

export default () => {

	return (
		<View style={[style.container("red")]}>
			<Text style={[style.ts("20px")]}>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
