<template>
    <div class="grid_plate">
        <img src="../../assets/logo.png" alt="Placeholder"/>
        <div class="price">
            {{ product_price + " ₽"}}
        </div>
        <div class="name">
            {{ product_name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductGridPlate",

    props: ["product_name", "product_price"]
}
</script>

<style scoped>

div.grid_plate, .selected_grid_plate {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 320px;
    margin: 10px auto 0 auto;
    background-color: #f0f0f0;

    border-radius: 4px;
    box-sizing: border-box;
}

div.selected_grid_plate {
    border: #00ff7f 4px solid;
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
    border: #007fff 4px solid;
}

div.price {
    font-size: 22px;
    font-weight: bold;
    color: #ff007f;
}

div.name {
    font-size: 16px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 2;
    overflow: hidden;
}

</style>