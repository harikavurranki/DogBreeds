<template>
  <div class="bg">
    <div class="container headerclass tc">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-6 col-xs-6 textleft">
          Welcome to Dogs Breed App
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <select class="form-control selectbreed" v-model="$store.state.dogBreedName" @change="searchDogBreed()">
            <option value="" disabled hidden class="fs4"><p>Select Breed Type</p></option>
            <option v-for="(value, key) in $store.state.breedsList" :key="key"><p>{{key}}</p></option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
    }
  },
  methods: {
    searchDogBreed () {
      this.$store.dispatch('getBreedImages', { breedName: this.$store.state.dogBreedName, count: 20 })
      this.$router.push('/breeddetails/' + this.$store.state.dogBreedName)
    }
  },
  created () {
  }
}
</script>
<style>
.headerclass {
  padding: 5px 0px 5px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}
.tc {
  text-align: center;
}
.selectbreed {
  height: 28px;
}
.fs4 {
  font-size: 4px;
}
</style>
