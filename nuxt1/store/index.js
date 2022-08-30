export const state = () => ({
  shuffleQuestions: [],
})

export const getters = {
  allQuestions(state) {
    return state.shuffleQuestions
  },
  slicedQuestions(state) {
    return state.shuffleQuestions.slice(0, 10)
  }
}

export const actions = {
  async getQuestion(context) {
    const questions = await this.$axios.$get('http://localhost:1337/api/questions');

    context.commit('updateQuestions', questions.data)
  }
}

export const mutations = {
  updateQuestions(state, questions) {
    state.shuffleQuestions = questions.sort(() => 0.5 - Math.random());
  },

}
