
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC3zhTqkkpYhkN_Tri6WwgL89KvRDzYmfE",
  authDomain: "chill-home-31979.firebaseapp.com",
  projectId: "chill-home-31979",
  storageBucket: "chill-home-31979.firebasestorage.app",
  messagingSenderId: "633341569317",
  appId: "1:633341569317:web:50c56abdb6af7f7b3492cc"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export async function getProducts() {
    const productsRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsRef);
    const dataDocs = productsSnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return dataDocs;
}

export default app;
