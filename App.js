import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "@app/land"

// full page load
export default () => {
	var Stack = createNativeStackNavigator()
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{headerShown: false, headerStyle: {backgroundColor: "red"}, headerTitle: ""}}>
				{/* partial page load */}
				<Stack.Screen component={Home} name="Home" />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
/*
orientation:'portrait_up'
nav cont : linking={{config: {screens: {Home: "/", Details: "feed"}}}}
*/
