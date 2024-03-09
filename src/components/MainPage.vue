<template>
  <div class="column" id="main-page">
    <div id="logout">
      <button id="logout-button" v-on:click="logout()">Logout</button>
    </div>

    <div>
      <br/>
      <GraphicComponent v-bind:points="points" v-bind:r="form_point.r" v-bind:parent-plot-on-click="plotOnClick"/>
    </div>

    <form id="point_form" v-on:submit="submitPointForm">
      <div class="column">
        <label for="x_input" v-bind:class="this.form_errors.x ? 'error' : ''">Выберите X</label>
        <table>
          <tr>
            <td>
              <label for="x_input_1">-4 </label>
              <input type="radio" name="x_input" id="x_input_1" ref="x_input_1" value="-4" v-on:click="changeX(this.$refs.x_input_1)"/>
            </td>
            <td>
              <label for="x_input_2">-3 </label>
              <input type="radio" name="x_input" id="x_input_2" ref="x_input_2" value="-3" v-on:click="changeX(this.$refs.x_input_2)"/>
            </td>
            <td>
              <label for="x_input_3">-2 </label>
              <input type="radio" name="x_input" id="x_input_3" ref="x_input_3" value="-2" v-on:click="changeX(this.$refs.x_input_3)"/>
            </td>
            <td>
              <label for="x_input_4">-1 </label>
              <input type="radio" name="x_input" id="x_input_4" ref="x_input_4" value="-1" v-on:click="changeX(this.$refs.x_input_4)"/>
            </td>
            <td>
              <label for="x_input_5">0 </label>
              <input type="radio" name="x_input" id="x_input_5" ref="x_input_5" value="0" v-on:click="changeX(this.$refs.x_input_5)" checked="checked"/>
            </td>
            <td>
              <label for="x_input_6">1 </label>
              <input type="radio" name="x_input" id="x_input_6" ref="x_input_6" value="1" v-on:click="changeX(this.$refs.x_input_6)"/>
            </td>
            <td>
              <label for="x_input_7">2 </label>
              <input type="radio" name="x_input" id="x_input_7" ref="x_input_7" value="2" v-on:click="changeX(this.$refs.x_input_7)"/>
            </td>
            <td>
              <label for="x_input_8">3 </label>
              <input type="radio" name="x_input" id="x_input_8" ref="x_input_8" value="3" v-on:click="changeX(this.$refs.x_input_8)"/>
            </td>
            <td>
              <label for="x_input_9">4 </label>
              <input type="radio" name="x_input" id="x_input_9" ref="x_input_9" value="4" v-on:click="changeX(this.$refs.x_input_9)"/>
            </td>
          </tr>
        </table>

        <label for="y_input" v-bind:class="this.form_errors.y ? 'error' : ''">Введите Y</label>
        <input type="text" name="y_input" id="y_input" ref="y_input" placeholder="[-5; 3]" maxlength="20" v-on:input="changeY(this.$refs.y_input)">

        <label for="r_input" v-bind:class="this.form_errors.r ? 'error' : ''">Выберите R</label>
        <table>
          <tr>
            <td>
              <label for="r_input_1">-4 </label>
              <input type="radio" name="r_input" id="r_input_1" ref="r_input_1" value="-4" v-on:click="changeR(this.$refs.r_input_1)"/>
            </td>
            <td>
              <label for="r_input_2">-3 </label>
              <input type="radio" name="r_input" id="r_input_2" ref="r_input_2" value="-3" v-on:click="changeR(this.$refs.r_input_2)"/>
            </td>
            <td>
              <label for="r_input_3">-2 </label>
              <input type="radio" name="r_input" id="r_input_3" ref="r_input_3" value="-2" v-on:click="changeR(this.$refs.r_input_3)"/>
            </td>
            <td>
              <label for="r_input_4">-1 </label>
              <input type="radio" name="r_input" id="r_input_4" ref="r_input_4" value="-1" v-on:click="changeR(this.$refs.r_input_4)"/>
            </td>
            <td>
              <label for="r_input_5">0 </label>
              <input type="radio" name="r_input" id="r_input_5" ref="r_input_5" value="0" v-on:click="changeR(this.$refs.r_input_5)"/>
            </td>
            <td>
              <label for="r_input_6">1 </label>
              <input type="radio" name="r_input" id="r_input_6" ref="r_input_6" value="1" v-on:click="changeR(this.$refs.r_input_6)" checked="checked"/>
            </td>
            <td>
              <label for="r_input_7">2 </label>
              <input type="radio" name="r_input" id="r_input_7" ref="r_input_7" value="2" v-on:click="changeR(this.$refs.r_input_7)"/>
            </td>
            <td>
              <label for="r_input_8">3 </label>
              <input type="radio" name="r_input" id="r_input_8" ref="r_input_8" value="3" v-on:click="changeR(this.$refs.r_input_8)"/>
            </td>
            <td>
              <label for="r_input_9">4 </label>
              <input type="radio" name="r_input" id="r_input_9" ref="r_input_9" value="4" v-on:click="changeR(this.$refs.r_input_9)"/>
            </td>
          </tr>
        </table>

        <input type="submit">


      </div>
    </form>

    <input type="button" v-on:click="clearPoints" value="Очистить таблицу">

    <table id="data_table">
      <thead>
      <tr>
        <td>Идентификатор</td>
        <td>Значение X</td>
        <td>Значение Y</td>
        <td>Попадание</td>
        <td>Отправлено в</td>
      </tr>
      </thead>

      <tbody>
       <tr v-for="(point, i) in points" :key="i">
         <td>{{ point.id }}</td>
         <td>{{ point.x }}</td>
         <td>{{ point.y }}</td>
         <td>{{ point.hit }}</td>
         <td>{{ point.dateTime }}</td>
       </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {MY_APIS} from "@/js/my_apis";
import * as Storage from "@/js/storage";
import GraphicComponent from "@/components/GraphicComponent";

export default {
  name: "MainPage",
  components: {GraphicComponent},
  data() {
    return {
      this_user: {
        login: Storage.getUserLogin(),
        password: Storage.getUserPassword()
      },

      points: [],

      point: {
        x: undefined,
        y: undefined,
        r: 1
      },

      form_point: {
        x: 0,
        y: undefined,
        r: 1
      },

      form_errors: {
        x: false,
        y: true,
        r: false
      },

      num_re: /^-?\d+(?:[.,]\d+)?$/m
    }
  },

  mounted() {
    // get points from the db

    let user = this.this_user;
    let page = this;

    axios.request({
      url: MY_APIS.GET_POINTS_URL(1),
      method: "get",
      params: {
        login: user.login
      }
    })
        .then(function (response) {
          //console.log(response.data);
          page.points = response.data;
        })
        .catch(function (exception) {
          console.log(exception);
        })
  },

  methods: {
    clearPoints() {
      let user = this.this_user;
      let page = this;

      axios.request({
        url: MY_APIS.POINTS_URL,
        method: "delete",
        params: {
          login: user.login
        }
      })
          .then(function (response) {
            //console.log(response.data);
            page.points = response.data;
          })
          .catch(function (exception) {
            console.log(exception);
          })
    },

    getPoints() {
      let user = this.this_user;
      let page = this;

      axios.request({
        url: MY_APIS.GET_POINTS_URL(this.point.r),
        method: "get",
        params: {
          login: user.login
        }
      })
          .then(function (response) {
            //console.log(response.data);
            page.points = response.data;
          })
          .catch(function (exception) {
            console.log(exception);
          })
    },

    logout() {
      Storage.setAuthenticated(false);
      this.$router.push({ name: "Login"});
    },

    isWrongNumber(str_num) {
      return this.num_re.exec(str_num) == null
    },

    changeX(element) {
      this.form_errors.x = false;
      this.form_point.x = parseFloat(element.value);
    },

    changeY(element) {
      let str = element.value.replace(",", ".");
      let num = parseFloat(str);

      if (this.isWrongNumber(str) || (num < -5) || (num > 3)) {
        this.form_errors.y = true;
        this.form_point.y = undefined;

        //console.log("Y is a bad number:", str);
      } else {
        this.form_errors.y = false;
        this.form_point.y = num;

        //console.log("Y is a number:", str, "==", this.point.y);
      }
    },

    changeR(element) {
      let num = parseFloat(element.value);

      if (num <= 0) {
        this.form_errors.r = true;
      } else {
        this.form_errors.r = false;
        this.form_point.r = num;
        this.point.r = num;

        this.getPoints();
      }
    },

    formHasErrors() {
      return this.form_errors.x || this.form_errors.y || this.form_errors.r;
    },

    sendNewPoint() {
      console.log("Sending point =", "x:", this.point.x, "y:", this.point.y, "r:", this.point.r);

      if (this.formHasErrors()) {
        console.log("Point has got errors");

        return false;
      }

      let user = this.this_user;
      let page = this;

      axios.request({
        url: MY_APIS.POINTS_URL,
        method: "post",
        data: {
          x: this.point.x,
          y: this.point.y,
          r: this.point.r
        },
        params: {
          login: user.login
        }
      })
          .then(function (response) {
            console.log(response);

            page.getPoints();
          })
          .catch(function (exception) {
            console.log(exception)
          })
    },

    submitPointForm() {
      event.preventDefault();

      this.point.x = this.form_point.x;
      this.point.y = this.form_point.y;
      this.point.r = this.form_point.r;

      this.sendNewPoint();
    },

    plotOnClick(x, y) {
      //console.log("Click on graphic: ", x, y);

      this.form_errors.x = false;
      this.form_errors.y = false;

      this.point.x = x;

      this.point.y = y;
      this.$refs.y_input.value = y.toFixed(3).toString();
      this.form_point.y = y;

      this.point.r = this.form_point.r;

      this.sendNewPoint();
    },
  }
}
</script>

<style scoped>
form#point_form {
  width: 500px;
  margin: auto;

  background-color: #e0e0e0;
  border: black solid 1px;
}

table#data_table {
  width: 700px;
}
</style>