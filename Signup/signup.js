import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

alert("有載入");

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

alert("有載入2");

function start(){
  alert("有載入3");
  //document.getElementById('form').onsubmit = function() {processFormData()};
  document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止默认的表单提交行为
    processFormData1();
  });

  document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止默认的表单提交行为
    processFormData2();
  });
}


function processFormData1(){
  alert("到底？？");
  const formElement = document.getElementById('form1');
  const name = doucumect.getElementById('name').value;
  const id = doucumect.getElementById('id').value;
  const sex = document.querySelector('input[name="sex"]:checked').value;
  const food = document.querySelector('input[name="food"]:checked').value;
  const idcard = doucumect.getElementById('idcard').value;
  const birth = doucumect.getElementById('birth').value;
  const phone = doucumect.getElementById('phone').value;
  const size = doucumect.getElementById('size').value;
  const emgname = doucumect.getElementById('emgname').value;
  const emgphone = doucumect.getElementById('emgphone').value;
  const relation = doucumect.getElementById('relation').value;

  writeUserData(name, id, sex, food, idcard, birth, phone, size, emgname, emgphone, relation);

}

function processFormData2(){
  alert("到底？？");
  const formElement = document.getElementById('form2');
  const name = doucumect.getElementById('nname').value;
  const id = doucumect.getElementById('iid').value;
  const sex = document.querySelector('input[name="sex"]:checked').value;
  const food = document.querySelector('input[name="food"]:checked').value;
  const idcard = doucumect.getElementById('iidcard').value;
  const birth = doucumect.getElementById('bbirth').value;
  const phone = doucumect.getElementById('ppphone').value;
  const size = doucumect.getElementById('ssize').value;
  const emgname = doucumect.getElementById('emgnname').value;
  const emgphone = doucumect.getElementById('emgppphone').value;
  const relation = doucumect.getElementById('rrelation').value;

  writeUserData(name, id, sex, food, idcard, birth, phone, size, emgname, emgphone, relation);



}


function writeUserData(name, id, sex, food, idcard, birth, phone, size, emgname, emgphone, relation) {
  alert("有載入4");
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
    與緊急聯絡人關係: relation
  })

  .then(function () {
    alert("建立成功");
  }).catch(function () {
    alert("伺服器發生錯誤，請稍後再試");
});

  window.location.href="../web_index/webindex.html";
}

window.addEventListener("load", start, false);