<template>
  <div class="row">
    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-4" v-for="(breedsImage, index) in $store.state.breedsImages[breedName]" :key="index">
      <img :src='breedsImage' class="imagestyle mt10">
    </div>
  </div>
</template>
<script>
export default {
  name: 'BreedsImagesComponent',
  props: ['breedName'],
  data () {
    return {
    }
  },
  methods: {
    async getBreedImages () {
      this.$store.dispatch('getBreedImages', { breedName: this.breedName, count: 6 })
    }
  },
  created () {
    this.getBreedImages()
  }
}
</script>
<style>
.imagestyle{
  width: 100%;
  height: 200px;
}
.breedname {
  font-weight: 600;
}
</style>
