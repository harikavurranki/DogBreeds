<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6 subbreedtype mb20 fc breedtype">{{$route.params.breedName}}</div>
      <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6 textright mt20" @click="redirectToHome"><span class="backtohome">Back to home</span></div>
    </div>
    <div v-if="subBreedsIList.length === 0" class="oops">oops details not found for <span class="backtohome">{{$route.params.breedName}}</span>. Please click on <span class="backtohome" @click="redirectToHome">Home</span></div>
    <div class="row" v-if="subBreedsIList.length>0">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-4 mb20" v-for="(breed, index) in subBreedsIList" :key="index">
        <div class="breedname fc">{{breed}}</div>
        <img v-if="$store.state.breedsImages[$route.params.breedName][index]" :src='$store.state.breedsImages[$route.params.breedName][index]' class="imagestyle mt10">
      </div>
    </div>
  </div>
</template>
<script>
import BreedService from '../services/breeds.js'
export default {
  name: 'BreedDetailsComponent',
  data () {
    return {
      subBreedsIList: {}
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    },
    async getSubBreadList () {
      const showdata = await BreedService.getSubBreadList(this.$route.params.breedName)
      this.subBreedsIList = showdata.data.message
    },
    async getBreedImages () {
      console.log(this.subBreedsIList.length)
      this.$store.dispatch('getBreedImages', { breedName: this.$route.params.breedName, count: this.subBreedsIList.length })
      console.log(this.$store.state.breedsImages)
    }
  },
  async created () {
    await this.getSubBreadList()
    if (Object.keys(this.$store.state.breedsImages).length === 0) {
      this.getBreedImages()
    }
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
.subbreedtype {
  margin-top: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 7px;
}
.backtohome {
  color: #007bff;
  border-bottom: 1px solid #007bff;
  cursor: pointer;
}
.oops {
  font-size: 30px;
  height: 30%;
  margin-top: 21%;
  margin-bottom: 21%;
}
</style>
