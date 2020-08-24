import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Addresses from './views/Addresses.vue'
import AddresseFrom from './views/AddressForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses,
    },
    {
      path: '/addresses/:address_id?/edit',
      name: 'address_edit',
      component: AddresseFrom,
    },
  ],
})
