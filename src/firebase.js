import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "865293096496",
  appId: "",
  measurementId: ""
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
