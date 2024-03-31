<template>
    <ClientWelcomeHeader/>

    <div class="centered_column">
        <div style="height: 100px"/>

        <div class="column" style="width: fit-content">
            <h1>Вход в систему</h1>

            <div class="column" style="margin: 0 auto">
                <ListInputField
                    ref="organization"

                    input_id="organization_input"
                    input_style_width="400px"
                    datalist_id="organization_datalist"
                    label_text="Организация"
                    placeholder="Начните вводить название организации"

                    v-bind:on_input="onLoginInput"
                    v-bind:datalist_options="organizations_options"
                    v-bind:error_message="active_error_messages.login"
                />

                <PasswordInputField
                    ref="password"

                    input_id="password_input"
                    input_style_width="400px"
                    label_text="Пароль"
                    placeholder="Password"
                    v-bind:on_input="onPasswordInput"
                    v-bind:error_message="active_error_messages.password"
                />

                <div class="column" style="padding: 8px;">
                    <DefaultButton
                        ref="login_button"
                        caption="Войти"
                        v-bind:on_click="login"
                    />

                    <span style="margin: 4px auto 4px auto">или</span>

                    <DefaultButton
                        ref="register_button"
                        caption="Зарегистрироваться"
                        v-bind:on_click="register"
                    />
                </div>
            </div>

            <p style="word-break: normal; padding: 8px; text-align: left;">
                Забыли пароль? Сообщите нам! <br>
                Контактная информация наших служб поддержки: <span style="color: #007fff">example@example.ru</span>
            </p>
        </div>
    </div>
</template>

<script>

import * as Storage from "@/js/client_storage"
import ListInputField from "@/components/Commons/ListInputField.vue";
import DefaultButton from "@/components/Commons/DefaultButton.vue";
import PasswordInputField from "@/components/Commons/PasswordInputField.vue";
import ClientWelcomeHeader from "@/components/Client/ClientWelcomeHeader.vue";
import axios from "axios";
import {MY_APIS} from "@/js/my_apis";

export default {
    name: "ClientLoginPage",
    components: {ClientWelcomeHeader, PasswordInputField, DefaultButton, ListInputField},
    data() {
        return {
            input: {
                login: "",
                password: ""
            },

            organizations_options: [
                "Mozilla",
                "Chrome",
                "Firefox"
            ],

            form_errors: {
                login: false,
                password: false
            },

            active_error_messages: {
                login: "",
                password: ""
            },

            error_messages: {
                login: {
                    NoSuchOrganization: "Такой организации нет.",
                    WrongSymbols: "Только буквы русского и латинского алфавитов, цифры и \""
                },

                password: {
                    WrongPassword: "Неверный пароль.",
                    WrongSymbols: "Только буквы латинского алфавита или цифры."
                }
            },

            login_re: /^[а-яА-Яa-zA-Z0-9 "]+$/,
            password_re: /^[a-zA-Z0-9]+$/
        }
    },

    mounted() {
        // get options

        console.log("Получаем опции для формы");

        axios.get(MY_APIS.CLIENT.GET_OPTIONS_URL)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (exception) {
                console.log(exception);
            })

        this.$refs.register_button.enable();
    },

    methods: {
        isWrongString(str, re) {
            return re.exec(str) == null
        },

        canLogin() {
            return (this.input.login.length !== 0) && (!this.form_errors.login) && (this.input.password.length !== 0) && (!this.form_errors.password);
        },

        onLoginInput(element) {
            console.log(element.value);
            this.input.login = element.value;
            let is_not_empty = element.value.length !== 0;

            if (is_not_empty && this.isWrongString(element.value, this.login_re)) {
                this.form_errors.login = true;
                this.active_error_messages.login = this.error_messages.login.WrongSymbols;
            }
            else {
                this.form_errors.login = false;
                this.active_error_messages.login = "";
            }

            if (!this.form_errors.login) {
                if (is_not_empty && !(this.organizations_options.includes(element.value))) {
                    this.form_errors.login = true;
                    this.active_error_messages.login = this.error_messages.login.NoSuchOrganization;
                } else {
                    this.form_errors.login = false;
                    this.active_error_messages.login = "";
                }
            }

            if (this.canLogin()) {
                this.$refs.login_button.enable();
            }
            else {
                this.$refs.login_button.disable();
            }
        },

        onPasswordInput(element) {
            this.input.password = element.value;

            if (element.value.length !== 0 && this.isWrongString(element.value, this.password_re)) {
                this.form_errors.password = true;
                this.active_error_messages.password = this.error_messages.password.WrongSymbols;
            }
            else {
                this.form_errors.password = false;
                this.active_error_messages.password = "";
            }

            if (this.canLogin()) {
                this.$refs.login_button.enable();
            }
            else {
                this.$refs.login_button.disable();
            }
        },

        login() {
            if (this.form_errors.login || this.form_errors.password) {
                return false;
            }

            let page = this;

            this.$refs.login_button.disable();
            Storage.setClient(0, page.input.login, "", "", page.input.password);
            Storage.setAuthenticated(true);
            page.$router.push({ name: "ClientMain"});

            axios.post(MY_APIS.CLIENT.LOGIN_URL, {
                login: this.input.login,
                password: this.input.password
            })
                .then(function (response) {
                    console.log(response);

                    //Storage.setClient(0, page.input.login, "", "", page.input.password);
                    //Storage.setAuthenticated(true);

                    //page.$router.push({ name: "ClientMain"});
                })
                .catch(function (exception) {
                    console.log(exception);

                    page.error_msg = exception.response.data;
                })
        },

        register() {
            if (this.form_errors.login || this.form_errors.password) {
                return false;
            }

            let page = this;

            this.$refs.register_button.disable();
            page.$router.push({ name: "ClientRegister"});
        }
    }
}
</script>

<style scoped>
</style>