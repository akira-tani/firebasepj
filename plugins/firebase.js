import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyD6CUVZ_Mn87UKcUt-quFooxDSDj7CdZQs",
      authDomain: "fir-pj-c4e4b.firebaseapp.com",
      projectId: "fir-pj-c4e4b",
      storageBucket: "fir-pj-c4e4b.appspot.com",
      messagingSenderId: "982040705401",
      appId: "1:982040705401:web:9f1547a3d71e924bec97a8",
      measurementId: "G-6VZ75GSPL2"
    }
  )
}
  
export default firebase