import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoZg9RLb5hKDT8avaDXgMar3RPKBQb4Yg",
  authDomain: "agente-de-marketing-digi-9164d.firebaseapp.com",
  projectId: "agente-de-marketing-digi-9164d",
  storageBucket: "agente-de-marketing-digi-9164d.firebasestorage.app",
  messagingSenderId: "488981321745",
  appId: "1:488981321745:web:456434443065bf814339b0"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase iniciado com sucesso!");

export default app;