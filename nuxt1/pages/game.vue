<template>
  <div class="container">

    <h1>Game</h1>


    <b-overlay :show="show" rounded="sm">
<!--          <div v-if="slicedQuestions">-->
<!--            <ul>-->
<!--              <li v-for="question in slicedQuestions"> {{ question.attributes.question }}</li>-->
<!--            </ul>-->
<!--          </div>-->
      <b-button class="mb-2" variant="success" @click="ask">Вопрос</b-button>

      <div v-if="nowQuestion">
        <b-alert show><span class="text-muted">Вопрос:</span> {{ nowQuestion }} ?</b-alert>
      </div>
    </b-overlay>
    <div v-if="endgame">
      <b-button class="mb-2"  @click="newRandom">Рандом другие вопросы</b-button>

    </div>
    <div>
      <NuxtLink to="/">Назад</NuxtLink>
    </div>

  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "game",
  data() {
    return {
      show: true,
      endgame: false,
      nowQuestion: '',
      count: 0,
      question: ''
    }
  },
  computed: {
    ...mapGetters(['slicedQuestions'])
  },
  methods: {
    ...mapActions(['getQuestion']),
    ask() {
      if (this.count < this.slicedQuestions.length) {
        this.nowQuestion = this.slicedQuestions[this.count].attributes.question;
        this.count++
      } else {
        this.endgame = true
      }
    },
    newRandom() {
      this.getQuestion()
      this.count = 0
      this.nowQuestion = ''
    }
  },
  async mounted() {
    await this.getQuestion()
    this.show = false;
  }

}
</script>

<style scoped>
.myButton {
  border-radius: 50%;
}
</style>
