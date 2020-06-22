import Rebase from 're-base'
// it is advisable to take it this way to optimize the call of the library so that it is faster and lighter
//All firebase 
import firebase from 'firebase/app'
//Data base of firebase 
import 'firebase/database'

//Code js of firebase for initialise firebase
const firebase = firebase.initialiseApp({
    apiKey: "AIzaSyDSpqIDWQUXXdjdLWjDgLeHmoCptq8yi6Q",
    authDomain: "chatbox-app-9b523.firebaseapp.com",
    databaseURL: "https://chatbox-app-9b523.firebaseio.com",  
})