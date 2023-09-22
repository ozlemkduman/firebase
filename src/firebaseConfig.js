import {initializeApp} from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyBRi7b9NrcbiXJiPSkUwJdT1zoRu14MKkQ",
    authDomain: "fir-learn-5ad05.firebaseapp.com",
    projectId: "fir-learn-5ad05",
    storageBucket: "fir-learn-5ad05.appspot.com",
    messagingSenderId: "184818930972",
    appId: "1:184818930972:web:e5cfffc19d09103f45d6d9",
    measurementId: "G-1EVR0FKL7S"
  };


  const app = initializeApp(firebaseConfig)

  export default app;