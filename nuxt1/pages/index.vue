<template>
  <div>
    <h1>SophieGame</h1>
    <AddPlayer></AddPlayer>

    <PlayersList></PlayersList>

    <ul>
<!--      <li v-for="(question, index) in questions" :key="index">Q: {{ question.attributes.question }}</li>-->
    </ul>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      questions: []
    }
  },
  created() {
    this.getQuestion()
  },
  methods: {
    async getQuestion() {
      const questions = await this.$axios.$get('http://localhost:1337/api/questions');
      this.questions = questions.data
    }
  },
}
</script>
