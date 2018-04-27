import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCflgTZ9cKIdVHQsuzQINQ00_zO_ZZ9-HQ",
    authDomain: "mipediatra-15b95.firebaseapp.com",
    databaseURL: "https://mipediatra-15b95.firebaseio.com",
    projectId: "mipediatra-15b95",
    storageBucket: "mipediatra-15b95.appspot.com",
    messagingSenderId: "77209171584"
};

export default class Firebase {

    static auth;

    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();
    }

}