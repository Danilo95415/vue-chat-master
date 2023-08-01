<template>
  <div class="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
    <div>
      <h3 class="font-bold text-center">Simple Chat</h3>
      <p>Guru kesayangan : <span class="text-blue-700">Pak Herman</span></p>
    </div>
    <div class="flex gap-5 mt-5 items-center">
      <router-link
        class="border py-2 px-5 rounded-lg hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors"
        :to="{ name: 'user1' }"
        >User 1</router-link
      >
      <router-link
        class="border py-2 px-5 rounded-lg hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors"
        :to="{ name: 'user2' }"
        >User 2</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  title: "Home Page",
};
</script>
