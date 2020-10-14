import CommonService from './index.js'

export default {
  getBreedDetails () {
    const response = CommonService.getData('https://dog.ceo/api/breeds/list/all').then((res) => {
      return res
    })
    return response
  },
  getBreedImagesList (name, imagesCount) {
    const response = CommonService.getData('https://dog.ceo/api/breed/' + name + '/images/random/' + imagesCount)
      .then((res) => {
        return res
      }
      )
    return response
  },
  getSubBreadList (name) {
    const response = CommonService.getData('https://dog.ceo/api/breed/' + name + '/list')
      .then((res) => {
        return res
      }
      )
    return response
  }
}
