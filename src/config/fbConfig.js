import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {

  apiKey: "AIzaSyAUVk3fjwKcMz6MvXLUh5uF_ynCxmtDj3k",
  authDomain: "myprofile-5007a.firebaseapp.com",
  databaseURL: "https://myprofile-5007a.firebaseio.com",
  projectId: "myprofile-5007a",
  storageBucket: "myprofile-5007a.appspot.com",
  messagingSenderId: "737372401184",
  appId: "1:737372401184:web:fddface87201cc6b"

  
  // apiKey: "AIzaSyDOTHgFIGcjU5AAx1CnxUY8LvC7ttjFrpg",
  // authDomain: "dawood-452a0.firebaseapp.com",
  // databaseURL: "https://dawood-452a0.firebaseio.com",
  // projectId: "dawood-452a0",
  // storageBucket: "dawood-452a0.appspot.com",
  // messagingSenderId: "788699681110",
  // appId: "1:788699681110:web:0f908112e6c02020"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 