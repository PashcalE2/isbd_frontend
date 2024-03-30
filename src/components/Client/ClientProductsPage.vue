<template>
    <div class="column">
        <div class="centered_column">
            <ListInputField
                ref="product_name"

                input_id="product_name_input"
                input_style_width="600px"
                datalist_id="product_name_datalist"
                label_text=""
                placeholder="Начните вводить название продукции"

                v-bind:on_input="onProductInput"
                v-bind:datalist_options="this.$props.product_names_options"
                v-bind:error_message="active_error_messages.product_name"
            />
        </div>
        <div class="grid">
            <ProductGridPlate
                product_price="12345"
                product_name="Бумага для черчения"
            />
        </div>
    </div>
</template>

<script>
import ListInputField from "@/components/Commons/ListInputField.vue";
import ProductGridPlate from "@/components/Commons/ProductGridPlate.vue";

export default {
    name: "ClientProductsPage",
    components: {ProductGridPlate, ListInputField},

    data() {
        return {
            active_error_messages: {
                product_name: ""
            },

            error_messages: {
                product_name: {
                    NoSuchProduct: "Такого продукта нет",
                    WrongSymbols: "Только буквы русского и латинского алфавитов, цифры и \""
                },
            },
        };
    },

    props: ["product_names_options"],

    methods: {
        onProductInput(element) {
            element;
        },
    }
}
</script>

<style scoped>

img {
    width: 180px;
    height: 180px;
    margin: auto;
    background-color: #f0f0f0;
}

div.grid {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(6, 1fr);
    padding: 8px;
}


</style>