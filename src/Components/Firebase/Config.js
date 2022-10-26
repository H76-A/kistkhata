// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_oHCXajQEVRgfjwfrG-x-ZydiA1Na56I",
  authDomain: "kistkhata.firebaseapp.com",
  databaseURL: "https://kistkhata-default-rtdb.firebaseio.com",
  projectId: "kistkhata",
  storageBucket: "kistkhata.appspot.com",
  messagingSenderId: "977669539700",
  appId: "1:977669539700:web:bb1058de45603644de8e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore
const db = getFirestore(app)

export{db}