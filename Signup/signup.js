// const firebaseConfig = {
//     apiKey: "AIzaSyD6htxCy7CxDOaP_woenezkEKoOX3o6d1E",
//     authDomain: "ic-im-in-cse-2023.firebaseapp.com",
//     databaseURL: "https://ic-im-in-cse-2023-default-rtdb.firebaseio.com",
//     projectId: "ic-im-in-cse-2023",
//     storageBucket: "ic-im-in-cse-2023.appspot.com",
//     messagingSenderId: "589513037614",
//     appId: "1:589513037614:web:d38e85f91294bf6819ccbf"
//   };

//   const app = initializeApp(firebaseConfig);

//   const database = firebase.database();

//   database.ref('/').set({a:123});



import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

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



import { getDatabase, ref, set } from "firebase/database";

database.ref("/chinese/Bob").set({
  grade: 80
})
.then(function () {
  alert("建立成功");
}).catch(function () {
  alert("伺服器發生錯誤，請稍後再試");
});