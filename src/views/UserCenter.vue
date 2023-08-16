<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen bg-zinc-100"
  >
    <!-- 标题栏 -->
    <HeadTopNav>个 人 中 心</HeadTopNav>
    <!-- TODO:点击显示修改个人信息 -->
    <div
      class="flex items-center justify-around flex-1 w-4/5 mt-8 h-72 lg:mx-auto"
    >
      <!-- 用户信息 -->
      <div
        class="flex flex-col items-center justify-center w-48 px-2 pb-2 bg-white rounded-md shadow-md"
      >
        <img
          :src="userState.baseInfo?.avatarUrl || '/defaultAvatar.png'"
          alt=""
          class="w-32 -translate-y-16 rounded-full shadow-md shadow-black/25 aspect-square"
        />
        <p class="-mt-10 font-mono text-2xl font-bold">
          {{ userState.baseInfo?.nickName }}
        </p>
        <!-- TODO:处理绑定手机号事件 -->
        <button
          :class="
            userState.baseInfo?.phoneNumber
              ? 'text-slate-400'
              : 'text-sky-400 cursor-pointer'
          "
          :disabled="!userState.baseInfo?.phoneNumber"
          @click="console.log(2333)"
          class="mt-1 text-sm"
        >
          {{ userState.baseInfo?.phoneNumber || "绑定手机号" }}
        </button>
        <div class="flex w-full mt-5 justify-evenly">
          <p class="w-4 h-4 bg-red-400 rounded-full"></p>
          <p class="w-4 h-4 bg-yellow-400 rounded-full"></p>
          <p class="w-4 h-4 bg-green-400 rounded-full"></p>
        </div>
      </div>
      <!-- 报名信息(已报名) -->
      <div
        v-if="userState.signInfo"
        class="w-2/3 p-4 bg-white rounded-md shadow-md"
      >
        <h1 class="text-2xl font-bold tracking-widest text-sky-400">
          报名信息
        </h1>
        <div class="flex w-full mt-2">
          <p class="w-1/2">
            <span class="text-slate-400">姓名:</span>
            {{ userState.signInfo?.name }}
          </p>
          <p class="w-1/2">
            <span class="text-slate-400">学号:</span>
            {{ userState.signInfo?.stuNumber }}
          </p>
        </div>
        <div class="flex w-full mt-2">
          <p class="w-1/2">
            <span class="text-slate-400">专业:</span>
            {{ userState.signInfo?.major }}
          </p>
          <p class="w-1/2 font-bold text-sky-400">
            <span class="font-normal text-slate-400">方向:</span>
            {{ userState.signInfo?.choice }}
          </p>
        </div>
        <p class="mt-2">
          <span class="text-slate-400">自我评价:</span>
          {{ userState.signInfo?.info }}
        </p>
      </div>
      <!-- 未报名 -->
      <div
        v-else
        class="flex flex-col items-center justify-center w-2/3 py-2 bg-white rounded-md shadow-md"
      >
        <img class="w-1/2" src="@/assets/暂无信息.png" alt="缺省图" />
        <p class="text-slate-400">暂无报名信息~</p>
        <!-- TODO:点击显示报名提交弹窗 -->
        <button
          class="px-3 py-2 mt-2 text-white transition-all bg-teal-400 rounded-md hover:scale-95 hover:bg-teal-500"
        >
          立即报名
        </button>
      </div>
    </div>
    <CopyRights></CopyRights>
  </div>
</template>
  
<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";
import { onMounted, reactive } from "vue";
import { getUserInfo, getSignInfo } from "@/request/api/info";

const userState = reactive({
  baseInfo: {
    nickName: "zbwer",
    phoneNumber: null,
    avatarUrl:
      "http://1.15.179.24:8001/api/file/7521341d-00b4-4431-8460-72c7182f7cf7.jpg",
  },
  signInfo: null,
});
// {
//     name: "吴昊天",
//     stuNumber: "2021090911010",
//     qqNumber: "1569090869",
//     info: "自我评价",
//     major: "软件工程",
//     grade: "大三",
//     choice: "云计算",
//   },

onMounted(async () => {
  try {
    // 页面鉴权
    let token = localStorage.getItem("token");
    let { data } = await getUserInfo(token);
    userState.baseInfo = data.data;
    // 获取报名信息
  } catch {
    return;
  }
});
</script>