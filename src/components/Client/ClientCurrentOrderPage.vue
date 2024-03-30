<template>
    <div class="column" style="width: fit-content; padding: 8px; margin: 0 auto 0 auto">
        <div class="column">
            <div class="order_header">
                Заказ №123456789
            </div>

            <div class="order_header">
                Формируется
            </div>

            <div class="order_header">
                Дата и время: 00.00.0000 00:00
            </div>
        </div>

        <div class="product">
            <div class="column">
                <div class="row">
                    <img src="@/assets/logo.png" alt="Placeholder"/>
                    <div class="column">
                        <div class="row">
                            <div class="header">
                                Название Название Название Название Название Название Название
                            </div>
                            <div class="column">
                                <DefaultButton
                                    ref="remove_button"
                                    caption="X"
                                />
                            </div>
                        </div>
                        <div class="price">
                            123456789
                        </div>

                        <div style="width: fit-content">
                            <CountField
                                label_text="Количество"
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="header">
                        Описание
                    </div>
                </div>
                <div class="description">
                    Описание описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                    описание описание описание описание описание описание описание описание
                </div>
            </div>

        </div>

        <div class="order_header">
            Итого к оплате: <span>123456789</span>
        </div>



        <div class="row" style="justify-content: space-between; padding: 8px">
            <div class="column" style="width: 200px">
                <DefaultButton
                    ref="pay_button"
                    caption="Оплатить"
                    v-bind:on_click="payOnClick"
                />
            </div>

            <div class="column" style="width: 200px">
                <DefaultButton
                    ref="chat_button"
                    caption="Перейти в чат"
                    v-bind:on_click="chatOnClick"
                />
            </div>

            <div class="column" style="width: 200px">
                <DefaultButton
                    ref="cancel_button"
                    caption="Отменить"
                    v-bind:on_click="cancelOnClick"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from "@/components/Commons/DefaultButton.vue";
import CountField from "@/components/Commons/CountField.vue";

export default {
    name: "ClientCurrentOrderPage",
    components: {CountField, DefaultButton},

    mounted() {

        this.$refs.cancel_button.enable();
        this.$refs.chat_button.enable();
    },

    methods: {
        payOnClick() {
            this.$refs.cancel_button.disable();
        },

        chatOnClick() {
            this.$refs.chat_button.disable();
        },

        cancelOnClick() {
            this.$refs.cancel_button.disable();
        },
    }
}
</script>

<style scoped>

div.product {
    margin: 8px auto 8px auto;
    padding: 8px;
    border: #e0e0e0 2px solid;
    border-radius: 8px;
    width: 1000px;
}

div.order_header {
    padding: 8px;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
}

div.header {
    padding: 8px;
    font-size: 26px;
    font-weight: bold;
    text-align: left;
}

div.price {
    padding: 8px;
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    color: #ff007f;
}

span {
    padding: 8px;
    font-size: 32px;
    font-weight: bold;
    color: #ff007f;
}

div.description {
    padding: 8px;
    font-size: 20px;
    text-align: left;
}

</style>