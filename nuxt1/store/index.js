import addPlayer from "~/components/AddPlayer";

export const state = () => ({
  players: []
})

export const getters = {
  getPlayers(state) {
    return state.players
  }
}

export const actions = {
  addPlayer(context, player) {
    context.commit('addPlayerToState', player)
  }
}

export const mutations = {
  addPlayerToState(state, player) {
    state.players.push(player)
  }
}
