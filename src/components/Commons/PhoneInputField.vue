<template>
    <div class="column" style="width: fit-content; height: fit-content; padding: 8px;">
        <div style="text-align: left; padding: 4px">
            <label
                v-bind:for="input_id"
                v-bind:class="not_valid ? 'error' : ''"
                v-text="label_text"
            />
        </div>

        <div>
            <input
                ref="input_field"
                type="text"

                v-bind:id="input_id"
                v-bind:placeholder="placeholder"
                v-on:input="validateValue(); on_input(this.$refs.input_field);"
            />
        </div>

        <div class="error">
            <span class="error">{{ error_message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmailInputField",

    data() {
        return {
            not_valid: false,
            phone_number_re: /^\+\d \(\d\d\d\) \d\d\d-\d\d-\d\d$/,

            simple_value: "",
            formatted_value: "",

        }
    },

    mounted() {
        this.$refs.input_field.style.width = this.input_style_width;
    },

    props: ["input_id", "input_style_width", "on_input", "label_text", "placeholder", "error_message"],

    methods: {
        getInputElement() {
            return this.$refs.input_field
        },

        validateValue() {

        }
    }
}
</script>

<style scoped>
</style>