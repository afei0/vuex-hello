<template>
  <div class="post">
    <div class="upper">
      <PostBody :postId="postId"/>
    </div>
    <div class="bottom">
      <CommentBox />
    </div>
  </div>
</template>

<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
export default {
  name: 'Post',
  components: {
    PostBody,
    CommentBox
  },
  computed: {
    postId: function() {
      return this.$route.params.id
      //params参数
      //动态路由
    }
  }
}
</script>

<style scoped>
.post {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.upper {
  display: flex;
  background-color: #53a6ae;
}
.bottom {
  flex-grow: 1;
  background-color: #fff;
}
</style>
