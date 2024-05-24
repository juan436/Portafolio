const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { v4: uuidv4 } = require('uuid');

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-3mX5SBvyghvDcWCANRGH7mbUWv6WzG0",
  authDomain: "portfolio-b3430.firebaseapp.com",
  projectId: "portfolio-b3430",
  storageBucket: "portfolio-b3430.appspot.com",
  messagingSenderId: "752820674986",
  appId: "1:752820674986:web:41bca574dc7e3e8de20bd3",
  measurementId: "G-KBGW4LR34V"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadImage(file) {
  try {
    const storageRef = ref(storage, `uploads/${uuidv4()}.jpg`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    throw error;
  }
}

module.exports = { uploadImage };
