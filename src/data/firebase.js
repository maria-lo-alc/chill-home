
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, where, query, getDoc, getFirestore, addDoc} from "firebase/firestore";
import  products  from "./products";
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

export async function getProductById(idParam){
  const docRef = doc(db, "products", idParam);
  const documentSnapshot = await getDoc(docRef);
  return { id: documentSnapshot.id, ...documentSnapshot.data() };
}

export async function getProductsByCategory(categoryParam){
  const productsRef = collection(db, "products");
  const q = query( productsRef, where("category", "==", categoryParam) );
  const productsSnapshot = await getDocs(q);
  const documentsData = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  return documentsData;
}

export async function createOrder(orderData){
  const ordersRef = collection (db, "orders");
const newDoc = await addDoc(ordersRef, orderData);
return newDoc;
};


export async function subirProductosAFirestore () {
  for(let item of products){
    const newDoc = await addDoc(collection(db, "products"), item)
    console.log ("Documento creado con ID:", newDoc.id)
  }
};


export default app;
