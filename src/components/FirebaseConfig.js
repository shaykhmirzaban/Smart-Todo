import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYP3PMVlyg0C4xE9r99ip69D8sSvWGr-4",
  authDomain: "smart-todo-a85cc.firebaseapp.com",
  projectId: "smart-todo-a85cc",
  storageBucket: "smart-todo-a85cc.appspot.com",
  messagingSenderId: "383854586254",
  appId: "1:383854586254:web:d51bb296aaa4ad2c375cdf",
  measurementId: "G-87T33NZWTL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
