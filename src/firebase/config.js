import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBbzzQvQC5bI6Yl76u-tag_AMMjlpG0vqs",
  authDomain: "study-olx.firebaseapp.com",
  databaseURL: "https://study-olx-default-rtdb.firebaseio.com",
  projectId: "study-olx",
  storageBucket: "study-olx.appspot.com",
  messagingSenderId: "941641273586",
  appId: "1:941641273586:web:d6fd7985688f262f63806b",
  measurementId: "G-HDCCTVLFQD"
};

export const firebase = firebase.initializeApp(firebaseConfig)