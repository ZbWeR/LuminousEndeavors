<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen bg-zinc-100"
  >
    <!-- 标题栏 -->
    <HeadTopNav>个 人 中 心</HeadTopNav>

    <!-- TODO:点击显示修改个人信息 -->
    <div class="flex flex-col items-center flex-1 w-4/5 mt-8 h-72 lg:mx-auto">
      <!-- 用户信息 -->
      <div
        @click="showEditor = true"
        class="cursor-pointer duration-500 relative flex items-center justify-between w-1/2 gap-4 p-2 transition-all rounded-md shadow-md bg-gradient-to-r to-[#37ecba] from-[#72afd3] hover:scale-95"
      >
        <!-- TODO:头像加载失败处理 -->
        <img
          :src="userState.baseInfo?.avatarUrl || '/defaultAvatar.png'"
          alt=""
          class="rounded-full shadow-md w-28 shadow-black/25 aspect-square"
        />
        <div class="flex-1 text-white">
          <p class="font-mono text-2xl font-bold tracking-wider">
            {{ userState.baseInfo?.nickName }}
          </p>
          <div class="flex items-center mt-2">
            <p>{{ userState.baseInfo?.phoneNumber || "绑定手机号" }}</p>
            <svg class="icon fill-white" aria-hidden="true">
              <use xlink:href="#icon-xiugai"></use>
            </svg>
          </div>
        </div>

        <div class="absolute top-0 right-0 flex w-1/4 mt-3 justify-evenly">
          <p class="w-4 h-4 bg-red-400 rounded-full"></p>
          <p class="w-4 h-4 bg-yellow-400 rounded-full"></p>
          <p class="w-4 h-4 rounded-full bg-sky-400"></p>
        </div>
      </div>
      <!-- 报名信息(已报名) -->
      <div
        v-if="userState.signInfo"
        class="w-2/3 p-4 mt-4 bg-white rounded-md shadow-md"
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
        v-else-if="!showSignForm && !userState.signInfo"
        class="flex flex-col items-center justify-center w-1/2 py-4 mt-4 bg-white rounded-md shadow-md"
      >
        <img class="w-1/2" src="@/assets/暂无信息.png" alt="缺省图" />
        <p class="text-slate-400">暂无报名信息~</p>
        <!-- TODO:点击显示报名提交弹窗 -->
        <button
          @click="showSignForm = true"
          class="px-3 py-2 mt-2 text-white transition-all bg-teal-400 rounded-md hover:scale-95 hover:bg-teal-500"
        >
          立即报名
        </button>
      </div>
      <!-- 报名表单 -->
      <div
        v-else
        class="flex flex-col w-1/2 px-3 py-4 mt-4 bg-white rounded-md shadow-md"
      >
        <form>
          <h1 class="text-2xl font-bold tracking-widest text-sky-400">
            报名信息
          </h1>
          <div class="flex w-full mt-4">
            <div class="flex items-center justify-between w-1/3">
              <label class="text-slate-400 shrink-0">姓名:</label>
              <input
                type="text"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
            <div class="flex items-center justify-around w-1/3">
              <label class="text-slate-400 shrink-0">学号:</label>
              <input
                type="text"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
            <div class="flex items-center justify-around w-1/3">
              <label class="text-slate-400 shrink-0">专业:</label>
              <input
                type="text"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
          </div>
          <!-- 方向 -->
          <div
            class="relative flex flex-1 overflow-hidden rounded-lg shadow-sm radioBoxShadow"
          >
            <label
              v-for="(item, index) in ['1', '2', '3', '4', '5']"
              :key="index"
              class="flex-1 h-full text-center"
            >
              <input type="radio" class="hidden peer" name="sex" />
              <span
                class="relative z-10 flex items-center justify-center h-full text-sm transition-all duration-500 rounded-lg cursor-pointer text-slate-400 peer-checked:text-white"
                >{{ item }}</span
              >
            </label>
            <div
              class="absolute flex items-center justify-center w-1/3 h-full transition-all duration-500 rounded-lg bg-sky-400"
            ></div>
          </div>
          <p class="mt-3">
            <span class="text-slate-400">自我评价:</span>
            {{ userState.signInfo?.info }}
          </p>
        </form>
      </div>
    </div>
    <!-- 修改信息弹窗 -->
    <UserCenterEditor
      v-show="showEditor"
      :baseInfo="userState.baseInfo"
    ></UserCenterEditor>
    <CopyRights></CopyRights>
  </div>
</template>
  
<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";
import UserCenterEditor from "@/components/UserCenterEditor.vue";
import { onMounted, reactive, ref } from "vue";
import { useMapState } from "@/utils/useVuex";
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

const { token } = useMapState(["token"]);
// onMounted(async () => {
//   try {
//     // 页面鉴权
//     let { data } = await getUserInfo(token.value);
//     userState.baseInfo = data.data;
//     // 获取报名信息
//     let res = await getSignInfo(token.value);
//     userState.signInfo = res.data.data;
//     console.log(res.data.data);
//   } catch {
//     // console.log(2333);
//     return;
//   }
// });

const showEditor = ref(false);
const showSignForm = ref(false);
</script>