export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('persona/loadPersonaList')
  }
}

