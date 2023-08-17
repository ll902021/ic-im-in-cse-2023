import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


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
//const db = getDatabase(app);

function writeUserData(name, id, sex, food, idcard, birth, phone, size, emgname, emgphone, relation) {
  const db = getDatabase();
  set(ref(db, `/${id}` + name), {
    性別: sex,
    葷素: food,
    身分證字號: idcard,
    生日: birth,
    聯絡電話: phone,
    尺寸: size,
    緊急聯絡人姓名: emgname,
    緊急聯絡人電話: emgphone,
    緊急聯絡人關係: relation
  });
}

function processFormData(){
  const formElement = document.getElementById('form');
  const name = formElement[0].value;
  const id = formElement[1].value;
  const sex = formElement[2].value;
  const food = formElement[3].value;
  const idcard = formElement[4].value;
  const birth = formElement[5].value;
  const phone = formElement[6].value;
  const size = formElement[7].value;
  const emgname = formElement[8].value;
  const emgphone = formElement[9].value;
  const relation = formElement[10].value;

  writeUserData(name, id, sex, food, idcard, birth, phone, size, emgname, emgphone, relation);
}