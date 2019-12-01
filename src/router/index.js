import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import store from '@/store'
Vue.use(Router)


let routes = [
	{
	path: '/',
	name: 'home',
	component: Home,
	children:[],
	redirect:'/vuePage'
	}
];

store.state.systemMenuList.forEach( el => {
	routes[0].children.push({
		path: el.page,
		name: el.page,
		component: ()=>import(`@/pages/${el.page}/${el.page}.vue`)
	});
});

console.log('route index', routes);



export default new Router({
	routes: routes
});
