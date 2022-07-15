import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: import("../src/views/home.vue")
    },
    {
        path: "/home",
        component: import("../src/views/home.vue")
    },
    {
        path: "/contact",
        component: import("../src/views/contact.vue")
    },
    {
        path: "/about",
        component: import("../src/views/about.vue")
    },
    {
        path: "/service",
        component: import("../src/views/service.vue")
    },
    {
        path: "/feature",
        component: import("../src/views/feature.vue")
    },
    {
        path: '/:pathMatch(.*)*', 
        component: import("../src/views/404.vue")
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;