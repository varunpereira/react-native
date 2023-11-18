import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	Dimensions,
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from "react-native"
import {StyleSheet} from "react-native"
import t from "twrnc"
import {useState, useEffect} from "react"
import Nav from "@app/Nav"

export {t, View, Text, Image, FlatList, Dimensions, TouchableOpacity as Button, ScrollView}

export var Page = ({children}) => {
	return (
		<SafeAreaView>
			<Nav />
			{children}
		</SafeAreaView>
	)
}

export var Input = ({focusStyle, style, onFocus, onBlur, ...props}) => {
	const [focused, setfocused] = useState(false)
	const handleFocus = () => setfocused(true)
	const handleBlur = () => setfocused(false)
	return (
		<TextInput
			{...props}
			onFocus={() => {
				handleFocus()
				onFocus && onFocus()
			}}
			onBlur={() => {
				handleBlur()
				onBlur && onBlur()
			}}
			style={[style, focused && focusStyle]}
		/>
	)
}

export var s = (tokens) => {
	var arr = []
	tokens = tokens.split(/(\s+)/)
	for (let i = 0; i < tokens.length; i++) {
		if (tokens[i].includes("=")) {
			var [key, value] = tokens[i].split("=")
			arr.push(s2[key](isNaN(value) ? value : parseInt(value)))
		} else arr.push(s2[tokens[i]])
	}
	return arr
}

export var s2 = StyleSheet.create({
	// fits
	fit1: {},
	// sizes
	sx: (v) => ({width: v}),
	sxFit: {width: "fit-content"},
	sxFull: {width: "100%"},
	sxMin: (v) => ({minWidth: v}),
	sxMax: (v) => ({minWidth: v}),
	sy: (v) => ({height: v}),
	syFit: {height: "fit-content"},
	syFull: {height: "100%"},
	syMin: (v) => ({minHeight: v}),
	syMax: (v) => ({minHeight: v}),
	mxAuto: {marginLeft: "auto", marginRight: "auto"},
	myAuto: {marginTop: "auto", marginBottom: "auto"},
	ml: (v) => ({marginTop: v}),
	mr: (v) => ({marginTop: v}),
	mx: (v) => ({marginTop: v}),
	mt: (v) => ({marginTop: v}),
	mb: (v) => ({marginBottom: v}),
	my: (v) => ({marginTop: v}),
	p: (v) => ({padding: v}),
	pl: (v) => ({padding: v}),
	pl: (v) => ({marginTop: v}),
	pr: (v) => ({marginTop: v}),
	px: (v) => ({marginTop: v}),
	pt: (v) => ({marginTop: v}),
	pb: (v) => ({marginTop: v}),
	py: (v) => ({marginTop: v}),
	// borders
	bw1: {borderWidth: 1},
	bw2: {borderWidth: 2},
	bw3: {borderWidth: 3},
	bw4: {borderWidth: 4},
	bc: (v) => ({borderColor: v}),
	bcBlack: {borderColor: "black"},
	// outline doesn't work on ios
	// text color for text comp only
	tcWhite: {color: "white"},
	tcBlack: {color: "black"},
	ts1: {fontSize: 10},
	ts2: {fontSize: 20},
	ts3: {fontSize: 30},
	tf1: {fontFamily: "verdana"},
	tw1: {fontWeight: 900},
	tw2: {fontWeight: 800},
	tw3: {fontWeight: 700},
	ttUpper: {textTransform: "uppercase"},
	taMid: {textAlign: "center"},
	taSame: {textAlign: "justify"},
	taLeft: {textAlign: "left"},
	taRight: {textAlign: "right"},
	// exposures
	eFit: {objectFit: "contain"},
	eFull: {objectFit: "cover"},
	eFill: {objectFit: "fill"},
	// shows
	hide: {display: "none"},
	see: {display: "block"},
	// views
	cWhite: {backgroundColor: "white"},
	cBlack: {backgroundColor: "black"},
	cNull: {backgroundColor: "transparent"},
	// round
	r: (v) => ({borderRadius: v}),
	r10: {borderRadius: 10},
	// icons
	icBlack: {fill: "black"},
	ibcBlack: {stroke: "black"},
	// shadows
	s1: {boxShadow: ""},
	// aligns
	aNull: {flex: "none"},
	aRow: {display: "flex", flexDirection: "row"},
	aCol: {display: "flex", flexDirection: "column"},
	aRowAuto: {display: "flex", flexDirection: "row", flexWrap: "wrap"},
	aColAuto: {display: "flex", flexDirection: "column", flexWrap: "wrap"},
	axLeft: {justifyContent: "flex-start"},
	axMid: {justifyContent: "center"},
	axRight: {justifyContent: "flex-end"},
	axSame: {justifyContent: "space-between"},
	ayTop: {alignContent: "flex-start"},
	ayMid: {alignContent: "center"},
	ayBase: {alignContent: "flex-end"},
	aySame: {alignContent: "space-between"},
	// z axis
	zNormal: {position: "static"},
	zFit: {position: "relative"},
	zPut: {position: "absolute"},
	zFix: {position: "fixed"},
	left: (v) => ({left: v}),
	leftAuto: {left: "auto"},
	right: (v) => ({right: v}),
	rightAuto: {right: "auto"},
	top: (v) => ({top: v}),
	topAuto: {top: "auto"},
	base: (v) => ({bottom: v}),
	baseAuto: {bottom: "auto"},
	// 
	r: (v) => ({borderRadius: v}),
})
