import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAaEvlYw0O-K_tJvVK2KjYgzyjoCECpt94",
  authDomain: "senflix001188.firebaseapp.com",
  databaseURL: "https://senflix001188.firebaseio.com",
  projectId: "senflix001188",
  storageBucket: "senflix001188.appspot.com",
  messagingSenderId: "764927679337",
  appId: "1:764927679337:web:115fcd1b2be85eb2cdbbf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
