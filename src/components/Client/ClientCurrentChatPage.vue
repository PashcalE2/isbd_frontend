<template>
    <div class="column" style="width: 800px; margin: 0 auto 0 auto">
        <div class="row" style="justify-content: space-between; border-bottom: #e0e0e0 4px solid">
            <div class="column">
                <div class="admin_name">
                    {{ admin_name }}
                </div>
                <div class="admin_contacts">
                    {{ admin_phone_number }}
                </div>
                <div class="admin_contacts">
                    {{ admin_email }}
                </div>
            </div>
            <div class="column" style="width: 200px; padding: 8px">
                <DefaultButton
                        ref="back_button"
                        caption="Вернуться в корзину"
                        v-bind:on_click="backOnClick"
                />
            </div>
        </div>

        <div style="max-height: 500px; overflow-y: scroll;">
            <ChatMessage
                v-for="i in [1,2,3,4,5,6,7,8,9,10]"
                v-bind:key="i"
                content="This 15 a digital copy of a book that was preserved for generations on library shelves before it was carefully scanned by Google as part of a project
to make the world's books discoverable online. "
                posted="00.00.0000 00:00"
                from_current_user=""
            />
        </div>

        <div class="row" id="text_window">
            <textarea ref="chat_input" id="chat_input" placeholder="Введите сообщение"/>

            <div id="chat_send_button">
                <DefaultButton
                    ref="send_message"
                    caption="Отправить"
                    v-bind:on_click="chatSendOnClick"
                />
            </div>

        </div>
    </div>
</template>

<script>
import DefaultButton from "@/components/Commons/DefaultButton.vue";
import ChatMessage from "@/components/Commons/ChatMessage.vue";

export default {
    name: "ClientCurrentChatPage",
    components: {ChatMessage, DefaultButton},

    data() {
        return {
            admin_name: "Шипулин Павел Андреевич",
            admin_phone_number: "+7 (777) 777-77-77",
            admin_email: "example@example.ru",
            chat_history: [
                {
                    from_user: false,
                    content: "Sampletext",
                    posted: "00.00.0000 00:00"
                }
            ]
        }
    },

    mounted() {
        // get chat and admin

        this.$refs.back_button.enable();
        this.$refs.send_message.enable();
    },

    methods: {
        backOnClick() {
            this.$refs.back_button.disable();
            this.$router.replace({ name: "ClientCurrentOrder"});
        },

        chatSendOnClick() {
            this.$refs.send_message.disable();
            this.$refs.chat_input.value = "";
        }
    }
}
</script>

<style scoped>

div.admin_name {
    padding: 8px;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
}

div.admin_contacts {
    padding: 8px;
    text-align: left;
    font-size: 26px;
    font-weight: bold;
}

textarea#chat_input {
    font-family: Arial, serif;
    font-size: 20px;

    width: 600px;
    height: 120px;
    padding: 4px;
    box-sizing: border-box;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    background-color: #f0f0f0;
    resize: none;
}

div#text_window {
    justify-content: space-between;
    padding: 8px;

    outline-color: #007fff;
    border-top: #007fff 4px solid;
}

div.input_disabled {
    background-color: #404040;
}

div#chat_send_button {
    width: 160px;
    margin: auto
}

</style>