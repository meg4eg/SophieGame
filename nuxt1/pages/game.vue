<template>
  <div>

    <h1>game</h1>

    <button @click="ask">
      ask
    </button>

    <div v-if="question">{{ question }} ?</div>

  </div>

</template>

<script>
export default {
  name: "game",
  data() {
    return {
      questions: [],
      question: ''
    }
  },
  created() {
    this.getQuestion()
  },
  methods: {
    async getQuestion() {
      const questions = await this.$axios.$get('http://localhost:1337/api/questions');
      this.questions = questions.data
    },
    ask() {
      this.question = this.questions[Math.floor(Math.random() * this.questions.length)].attributes.question;
    }
  },
}
</script>

<style scoped>

</style>
