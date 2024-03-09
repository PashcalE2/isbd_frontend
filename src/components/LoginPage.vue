<template>
  <div class="column" id="login_page">
    <h1>Login</h1>

    <label for="login_input" v-bind:class="form_errors.login ? 'error' : ''">Имя пользователя</label>
    <input type="text" name="login" id="login_input" ref="login" placeholder="Username" v-on:input="onLoginInput(this.$refs.login)"/>

    <label for="password_input" v-bind:class="form_errors.password ? 'error' : ''">Пароль</label>
    <input type="password" name="password" id="password_input" ref="password" placeholder="Password" v-on:input="onPasswordInput(this.$refs.password)"/>

    <button type="button" v-on:click="login()">Login</button>
    <button type="button" v-on:click="register()">Register</button>

    <p id="errors" ref="errors" v-bind:key="error_msg">{{ error_msg }}</p>
  </div>
</template>

<script>
import axios from "axios"
import {MY_APIS} from "@/js/my_apis"
import * as Storage from "@/js/storage"

export default {
  name: "LoginPage",
  data() {
    return {
      input: {
        login: "",
        password: ""
      },

      form_errors: {
        login: false,
        password: false
      },

      error_msg: "",
      
      login_re: /^[a-zA-Z]+[a-zA-Z0-9_]*$/,
      password_re: /^[a-zA-Z0-9_]+$/
    }
  },

  methods: {

    isWrongString(str, re) {
      return re.exec(str) == null
    },

    onLoginInput(element) {
      this.input.login = element.value;
      this.form_errors.login = this.isWrongString(element.value, this.login_re);
    },

    onPasswordInput(element) {
      this.input.password = element.value;
      this.form_errors.password = this.isWrongString(element.value, this.password_re);
    },

    showFormError() {
      this.error_msg =
          "Проверьте правописание логина и пароля.\n" +
          "Логин обязан начинаться с латинской буквы, может содержать числа и знак '_'.\n" +
          "Пароль может содержать латинские буквы, цифры и знак '_'.";
    },
    
    login() {
      if (this.form_errors.login || this.form_errors.password) {
        this.showFormError();

        return false;
      }

      let page = this;
      let form_input = this.input;

      axios.post(MY_APIS.LOGIN_URL, {
        login: form_input.login,
        password: form_input.password
      })
          .then(function (response) {
            console.log(response);

            Storage.setUser(form_input.login, form_input.password);
            Storage.setAuthenticated(true);

            page.$router.push({ name: "Main"});
          })
          .catch(function (exception) {
            console.log(exception);

            page.error_msg = exception.response.data;
          })
    },

    register() {
      if (this.form_errors.login || this.form_errors.password) {
        this.showFormError();

        return false;
      }

      let page = this;

      axios.post(MY_APIS.REGISTER_URL, {
        login: page.input.login,
        password: page.input.password
      })
          .then(function (response) {
            console.log(response);

            Storage.setUser(page.input.login, page.input.password);
            Storage.setAuthenticated(true);
            page.$router.push({ name: "Main"});
          })
          .catch(function (exception) {
            console.log(exception);

            page.error_msg = exception.response.data;
          })
    }
  }
}
</script>

<style scoped>
</style>