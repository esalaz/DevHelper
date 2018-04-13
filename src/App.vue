<template>
  <div id="app">
    <Articles />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Articles from '@/components/Articles'

export default {
  name: 'App',
  components: {
    Articles
  },
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
