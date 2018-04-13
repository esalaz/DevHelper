import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
const firebaseApp = Firebase.initializeApp(firebaseConfig)
const db = app.database()
// Export
export default firebaseApp()
