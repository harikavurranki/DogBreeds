import { createRouter, createWebHistory } from 'vue-router'
import Breeds from '../views/BreedList.vue'
import BreedDetailsComponent from '../components/BreedDetailsComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Breeds',
    component: Breeds
  },
  {
    path: '/breeddetails/:breedName',
    name: 'BreedDetailsComponent',
    component: BreedDetailsComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
