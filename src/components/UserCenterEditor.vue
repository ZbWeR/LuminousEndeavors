<template>
  <div
    class="absolute z-40 flex items-center justify-center w-screen h-screen overflow-hidden bg-black/50"
  >
    <div class="w-1/3 p-3 bg-white rounded-md">
      <h1 class="text-lg font-bold tracking-widest text-sky-400">
        修改个人信息
      </h1>
      <div class="flex items-center w-full gap-2 mt-2">
        <img
          class="block w-24 h-24 rounded-full"
          :src="baseInfo?.avatarUrl || '/defaultAvatar.png'"
          alt=""
        />
        <div class="">
          <label for="nickName"
            >用户昵称:
            <input
              id="nickName"
              type="text"
              :value="baseInfo?.nickName"
              size="10"
          /></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { baseInfo } = defineProps(["baseInfo"]);
</script>