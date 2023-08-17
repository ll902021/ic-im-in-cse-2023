alert('有載入js 1');

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// import { initializeApp } from './firebase/app';
// import { getDatabase } from "./firebase/database";

alert('有載入js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6htxCy7CxDOaP_woenezkEKoOX3o6d1E",
  authDomain: "ic-im-in-cse-2023.firebaseapp.com",
  databaseURL: "https://ic-im-in-cse-2023-default-rtdb.firebaseio.com",
  projectId: "ic-im-in-cse-2023",
  storageBucket: "ic-im-in-cse-2023.appspot.com",
  messagingSenderId: "589513037614",
  appId: "1:589513037614:web:d38e85f91294bf6819ccbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function saveDataToFirebase(data) {
  const newDataRef = database.ref('data').push();
  newDataRef.set(data);
}

saveDataToFirebase({ name: 'John', age: 30 });