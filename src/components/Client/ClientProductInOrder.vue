<template>
    <div class="product">
        <div class="column">
            <div class="row">
                <img src="@/assets/logo.png" alt="Placeholder"/>
                <div class="column">
                    <div class="row" style="width: 800px; justify-content: space-between;">
                        <div class="header">
                            {{ product_name }}
                        </div>
                        <div class="column">
                            <DefaultButton
                                    ref="remove_button"
                                    caption="X"
                            />
                        </div>
                    </div>

                    <span class="price">{{product_price}} * 1 = 123456789</span>

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
                {{ product_description }}
            </div>
        </div>

    </div>

</template>

<script>
import CountField from "@/components/Commons/CountField.vue";
import DefaultButton from "@/components/Commons/DefaultButton.vue";

export default {
    name: "ClientProductInOrder",
    components: {DefaultButton, CountField},

    props: ["product_name", "product_price", "product_description"],
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

div.header {
    padding: 8px;
    font-size: 26px;
    font-weight: bold;
    text-align: left;
}

span.price {
    padding: 8px;
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    color: #ff007f;
}

div.description {
    padding: 8px;
    font-size: 20px;
    text-align: left;
}

</style>