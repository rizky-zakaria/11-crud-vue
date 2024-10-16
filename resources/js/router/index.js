import { createRouter, createWebHistory } from "vue-router";

import notFound from '../components/NotFound.vue';
import productIndex from '../components/products/Index.vue';

const routes = [
    {
        path: '/',
        name: 'products.index',
        component: productIndex
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router