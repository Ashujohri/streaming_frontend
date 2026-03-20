// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJVFW4LedJ4Mr_sLRBmKi2Fzx5cUVtKA",
  authDomain: "streamingfrontend-f2b97.firebaseapp.com",
  projectId: "streamingfrontend-f2b97",
  storageBucket: "streamingfrontend-f2b97.firebasestorage.app",
  messagingSenderId: "596091247753",
  appId: "1:596091247753:web:f96f06d87f03f006473a58",
  measurementId: "G-WMS7ST7ZX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: any = null;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}
export { analytics };
export const auth = getAuth();
