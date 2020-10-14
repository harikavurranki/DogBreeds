import { createStore } from 'vuex'
import BreedService from '../services/breeds.js'

export default createStore({
  state: {
    dogBreedName: '',
    breedsImages: {},
    breedsList: []
  },
  mutations: {
    UPDATE_BREEDSIMAGES (state, data) {
      state.breedsImages[data.name] = data.images
    },
    UPDATE_BREEDSLIST (state, data) {
      state.breedsList = data
    }
  },
  actions: {
    async getBreedImages ({ commit, state }, payload) {
      const showdata = await BreedService.getBreedImagesList(payload.breedName, payload.count)
      commit('UPDATE_BREEDSIMAGES',
        { name: payload.breedName, images: showdata.data.message })
    }
  },
  modules: {
  }
})
