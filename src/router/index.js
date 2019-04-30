import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerVue from '@/components/routerVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	   path: "/user/:userName",
	   component:routerVue,
	   name:"user"
	}
  ]
})
