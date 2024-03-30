<template>
    <div class="grid_plate">
        <div class="name">
            {{ "Заказ №" + order_id }}
        </div>
        <div class="description">
            Состояние: <span class="status_progress">{{ order_status }}</span>
        </div>
        <div class="description">
            {{ "Дата принятия: " + order_formed_date }}
        </div>
        <div class="description">
            {{ "Дата завершения: " + order_done_date }}
        </div>
        <div class="description">
            Сумма: <span class="price">{{ order_sum + " ₽"}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductGridPlate",

    props: ["order_id", "order_status", "order_formed_date", "order_done_date", "order_sum"]
}
</script>

<style scoped>

div.description {
    font-weight: bold;
}

div.grid_plate, .selected_grid_plate {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    margin: 10px auto 0 auto;
    background-color: #f0f0f0;

    border: #e0e0e0 4px solid;
    border-radius: 4px;
    box-sizing: border-box;
}

div.selected_grid_plate {
    border-color: #00ff7f;
}

div.selected_grid_plate > div {
    text-align: left;
    padding: 8px;
}

div.grid_plate > div {
    text-align: left;
    padding: 8px;
}

div.grid_plate:hover, div.selected_grid_plate:hover {
    border-color: #007fff;
}

span.price {
    font-size: 22px;
    font-weight: bold;
    color: #ff007f;
}

div.name {
    font-size: 26px;
    font-weight: bold;
}

span.status_progress {
    color: #ff7f00;
}

</style>