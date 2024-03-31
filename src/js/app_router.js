import { createWebHistory, createRouter } from "vue-router"
import ClientLoginPage from "@/components/Client/ClientLoginPage.vue";
import ClientMainPage from "@/components/Client/ClientMainPage.vue";
import ClientRegisterPage from "@/components/Client/ClientRegisterPage.vue";
import ClientProductsPage from "@/components/Client/ClientProductsPage.vue";
import ClientOrdersPage from "@/components/Client/ClientOrdersPage.vue";
import ClientProfilePage from "@/components/Client/ClientProfilePage.vue";
import ClientCurrentOrderPage from "@/components/Client/ClientCurrentOrderPage.vue";
import ClientChatPage from "@/components/Client/ClientCurrentChatPage.vue";
import ClientChatHistoryPage from "@/components/Client/ClientChatHistoryPage.vue";
import ClientOrderHistoryPage from "@/components/Client/ClientOrderHistoryPage.vue";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: ClientLoginPage,
    },

    {
        path: "/client_login",
        name: "ClientLogin",
        component: ClientLoginPage,
    },

    {
        path: "/client_register",
        name: "ClientRegister",
        component: ClientRegisterPage,
    },

    {
        path: "/client_app",
        name: "ClientMain",
        component: ClientMainPage,

        children: [
            {
                path: "/products",
                name: "ClientProducts",
                component: ClientProductsPage,
            },

            {
                path: "/orders",
                name: "ClientOrders",
                component: ClientOrdersPage,
            },

            {
                path: "/current_order",
                name: "ClientCurrentOrder",
                component: ClientCurrentOrderPage,
            },

            {
                path: "/order_history",
                name: "ClientOrderHistory",
                component: ClientOrderHistoryPage,
            },

            {
                path: "/chat",
                name: "ClientChat",
                component: ClientChatPage,
            },

            {
                path: "/chat_history",
                name: "ClientChatHistory",
                component: ClientChatHistoryPage,
            },

            {
                path: "/profile",
                name: "ClientProfile",
                component: ClientProfilePage,
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;