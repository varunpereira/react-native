import {Stack} from "expo-router"
import {useFonts} from "expo-font"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "@src/fb"
import {useState, useEffect} from "react"
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
	// Ensure any route can link back to `/`
	initialRouteName: "home",
}

const Layout = () => {
  // on every page load check user data ie logged in or not
	// const [user, setUser] = useState()
	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		console.log("user", user)
	// 		// alert("sign out ok")
	// 		setUser(user)
	// 	})
	// }, [])

	const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<Stack initialRouteName="home">
			{/* <Text>{!user ? JSON.stringify(user) : ""}</Text> */}
			<Stack.Screen name="home" />
		</Stack>
	)
}

export default Layout
