<template>
  <ul>
    <li v-for="(player, index) in getPlayers" :key="index">{{ player }}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "PlayersList",
  computed: mapGetters(['getPlayers']),
}
</script>

<style scoped>

</style>
