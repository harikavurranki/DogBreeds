import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import app from '@/App.vue'

console.log('sample', shallowMount, createLocalVue)
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
// import VueRouter from 'vue-router'
//describe block given space for multiple test cases we can have a nexted a describe
//it accepts string which we can write as a purpose of test cases
describe('HelloWorld.vue', () => {
	let appWrapper;
	// const router = new VueRouter({path:'/', name:'Breeds'})
  beforeEach(()=>{
  	// localVue.use(VueRouter)
  	//accepts component which we want to test
  	appWrapper = shallowMount(app,{
  		localVue,
  		router
  	})
  })
  afterEach(()=>{
  	appWrapper.destroy()
  })
  //simple test cases
  it('is a vue instance', ()=>{

  	expect(appWrapper.isVueInstance).toBeTruthy()
  })
  it('renders the correct markup', ()=>{
  	expect(appWrapper.html()).toContain("<div id='app'>")
  })
  it('it should have a div element with id="app', ()=>{
  	expect(appWrapper.attributes('id')).toBe('app')
  })
})