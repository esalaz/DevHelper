<template>
  <div id="articles" class="container">
    <div class="page-header">
      <h1> DevHelper </h1>
    </div>

    <div class="panel panel-default">
     <div class="panel-heading">
       <h3> Add Article</h3>
     </div>
     <div class="panel-body">
       <form id="form" class="form-inline" v-on:submit.prevent="addArticle">
         <div class="form-group">
           <label for="articlesTitle">Title -</label>
           <input type="text" id="articleTitle" class="form-control" v-model="newArticle.title">
         </div>
         <div class="form-group">
           <label for="articlesTitle">Author -</label>
           <input type="text" id="articleAuthor" class="form-control" v-model="newArticle.author">
         </div>
         <div class="form-group">
           <label for="articlesTitle">URL -</label>
           <input type="text" id="articleUrl" class="form-control" v-model="newArticle.url">
         </div>
         <br>
         <br>
         <input type="submit" class="btn btn-primary" value="Add Article">
       </form>
     </div>
   </div>
   <div class="panel panel-default">
     <div class="panel-heading">
       <h3> Find your Tutorial </h3>
     </div>
     <div class="panel-body">
       <table class="table table-striped">
         <thead>
           <tr>
             <th>Title</th>
             <th>Author</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="article in Articles" :key="article.id">
             <td>
               <a v-bind:href="article.url">{{article.title}}</a>
             </td>
             <td>
               {{article.author}}
             </td>
             <td class="edit-delete-icons">
               <img class="trash-icon" src="../assets/trash-alt.svg" alt="trash-icon" v-on:click="removeArticle(article)">
               <img class="edit-icon" src="../assets/edit.svg" alt="edit-icon" v-on:click="editArticle(article)">
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 </div>
</template>
<script>
import toastr from 'toastr'
import db from './firebaseInit'

let articleRef = db.ref('articles')

export default {
  firebase: {
    Articles: articleRef
  },
  data () {
    return {
      newArticle: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods: {
    addArticle: function () {
      articleRef.push(this.newArticle)
      this.newArticle.title = ''
      this.newArticle.author = ''
      this.newArticle.url = ''
      toastr.success('Articles Created!')
    },
    removeArticle: function (article) {
      articleRef.child(article['.key']).remove()
      toastr.success('Poof! Articles Deleted!')
    },
    editArticle: function (article) {
      articleRef.child(article['.key']).update()
      toastr.success('Article Changed')
    }
  }
}
</script>
<style>
.edit-delete-icons{
  display: flex;
  flex-direction: row;
}
.trash-icon{
  height: 1.5em;
  width: 1.5em;
  margin-left: 1em;
}
.edit-icon{
  height: 1.5em;
  width: 1.5em;
  margin-left: 1em;
}
</style>
