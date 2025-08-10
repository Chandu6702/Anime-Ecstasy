import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTuqP6eyhTZhqnb5cXd3kcakQPtgQujBk",
  authDomain: "smartbiz-3.firebaseapp.com",
  projectId: "smartbiz-3",
  storageBucket: "smartbiz-3.firebasestorage.app",
  messagingSenderId: "865293096496",
  appId: "1:865293096496:web:5fb450a2f7b306d1c73ff5",
  measurementId: "G-LMCB6TJ2EP"
};

  
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence).catch((error) => {
  console.error("Firebase persistence error:", error);
});
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


const db = getFirestore(app);

export { auth, provider, db };
