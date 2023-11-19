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
			if (s2.hasOwnProperty(key)) arr.push(s2[key](isNaN(value) ? value : parseInt(value)))
		} else if (s2.hasOwnProperty(tokens[i])) arr.push(s2[tokens[i]])
	}
	return arr
}

// is reactive.
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
	ml: (v) => ({marginLeft: v}),
	mr: (v) => ({marginRight: v}),
	mx: (v) => ({marginHorizontal: v}),
	mt: (v) => ({marginTop: v}),
	mb: (v) => ({marginBottom: v}),
	my: (v) => ({marginVertical: v}),
	p: (v) => ({padding: v}),
	pl: (v) => ({paddingLeft: v}),
	pr: (v) => ({paddingRight: v}),
	px: (v) => ({paddingHorizontal: v}),
	pt: (v) => ({paddingTop: v}),
	pb: (v) => ({paddingBottom: v}),
	py: (v) => ({paddingVertical: v}),
	// borders
	bw: (v) => ({borderWidth: v}),
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
	ts: (v) => ({fontSize: v}),
	ts1: {fontSize: 10},
	ts2: {fontSize: 20},
	ts3: {fontSize: 30},
	tf1: {fontFamily: "verdana"},
	tw: (v) => ({fontWeight: v}),
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
	// direction and opposite dir
	aNull: {flex: "none"},
	dx: {display: "flex", flexDirection: "row"},
	dy: {display: "flex", flexDirection: "column"},
	dxAuto: {display: "flex", flexDirection: "row", flexWrap: "wrap"},
	dyAuto: {display: "flex", flexDirection: "column", flexWrap: "wrap"},
	dStart: {justifyContent: "flex-start"},
	dMid: {justifyContent: "center"},
	dEnd: {justifyContent: "flex-end"},
	dSame: {justifyContent: "space-between"},
	oStart: {alignItems: "flex-start"},
	oMid: {alignItems: "center"},
	oEnd: {alignItems: "flex-end"},
	oSame: {alignItems: "space-between"},
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
