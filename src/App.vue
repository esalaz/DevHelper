<template>
  <div id="app">
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyCl357TsvSsLcHQvx-5xMBYZk0-RJ8VMj0",
  authDomain: "devhelper-f8f2e.firebaseapp.com",
  databaseURL: "https://devhelper-f8f2e.firebaseio.com",
  projectId: "devhelper-f8f2e",
  storageBucket: "devhelper-f8f2e.appspot.com",
  messagingSenderId: "1034410814651"
};

let app = Firebase.initializeApp(config);
let db = app.database();
let articleRef = db.ref('articles');

export default {
  name: 'App',
  firebase: {
    articles: a
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
