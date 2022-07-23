import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/transactions',
			component: () => import('../views/Transactions.vue')
		},
		{
			path: '/contacts',
			component: () => import('../views/Contacts.vue')
		},
		{
			path: '/features',
			component: () => import('../views/Features.vue')
		},
		{
			path: '/library',
			component: () => import('../views/Library.vue')
		},
		{
			path: '/settings',
			component: () => import('../views/Settings.vue')
		}
	],
})

export default router