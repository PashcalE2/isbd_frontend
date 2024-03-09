<template>
  <div class="column">
    <ShapkaComponent />
    <router-view />
  </div>
</template>

<script>

import * as Storage from "@/js/storage"
import ShapkaComponent from "@/components/ShapkaComponent";

export default {
  name: 'App',

  components: {
    ShapkaComponent
  },

  mounted() {
    if (this.getAuthenticated()) {
      this.$router.replace({ name: "Main" });
    } else {
      console.log("Ага, не авторизовался!");

      this.$router.replace({ name: "Login" });
    }
  },

  methods: {
    getAuthenticated() {
      return Storage.getAuthenticated();
    }
  }
}
</script>

<style src="./styles/styles.css">
</style>
