
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import store from '@/store'
import Trade from '@/pages/Trade'
import pay from '@/pages/Pay'
import paysuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myoader from '@/pages/Center/myoader';
import grouporder from '@/pages/Center/grouporder'
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


 let router =  new VueRouter({
	// base: '/',
	// mode: 'history',
	routes: [
		{
			path: '/center',
			component: Center,
			meta: { show: true },
			children:[
				{
					path:'grouporder',
					component:grouporder
				},
				{
					path:'myoader',
					component:myoader
				},
				{
					path:'/',
					component:myoader
				}
			]
			
		},
		{
			path: '/paysuccess',
			component: paysuccess,
			meta: { show: true },
			beforeEnter: (to, from, next) => {
				if(from.path=='/pay'){
           next()
				}else{
					next(false)
				}
			}
		},
		{
			path: '/pay',
			component: pay,
			meta: { show: true },
			beforeEnter: (to, from, next) => {
				if(from.path=='/trade'){
           next()
				}else{
					next(false)
				}
			}
		},
		{
			path: '/trade',
			component: Trade,
			meta: { show: true },
			beforeEnter: (to, from, next) => {
				if(from.path=='/shopcart'){
           next()
				}else{
					next(false)
				}
			}
		},
		{
			path: '/shopcart',
			component: ShopCart,
			meta: { show: true }
		},
		{
			path: '/AddCartSuccess',
			component: AddCartSuccess,
			meta: { show: true }
		},
		{
			path: '/detail/:hehe?',
			component: Detail,
			meta: { show: true }
		},
		{
			path: '/home',
			component: Home,
			meta: { show: true }
		},
		{
			path: '/login',
			component: Login,
			meta: { show: false }
		},
		{
			path: '/register',
			component: Register,
			meta: { show: false }
		},
		{
			path: '/search/:keyword?',
			name: 'search',
			component: Search,
			meta: { show: true }
		},
		{
			path: '/',
			redirect: '/home',
		}
	],
	scrollBehavior (to, from, savedPosition) {
		return { y: 0 }
	}
})
router.beforeEach(async (to,form,next)=>{
	 let token = store.state.login.token
	 let name = store.state.login.userinfo.name
	 if (token) {
		   if(to.path == '/login'){
            next('/home')
			 }else{
				  if (name) {
						next()
					}else{
					try {
						await	store.dispatch('getuserinfo')
						next()
					} catch (error) {
					 await	store.dispatch('getlogout')
						next('/login')
					}
					}
			 }
	 }else{
		 let topath = to.path
		 if(topath.indexOf('/pay')!=-1||topath.indexOf('/center')!=-1||topath.indexOf('/trade')!=-1){
			next('/login?redirect='+topath)
		 }else{
			next()
		 }
	 }
}

)
export default router