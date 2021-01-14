import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {path:'/student',component:()=>import('../components/Student')},
        {path:'/course',component:()=>import('../components/Course')}
    ]
    }
  ]
})
