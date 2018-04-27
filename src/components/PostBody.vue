<template>
  <div class="wrap">
    <div class="comment-count">
      <div v-if="show">
      <h1>{{ post.title }}</h1>
      </div>
      <div v-else>
        loading...
      </div>
      {{ commentCount }} 评论
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostBody',
  props: ['postId'],
  computed: {
    show() {
      return this.post
    },
    commentCount() {
      return this.$store.getters.getComments(this.postId).length
    },
    post() {
      return this.$store.state.post.all.find(t => t.id === this.postId)
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.wrap {
  height: 200px;
  margin: 20px auto;
  width: 400px;
  position: relative;
  background-color: #fff;
}

.comment-count {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-bottom: 1px solid gray;
}
</style>
