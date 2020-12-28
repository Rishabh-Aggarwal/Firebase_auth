import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBC43MgLfP_gy3cKINUFc3f43SqjP1A8Pc",
    authDomain: "fir-demo-9e543.firebaseapp.com",
    projectId: "fir-demo-9e543",
    storageBucket: "fir-demo-9e543.appspot.com",
    messagingSenderId: "731186136958",
    appId: "1:731186136958:web:b5653837d618d4453c552f",
    measurementId: "G-FZ134T2205"
})

export const auth = app.auth()
export default app