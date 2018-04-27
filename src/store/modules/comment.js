import axios from 'axios'
const state = {
  all: []
}
const actions = {
  addComment({ commit }, { comment }) {
    const { body } = comment
    const uri = 'http://localhost:3008/comments'
    axios.post(uri, comment).then(res => {
      const comment = res.data
    })
    commit('addComment', comment)
  },
  loadComments({ commit }) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(res => {
      let comments = res.data
      commit('loadComments', comments)
    })
  }
}
const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  },
  loadComments(state, comments) {
    state.all = comments
  }
}
const getters = {
  getComments: state => id => {
    return state.all.filter(t => t.post === id)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
