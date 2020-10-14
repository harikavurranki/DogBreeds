<template>
  <div class="container">
    <div class="mb40" v-for="(value, key) in $store.state.breedsList" :key="key">
      <div class="breedtype mb20 fc" v-if="value.length>0">{{key}}</div>
      <BreedsImagesComponent :breedName="key" v-if="value.length>0"></BreedsImagesComponent>
    </div>
  </div>
</template>
<script>
import BreedService from '../services/breeds.js'
import BreedsImagesComponent from '../components/BreedImagesComponent.vue'
export default {
  name: 'Breeds',
  components: { BreedsImagesComponent },
  data () {
    return {
    }
  },
  methods: {
    async getBreedsList () {
      const showdata = await BreedService.getBreedDetails()
      this.$store.commit('UPDATE_BREEDSLIST', showdata.data.message)
    }
  },
  created () {
    this.$store.state.dogBreedName = ''
    this.getBreedsList()
  }
}
</script>
<style>
</style>
