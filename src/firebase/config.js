import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1-3Igv2xSf1r80p0QMgfY2HQZkXRAp_M",
  authDomain: "twenty-twos.firebaseapp.com",
  projectId: "twenty-twos",
  storageBucket: "twenty-twos.appspot.com",
  messagingSenderId: "47415096438",
  appId: "1:47415096438:web:3847e0c5b6288a70d61b57",
  measurementId: "G-SV1DVVTS2D"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const db = firebase.firestore()

export { db }