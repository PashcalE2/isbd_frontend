<template>
    <div class="centered_column" style="width: 800px; margin: 0 auto 0 auto">
        <div style="height: 100px"/>

        <div class="column" style="width: fit-content">
            <h1>Изменение профиля</h1>

            <div class="column" style="margin: 0 auto">

                <EmailInputField
                    ref="email"

                    input_id="email_input"
                    input_style_width="400px"
                    label_text="Изменение адреса почты"
                />

                <PhoneInputField
                    ref="phone_number"

                    input_id="phone_number_input"
                    input_style_width="400px"
                    label_text="Изменение номера телефона"
                />

                <div class="row" style="padding: 8px; justify-content: space-between">
                    <DefaultButton
                        ref="change_button"
                        caption="Принять изменение"
                        v-bind:on_click="acceptChanges"
                    />

                    <DefaultButton
                        ref="cancel_button"
                        caption="Отменить изменение"
                        v-bind:on_click="cancelChanges"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from "@/components/Commons/DefaultButton.vue";
import EmailInputField from "@/components/Commons/EmailInputField.vue";
import PhoneInputField from "@/components/Commons/PhoneInputField.vue";

export default {
    name: "ClientProfilePage",
    components: {PhoneInputField, EmailInputField, DefaultButton},

    methods: {
        acceptChanges() {

        },

        cancelChanges() {

        }
    }
}
</script>

<style scoped>

</style>