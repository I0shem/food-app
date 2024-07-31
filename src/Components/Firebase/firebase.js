import { initializeApp } from "firebase/app";

const API_KEY = "AIzaSyB9xUh72tC9vwGpBflSEm7ifBgwtEhAE8U";
const AUTH_DOMAIN = "food-app-3ac38.firebaseapp.com";
const PROJECT_ID = "food-app-3ac38";
const STORAGE_BUCKET = "food-app-3ac38.appspot.com";
const MESSAGING_SENDER_ID = "348137389324";
const APP_ID = "1:348137389324:web:3706c0aa3d5a7560dedd29";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
