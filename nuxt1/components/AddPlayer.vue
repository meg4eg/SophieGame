<template>
  <div>
    <label for="addPlayer">Введите имя игрока</label>
    <input id="addPlayer" type="text" v-model="playerName" @keyup.enter="add">
    <button @click="add">Добавить</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "AddPlayer",
  data() {
    return {
      playerName: ""
    }
  },
  methods: {
    add() {
      this.addPlayer(this.playerName)
      this.playerName = ''
    },
    ...mapActions(['addPlayer'])
  }
}
</script>

<style scoped>

</style>
