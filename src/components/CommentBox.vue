<template>
  <div class="wrap">
    <div class="comment-box">
      <div class="comment-form">
        <input type="text" v-model="message" placeholder="请填写评论" />
        <button @click="handleClick">提交</button>
        </div>
        <div v-for="comment in reversedComments" v-bind:key="comment.id">
        {{ comment.body }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  computed: {
    postId() {
      return this.$route.params.id
    },
    comments: function() {
      return this.$store.getters.getComments(this.postId)
    },
    reversedComments() {
      return this.comments.slice().reverse()
    }
  },
  data: () => ({
    message: ''
  }),
  methods: {
    handleClick() {
      let comment = {
        // id: (this.comments.length + 1).toString(),
        body: this.message,
        post: this.postId
      }
      // this.comments.push(comment)
      this.$store.dispatch({ type: 'addComment', comment })

      this.message = ''
    }
  }
}
</script>


<style scoped>
.wrap {
  border: 2px solid #53a6ae;
  /* height: 100px; */
  width: 400px;
  margin: 20px auto;
}
.comment-box {
  padding: 20px;
}

.comment-form {
  display: flex;
  margin-bottom: 20px;
}

.comment-form input {
  flex-grow: 1;
  border: 0;
  border-bottom: 2px solid red;
}

.comment-form button {
  margin-left: 5px;
}
</style>
