import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence, initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqI6n11ks850xDeBUSGSUOqXxzbpA4m54",
  authDomain: "proyec-58078.firebaseapp.com",
  projectId: "proyec-58078",
  storageBucket: "proyec-58078.firebasestorage.app",
  messagingSenderId: "773494211980",
  appId: "1:773494211980:web:f1aba9e221b44292f542a9"
};

const app = initializeApp(firebaseConfig);

// Inicializa Firestore con la mejor opción para la conectividad en tiempo real
const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  experimentalAutoDetectLongPolling: true,  // Usar esta opción para mejor rendimiento
});

const auth = getAuth(app);
const storage = getStorage(app);

// Habilita persistencia offline
if (typeof window !== 'undefined' && 'indexedDB' in window) {
  enableIndexedDbPersistence(db, {
    synchronizeTabs: true
  }).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser doesn\'t support persistence.');
    }
  });

  setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.warn('Auth persistence could not be enabled:', err);
  });
}

export { db, auth, storage };