import {initializeApp} from 'firebase'; 
//copiar de firebase
const app= initializeApp({
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxxxx"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');