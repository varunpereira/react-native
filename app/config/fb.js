import {initializeApp} from "firebase/app"
import {getAuth, initializeAuth, getReactNativePersistence,onAuthStateChanged} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from 'react-native';
import {env} from "@app/imports/env"

var fbConfig = {
	apiKey: env.apiKey,
	authDomain: env.authDomain,
	projectId: env.projectId,
	storageBucket: env.storageBucket,
	messagingSenderId: env.messagingSenderId,
	appId: env.appId,
}

export const fb = initializeApp(fbConfig)
// delete since mobile app
if (Platform.OS !== 'web') {
  initializeAuth(fb, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  })
} 
export const auth = getAuth(fb)
export const authSet = onAuthStateChanged
export const db = getFirestore(fb)
