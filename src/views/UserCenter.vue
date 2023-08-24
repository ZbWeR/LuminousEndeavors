<template>
  <div class="flex flex-col w-screen min-h-screen bg-zinc-100">
    <!-- 标题栏 -->
    <HeadTopNav>个 人 中 心</HeadTopNav>

    <!-- TODO:点击显示修改个人信息 -->
    <div class="flex flex-col items-center flex-1 w-4/5 mt-4 lg:mx-auto">
      <!-- 用户信息 -->
      <div
        class="bg-gradient-to-r to-[#37ecba] from-[#72afd3] relative flex items-center justify-between w-1/2 gap-4 p-2 transition-all duration-500 rounded-md hover:scale-[0.98] shadow-md cursor-pointer"
      >
        <!-- TODO:头像加载失败处理 -->
        <img
          :src="userState.baseInfo?.avatarUrl || '/defaultAvatar.png'"
          alt=""
          class="rounded-full shadow-md w-28 shadow-black/25 aspect-square"
        />
        <div class="flex-1 text-white">
          <p class="px-2 py-1 font-mono text-2xl font-bold tracking-wider">
            {{ userState.baseInfo?.nickName }}
          </p>
          <div class="flex items-center mt-2">
            <p class="px-2 py-1">
              {{ userState.baseInfo?.phoneNumber || "绑定手机号" }}
            </p>
            <svg class="icon fill-white" aria-hidden="true">
              <use xlink:href="#icon-edit"></use>
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
        v-if="!showSignForm && userState.signInfo"
        class="w-1/2 p-4 mt-4 bg-white rounded-md shadow-md"
      >
        <h1 class="text-2xl font-bold tracking-widest text-sky-400">
          报名信息
        </h1>
        <div class="flex w-full mt-2">
          <p class="w-1/3">
            <span class="text-slate-400">姓名:</span>
            {{ userState.signInfo?.name }}
          </p>

          <p class="w-1/3">
            <span class="text-slate-400">专业:</span>
            {{ userState.signInfo?.major }}
          </p>
          <p class="w-1/3 font-bold text-sky-400">
            <span class="font-normal text-slate-400">方向:</span>
            {{ userState.signInfo?.choice }}
          </p>
        </div>
        <div class="flex w-full mt-2">
          <p class="w-1/2">
            <span class="text-slate-400">学号:</span>
            {{ userState.signInfo?.stuNumber }}
          </p>
          <p class="w-1/2">
            <span class="text-slate-400">Q Q:</span>
            {{ userState.signInfo?.qqNumber }}
          </p>
        </div>
        <div class="mt-2">
          <h1 class="text-slate-400">自我评价:</h1>
          <p class="mt-1 break-words indent-4">
            {{ userState.signInfo?.info }}
          </p>
        </div>
        <div class="flex justify-center gap-4 pt-4 mt-2 border-t">
          <button
            @click="showSignForm = true"
            class="block px-3 py-2 text-white transition-all bg-orange-400 rounded-md hover:scale-95 hover:bg-orange-500"
          >
            修改信息
          </button>
          <button
            @click="showUploadFile = true"
            class="block px-3 py-2 text-white transition-all rounded-md bg-sky-400 hover:scale-95 hover:bg-sky-500"
          >
            提交文件
          </button>
        </div>
      </div>
      <!-- 未报名 -->
      <div
        v-else-if="!showSignForm && !userState.signInfo"
        class="flex flex-col items-center justify-center w-1/2 py-4 mt-4 bg-white rounded-md shadow-md"
      >
        <img class="w-1/2" src="@/assets/暂无信息.png" alt="缺省图" />
        <p class="text-slate-400">暂无报名信息~</p>
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
          <!-- 姓名学号 -->
          <div class="flex w-full mt-4 -ml-3">
            <div class="flex items-center justify-around w-1/2">
              <label class="text-slate-400 shrink-0">姓名:</label>
              <input
                type="text"
                v-model="signInputInfo.name"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
            <div class="flex items-center justify-around w-1/2">
              <label class="text-slate-400 shrink-0">学号:</label>
              <input
                type="text"
                v-model="signInputInfo.stuNumber"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
          </div>
          <!-- 专业qq号 -->
          <div class="flex w-full mt-4 -ml-3">
            <div class="flex items-center justify-around w-1/2">
              <label class="text-slate-400 shrink-0">专业:</label>
              <input
                type="text"
                v-model="signInputInfo.major"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
            <div class="flex items-center justify-around w-1/2">
              <label class="text-slate-400 shrink-0">Q Q:</label>
              <input
                type="text"
                v-model="signInputInfo.qqNumber"
                class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
                placeholder="请输入..."
              />
            </div>
          </div>
          <!-- 方向 -->
          <div class="mt-4">
            <label class="text-slate-400">所选项目:</label>
            <select
              class="w-40 ml-4 outline-none rounded-sm shrink-0 shadow-[0_0_0_1px_#dcdfe6] p-1"
              name=""
              id=""
              v-model="signInputInfo.choice"
            >
              <option disabled value="">请选择</option>
              <option value="处理器设计">处理器设计</option>
              <option value="编译技术">编译技术</option>
              <option value="计算机视觉与机器学习">计算机视觉与机器学习</option>
              <option value="分布式系统与云计算">分布式系统与云计算</option>
              <option value="操作系统">操作系统</option>
            </select>
          </div>
          <p class="flex flex-col mt-4">
            <label class="text-slate-400">自我评价:</label>
            <textarea
              v-model="signInputInfo.info"
              class="duration-300 rounded-sm mt-2 focus:shadow-[0_0_0_1px_#409eff] px-1 shadow-[0_0_0_1px_#dcdfe6] placeholder:text-slate-300 outline-none resize-none focus-within:"
              cols="30"
              rows="4"
              maxlength="200"
              placeholder="简单介绍一下自己吧!"
            ></textarea>
          </p>
          <div class="flex justify-center gap-4 mt-4">
            <button
              @click.prevent="showSignForm = false"
              class="block w-1/5 py-1 tracking-widest text-white transition-all bg-red-400 hover:bg-red-500"
            >
              取消</button
            ><button
              @click.prevent="handleSign"
              class="block w-1/5 py-1 tracking-widest text-white transition-all hover:bg-sky-500 bg-sky-400"
            >
              提 交
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- 提交文件弹窗 -->
    <UploadFile
      v-show="showUploadFile"
      @alert="messageAlert"
      @changeVis="showUploadFile = false"
    ></UploadFile>
    <CopyRights></CopyRights>
  </div>
</template>
  
<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";
import UploadFile from "@/components/UploadFile.vue";
import { onMounted, reactive, ref } from "vue";
import { useMapState, useMapMutations } from "@/utils/useVuex";
import {
  getUserInfo,
  getSignInfo,
  postSignInfo,
  updateSignInfo,
} from "@/request/api/info";
import { MessageCreator } from "@/components/message";

const userState = reactive({
  baseInfo: {
    nickName: "zbwer",
    phoneNumber: null,
    avatarUrl:
      "http://1.15.179.24:8001/api/file/7521341d-00b4-4431-8460-72c7182f7cf7.jpg",
    gender: "无",
  },
  signInfo: null,
});

const { token } = useMapState(["token"]);
const { updateToken } = useMapMutations(["updateToken"]);
onMounted(async () => {
  try {
    // 页面鉴权
    let { data } = await getUserInfo(token.value);
    userState.baseInfo = data.data;
    // 获取报名信息
    let res = await getSignInfo(token.value);
    userState.signInfo = res.data.data;
    // 同步报名信息
    // signInputInfo.name = userState.signInfo.name;
    // signInputInfo.stuNumber = userState.signInfo.stuNumber;
    // signInputInfo.qqNumber = userState.signInfo.qqNumber;
    // signInputInfo.major = userState.signInfo.major;
    // signInputInfo.choice = userState.signInfo.choice;
    // signInputInfo.info = userState.signInfo.info;
  } catch {
    // console.log(2333);
    return;
  }
});

const messageInstance = new MessageCreator();
/**
 * 展示消息弹窗
 * @param {String} message - 消息内容
 * @param {String} msgType - 消息类型
 */
function messageAlert(message, msgType) {
  console.log(message, msgType);
  messageInstance.present({
    message,
    duration: 2000,
    msgType,
  });
}

const showSignForm = ref(false);
const signInputInfo = reactive({
  name: "",
  stuNumber: "",
  qqNumber: "",
  major: "",
  choice: "",
  info: "",
});
/**
 * 提交报名信息
 */
async function handleSign() {
  if (!validSignInfo()) return;
  try {
    let grade = computedGrade();
    let completeInfo = { ...signInputInfo, grade };
    // 提交报名信息
    if (userState.signInfo) {
      // 已报名调用更新信息接口
      await updateSignInfo(token.value, completeInfo);
      messageAlert("修改报名信息成功", "success");
    } else {
      // 未报名调用报名接口
      let { data } = await postSignInfo(token.value, completeInfo);
      // 保存新的token
      updateToken(data?.data);
      messageAlert("报名成功", "success");
    }
    // 隐藏报名界面
    userState.signInfo = completeInfo;
    showSignForm.value = false;
  } catch {
    showSignForm.value = false;
    return;
  }
}

function validSignInfo() {
  const allValuesNotEmpty = Object.values(signInputInfo).every(
    (value) => value !== ""
  );
  if (!allValuesNotEmpty) {
    messageAlert("请填写完毕所有内容", "error");
    return false;
  }
  const stuNumberReg = /^20\d{11}$/;
  if (!stuNumberReg.test(signInputInfo.stuNumber)) {
    messageAlert("请输入正确的学号", "error");
    return false;
  }
  return true;
}

function computedGrade() {
  const schoolYear = signInputInfo.stuNumber.slice(0, 4);
  switch (schoolYear) {
    case "2020":
      return "大四";
    case "2021":
      return "大三";
    case "2022":
      return "大二";
    case "2023":
      return "大一";
    default:
      return "非本科";
  }
}

const showUploadFile = ref(false);
</script>