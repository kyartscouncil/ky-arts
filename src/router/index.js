import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import GrantsPrograms from '../views/grants-programs/GrantsPrograms.vue';
import GrantsProgramsDetails from '../views/grants-programs/GrantsProgramsDetails.vue';
import Resources from '../views/Resources.vue';
import Events from '../views/Events.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/grants-programs',
		name: 'GrantsPrograms',
		component: GrantsPrograms,
	},
	{
		path: '/grants-programs/:id',
		name: 'GrantsProgramsDetails',
		component: GrantsProgramsDetails,
		props: true,
	},
	{
		path: '/resources',
		name: 'Resources',
		component: Resources,
	},
	{
		path: '/events',
		name: 'Events',
		component: Events,
	},
	// 404
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
