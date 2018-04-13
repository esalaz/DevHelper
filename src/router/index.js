import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewUser from '@/components/NewUser'
import EditUser from '@/components/EditUser'
import ViewUser from '@/components/ViewUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'newUser',
      component: NewUser
    },
    {
      path: '/edit/:user',
      name: 'editUser',
      component: EditUser
    },
    {
      path: '/:user',
      name: 'ViewUser',
      component: ViewUser
    }
  ]
})
