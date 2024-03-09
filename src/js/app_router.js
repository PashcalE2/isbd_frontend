import { createWebHistory, createRouter } from "vue-router"
import LoginPage from "@/components/LoginPage";
import MainPage from "@/components/MainPage";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: LoginPage,
    },

    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },

    {
        path: "/app",
        name: "Main",
        component: MainPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router