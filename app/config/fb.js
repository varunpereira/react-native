import {initializeApp} from "firebase/app"
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from 'react-native';
import {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId} from "@env"

var env = {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId}

var fbConfig = {
	apiKey: env.apiKey,
	authDomain: env.authDomain,
	projectId: env.projectId,
	storageBucket: env.storageBucket,
	messagingSenderId: env.messagingSenderId,
	appId: env.appId,
}

export const fb = initializeApp(fbConfig)
if (Platform.OS !== 'web') {
  initializeAuth(fb, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  })
} 
export const auth = getAuth(fb)
export const db = getFirestore(fb)
