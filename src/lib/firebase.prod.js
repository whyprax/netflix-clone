import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// we need to seed the database
// import { seedDatabase } from "../seed";
// comment it once it is seeded in order to avoid duplication

// we need to configure here
const config = {
  apiKey: "AIzaSyCEWyPwNV4QQ0HW84IRKxS297cOKzwrcec",
  authDomain: "netflix-clone-ba85e.firebaseapp.com",
  projectId: "netflix-clone-ba85e",
  storageBucket: "netflix-clone-ba85e.appspot.com",
  messagingSenderId: "661895608118",
  appId: "1:661895608118:web:22f00005adf8585d3b2597",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
