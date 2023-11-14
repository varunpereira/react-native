import {TouchableOpacity, Text, View} from "react-native"
import { StyleSheet } from "react-native";

export var T = (props) => (
	<TouchableOpacity>
		<Text style={props?.s}>{props.children}</Text>
	</TouchableOpacity>
)

export var s = StyleSheet.create({})
