<template>
  <div>
    <form
      @submit.prevent="sendMessage"
      method="post"
      class="w-full flex justify-center mt-10 fixed"
      action=""
    >
      <input
        class="border w-1/2 py-2 px-5 rounded-l-lg focus:border-green-700 transition-colors"
        type="text"
        name="chat"
        v-model="userInput.message"
      />
      <button
        class="py-2 px-5 border border-green-700 bg-green-700 text-white rounded-r-lg"
      >
        Send
      </button>
    </form>
    <div v-for="chat in chats" :key="chat.id">
      <div
        class="flex items-center my-2 gap-2"
        v-if="chat.userName === 'user1'"
      >
        <span
          class="border py-2 px-3 bg-blue-600 rounded-full text-white border-blue-600"
          >User 1</span
        >
        <p>{{ chat.message }}</p>
      </div>
      <div
        class="flex items-center my-2 gap-2"
        v-if="chat.userName === 'user2'"
      >
        <span
          class="border py-2 px-3 bg-slate-600 rounded-full text-white border-slate-600"
          >User 2</span
        >
        <p>{{ chat.message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  title: "Chat Page 1",
  data() {
    return {
      userInput: {
        message: "",
        userName: "user1",
      },
      chats: [],
    };
  },
  methods: {
    sendMessage() {
      axios
        .post("http://localhost:3000/chats", this.userInput)
        .then((res) => {
          this.getData();
          this.userInput.message = "";
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getData() {
      axios.get("http://localhost:3000/chats").then(async (res) => {
        this.chats = await res.data;
      });
    },
  },
  created() {
    this.getData();
    setInterval(() => this.getData(), 1000);
  },
};
</script>
