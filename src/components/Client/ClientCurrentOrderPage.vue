<template>
    <div class="column" style="width: fit-content; padding: 8px; margin: 0 auto 0 auto">
        <div class="column">
            <div class="order_header">
                Заказ №123456789
            </div>

            <div class="order_header">
                <span class="status_progress">Формируется</span>
            </div>

            <div class="order_header">
                Дата и время: 00.00.0000 00:00
            </div>
        </div>

        <ClientProductInOrder
            product_name="Бумага для черчения"
            product_price="123456"
            product_description="Отличная бумага"
        />

        <div class="order_header">
            Итого к оплате: <span class="sum">123456789</span>
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
import ClientProductInOrder from "@/components/Client/ClientProductInOrder.vue";

export default {
    name: "ClientCurrentOrderPage",
    components: {ClientProductInOrder, DefaultButton},

    mounted() {

        this.$refs.cancel_button.enable();
        this.$refs.chat_button.enable();
    },

    methods: {
        payOnClick() {
            this.$refs.cancel_button.disable();
        },

        chatOnClick() {
            let page = this;
            page.$refs.chat_button.disable();
            page.$router.replace({ name: "ClientChat"});
        },

        cancelOnClick() {
            this.$refs.cancel_button.disable();
        },
    }
}
</script>

<style scoped>

div.order_header {
    padding: 8px;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
}

span.status_progress {
    font-size: 32px;
    font-weight: bold;
    color: #ff7f00;
}

span.sum {
    padding: 8px;
    font-size: 32px;
    font-weight: bold;
    color: #ff007f;
}

</style>