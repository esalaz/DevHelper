import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
const firebaseApp = Firebase.initializeApp(firebaseConfig)
export default firebaseApp()
