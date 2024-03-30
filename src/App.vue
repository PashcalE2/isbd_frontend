<template>
    <div class="column">
        <router-view />
    </div>
</template>

<script>

import * as Storage from "@/js/client_storage"

export default {
    name: 'App',

    mounted() {
        this.goToMainIfHasAccess();
        this.goToLoginIfNoAccess();
    },

    beforeRouteEnter(to, from, next) {
        console.log(to, from, next);
    },

    methods: {
        getAuthenticated() {
            return Storage.getAuthenticated();
        },

        goToMainIfHasAccess() {
            if (this.getAuthenticated()) {
                let page = this;
                page.$router.replace({ name: "ClientMain" });
            }
        },

        goToLoginIfNoAccess() {
            if (!this.getAuthenticated()) {
                let page = this;
                console.log("Ага, не авторизовался!");
                page.$router.replace({ name: "ClientLogin" });
            }
        }
    }
}
</script>

<style src="./styles/styles.css">
</style>
