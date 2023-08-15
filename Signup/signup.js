const firebaseConfig = {
    apiKey: "AIzaSyD6htxCy7CxDOaP_woenezkEKoOX3o6d1E",
    authDomain: "ic-im-in-cse-2023.firebaseapp.com",
    projectId: "ic-im-in-cse-2023",
    storageBucket: "ic-im-in-cse-2023.appspot.com",
    messagingSenderId: "589513037614",
    appId: "1:589513037614:web:d38e85f91294bf6819ccbf"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

db.collection('users')
  .add({
    first: 'Dez',
    last: 'Chuang',
    gender: 'male'
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id)
  })
  .catch(function(error) {
    console.error('Error adding document: ', error)
  })