<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Post from './components/Post'
export default {
  components: {
    Post
  },
  created() {
    this.$store.dispatch({ type: 'loadComments' })
    this.$store.dispatch({ type: 'loadPosts' })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
