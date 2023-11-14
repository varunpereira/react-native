import {useState, useEffect} from "react"
import {View, Text, TextInput, TouchableOpacity, Image, FlatList} from "react-native"
import {useRouter} from "expo-router"

import styles from "./welcome.style"
import {icons, SIZES} from "../../../constants"
import {test2} from "@env"
import {T} from "@src/style"
import {Dimensions} from "react-native"

var env = {test2}

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
	const router = useRouter()
	const [activeJobType, setActiveJobType] = useState("Full-time")
	const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width)

	useEffect(() => {
		const updateDimensions = () => {
			setWindowWidth(Dimensions.get("window").width)
		}
		Dimensions.addEventListener("change", updateDimensions)
		return () => {
			Dimensions.removeEventListener("change", updateDimensions)
		}
	}, [])

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian {env?.test2} </Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
				<Text>Window Width: {windowWidth}</Text>
				{/* <T>{w}</T> */}
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={[styles.searchInput, {}]}
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						placeholder="What are you looking for?"
					/>
				</View>

				<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
					<Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({item}) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item)
								router.push(`/search/${item}`)
							}}>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{columnGap: SIZES.small}}
					horizontal
				/>
			</View>
		</View>
	)
}

export default Welcome
