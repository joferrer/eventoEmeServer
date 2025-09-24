
import { config } from 'dotenv';

import admin from "firebase-admin"; // Importar admin de firebase-

 
config(); // Cargar variables de entorno desde el archivo .env


const firebaseConfig = {
  credential: admin.credential.cert(
    {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }
  ),
  apiKey: process.env.apiKey, 
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    
};
// Initialize Firebase
admin.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = admin.firestore();