import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
  apiKey: "AIzaSyAc7Y6vZ7rcGiELqIEFEl8eOk-7dUAkfmU",
  authDomain: "pbnj-d2e44.firebaseapp.com",
  projectId: "pbnj-d2e44",
  storageBucket: "pbnj-d2e44.appspot.com",
  messagingSenderId: "317570405300",
  appId: "1:317570405300:web:2409df70d4dccec90d18e1",
  measurementId: "G-7SEVCY5J5R"
});
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}