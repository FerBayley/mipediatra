import * as firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCflgTZ9cKIdVHQsuzQINQ00_zO_ZZ9-HQ",
    authDomain: "mipediatra-15b95.firebaseapp.com",
    databaseURL: "https://mipediatra-15b95.firebaseio.com",
    projectId: "mipediatra-15b95",
    storageBucket: "mipediatra-15b95.appspot.com",
    messagingSenderId: "77209171584"
})

export const db = firebase.database();
export const auth = firebaseApp.auth();

export default firebase;