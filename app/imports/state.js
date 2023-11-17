import {createGlobalState} from "react-native-global-state-hooks"
import {useState, useEffect} from "react"

export var state = (def) => {
	var [get, set] = useState(def)
	return (put) => (put !== undefined ? set(put) : get)
}

export {useEffect as effect}

export var globalUser2 = createGlobalState()
export var globalUser = (def) => {
	var [get, set] = globalUser2(def)
	return (put) => (put !== undefined ? set(put) : get)
}