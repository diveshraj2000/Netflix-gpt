// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7lzzDmCPGsvW9vXw9O-FtSzi3MDKtNbk',
  authDomain: 'netflix-gpt-6e5e3.firebaseapp.com',
  projectId: 'netflix-gpt-6e5e3',
  storageBucket: 'netflix-gpt-6e5e3.appspot.com',
  messagingSenderId: '801415760877',
  appId: '1:801415760877:web:7b70f9319f5ecd2b5635e4',
  measurementId: 'G-M2SNN7WWBH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
