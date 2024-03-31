<template>
    <div class="column">
        <div class="grid">
            <OrderGridPlate
                    order_id="123456789"
                    order_status="Формируется"
                    order_formed_date="00.00.0000 00:00"
                    order_done_date="00.00.0000 00:00"
                    order_sum="123456789"
                    v-on:click="goToOrderHistory(0)"
            />

            <OrderGridPlate
                    order_id="123456789"
                    order_status="Формируется"
                    order_formed_date="00.00.0000 00:00"
                    order_done_date="00.00.0000 00:00"
                    order_sum="123456789"
            />

            <OrderGridPlate
                    order_id="123456789"
                    order_status="Формируется"
                    order_formed_date="00.00.0000 00:00"
                    order_done_date="00.00.0000 00:00"
                    order_sum="123456789"
            />

            <OrderGridPlate
                    order_id="123456789"
                    order_status="Формируется"
                    order_formed_date="00.00.0000 00:00"
                    order_done_date="00.00.0000 00:00"
                    order_sum="123456789"
            />

            <OrderGridPlate
                    order_id="123456789"
                    order_status="Формируется"
                    order_formed_date="00.00.0000 00:00"
                    order_done_date="00.00.0000 00:00"
                    order_sum="123456789"
            />
        </div>
    </div>
</template>

<script>
import OrderGridPlate from "@/components/Commons/OrderGridPlate.vue";

export default {
    name: "ClientOrdersPage",
    components: {OrderGridPlate},

    methods: {
        goToOrderHistory(id) {
            console.log(id);

            this.$router.replace({ name: "ClientOrderHistory" });
        }
    }
}
</script>

<style scoped>

div.grid {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(5, 1fr);
    padding: 8px;
}

</style>