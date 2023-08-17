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

//firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//var db = firebase.database();

app.ref("/chinese/Bob").set({
  grade: 80
})
.then(function () {
  alert("建立成功");
}).catch(function () {
  alert("伺服器發生錯誤，請稍後再試");
});