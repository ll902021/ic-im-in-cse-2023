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


function start(){
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
  var form = document.getElementById('form1');

  const name = form.name.value;
  const id = form.id.value;
  const sex = document.querySelector('input[name="sex"]:checked').value;
  const food = document.querySelector('input[name="food"]:checked').value;
  const idcard = form.idcard.value;
  const birth = form.birth.value;

  var parsedDate = new Date(birth);
  var year = parsedDate.getFullYear() - 1911;
  var month = parsedDate.getMonth() + 1; // 月份从0开始，所以要加1
  var day = parsedDate.getDate();
  var newbirth = year + '/' + month + '/' + day;

  const phone = form.phone.value;
  const size = form.size.value;
  const emgname = form.emgname.value;
  const emgphone = form.emgphone.value;
  const relation = form.relation.value;

  if (window.confirm("請確認以下資訊是否正確\n 學號："+id+
      "\n 姓名："+name+
      "\n 性別："+newsex+
      "\n 葷素："+newfood+
      "\n 身分證字號："+idcard+
      "\n 生日(民國)："+newbirth+
      "\n 聯絡電話："+phone+
      "\n 衣服尺寸："+size+
      "\n 緊急聯絡人姓名："+emgname+
      "\n 緊急聯絡人電話："+emgphone+
      "\n 與緊急聯絡人關係："+relation)) {

        writeUserData(name, id, newsex, newfood, idcard, newbirth, phone, size, emgname, emgphone, relation);
    }

}

function processFormData2(){
  var form = document.getElementById('form2');

  const name = form.name.value;
  const id = form.id.value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  if(sex==="girl"){
    var newsex = "女";
  }else if(sex==="boy"){
    var newsex = "男";
  }

  const food = document.querySelector('input[name="food"]:checked').value;

  if(food==="meat"){
    var newfood = "葷";
  }else if (food==="veg"){
    var newfood = "素";
  }

  const idcard = form.idcard.value;
  const birth = form.birth.value;

  var parsedDate = new Date(birth);
  var year = parsedDate.getFullYear() - 1911;
  var month = parsedDate.getMonth() + 1; // 月份从0开始，所以要加1
  var day = parsedDate.getDate();
  var newbirth = year + '/' + month + '/' + day;

  const phone = form.phone.value;
  const size = form.size.value;
  const emgname = form.emgname.value;
  const emgphone = form.emgphone.value;
  const relation = form.relation.value;

  if (window.confirm("請確認以下資訊是否正確\n 學號："+id+
      "\n 姓名："+name+
      "\n 性別："+newsex+
      "\n 葷素："+newfood+
      "\n 身分證字號："+idcard+
      "\n 生日(民國)："+newbirth+
      "\n 聯絡電話："+phone+
      "\n 衣服尺寸："+size+
      "\n 緊急聯絡人姓名："+emgname+
      "\n 緊急聯絡人電話："+emgphone+
      "\n 與緊急聯絡人關係："+relation)) {

        writeUserData(name, id, newsex, newfood, idcard, newbirth, phone, size, emgname, emgphone, relation);
    }

}


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
    與緊急聯絡人關係: relation
  })

  .then(function () {
    alert("報名成功");
    window.location.href="../web_index/webindex.html";
  }).catch(function () {
    alert("伺服器發生錯誤，請稍後再試");
});

}

window.addEventListener("load", start, false);