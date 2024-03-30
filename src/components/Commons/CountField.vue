<template>
    <div class="column" style="padding: 8px;">
        <div class="row" style="text-align: left; padding: 4px">
            <label
                    v-bind:for="input_id"
                    v-bind:class="not_valid ? 'error' : ''"
                    v-text="label_text"
            />
        </div>

        <div class="row">
            <div style="padding: 4px">
                <DefaultButton
                        ref="minus"
                        caption="-"
                />
            </div>

            <div style="padding: 4px">
                <input
                        ref="input_field"
                        type="text"

                        v-bind:id="input_id"
                        v-bind:placeholder="placeholder"
                        v-on:input="on_input(this.$refs.input_field);"
                />
            </div>

            <div style="padding: 4px">
                <DefaultButton
                        ref="plus"
                        caption="+"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from "@/components/Commons/DefaultButton.vue";

export default {
    name: "CountField",
    components: {DefaultButton},

    mounted() {
        this.$refs.minus.enable();
        this.$refs.plus.enable();
    },

    props: ["input_id", "input_style_width", "on_input", "label_text", "placeholder", "error_message"],

    methods: {
        getInputElement() {
            return this.$refs.input_field
        }
    }
}
</script>

<style scoped>

</style>