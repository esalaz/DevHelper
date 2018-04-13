<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1> DevHelper </h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> Find your Tutorial </h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Author
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in Articles" :key="article.id">
              <td>
                <a v-bind:href="book.url">{{article.title}}</a>
              </td>
              <td>
                {{article.author}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCl357TsvSsLcHQvx-5xMBYZk0-RJ8VMj0',
  authDomain: 'devhelper-f8f2e.firebaseapp.com',
  databaseURL: 'https://devhelper-f8f2e.firebaseio.com',
  projectId: 'devhelper-f8f2e',
  storageBucket: 'devhelper-f8f2e.appspot.com',
  messagingSenderId: '1034410814651'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let articleRef = db.ref('articles')

export default {
  name: 'App',
  firebase: {
    Articles: articleRef
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
