<template>
  <div
    @click.self="$emit('toggleShow')"
    class="absolute z-40 flex items-center justify-center w-screen h-screen overflow-hidden bg-black/50"
  >
    <div class="px-5 py-4 bg-white rounded-md lg:w-1/4">
      <h1 class="text-xl font-bold tracking-widest text-sky-400">
        {{ showPhone ? "绑定手机" : "重置密码" }}
      </h1>
      <!-- 密码 -->
      <div v-if="!showPhone" class="w-full mt-2">
        <input
          class="transition-all duration-300 w-full px-2 py-1 outline-none focus:shadow-[0_0_0_1px_#409eff] rounded shadow-[0_0_0_1px_#dcdfe6]"
          type="password"
          v-model="inputData.password"
          placeholder="新的密码"
        />
      </div>
      <!-- 重复密码 -->
      <div v-if="!showPhone" class="w-full mt-2">
        <input
          class="transition-all duration-300 w-full px-2 py-1 outline-none focus:shadow-[0_0_0_1px_#409eff] rounded shadow-[0_0_0_1px_#dcdfe6]"
          type="password"
          v-model="inputData.passwordAgain"
          placeholder="重复密码"
        />
      </div>
      <!-- 手机号 -->
      <div class="w-full mt-2">
        <input
          class="transition-all duration-300 w-full px-2 py-1 outline-none focus:shadow-[0_0_0_1px_#409eff] rounded shadow-[0_0_0_1px_#dcdfe6]"
          type="text"
          v-model="inputData.phoneNumber"
          placeholder="请输入手机号"
        />
      </div>
      <!-- 验证码 -->
      <div class="flex items-stretch justify-between w-full gap-3 mt-3">
        <div class="flex flex-1">
          <input
            type="text"
            v-model="verifyInfo.code"
            class="transition-all duration-300 w-0 flex-1 px-2 py-1 outline-none focus:shadow-[0_0_0_1px_#409eff] rounded shadow-[0_0_0_1px_#dcdfe6]"
            placeholder="请输入验证码"
          />
        </div>
        <button
          @click="sendCode"
          :disabled="verifyInfo.hasSent"
          class="block px-2 py-1 text-sm text-white rounded disabled:bg-sky-300 disabled:cursor-not-allowed hover:bg-sky-500 shrink-0 bg-sky-400"
        >
          {{ verifyInfo.hasSent ? sendCodeBtn : "获取验证码" }}
        </button>
      </div>
      <button
        @click="handleSet"
        :disabled="!verifyInfo.code"
        class="block w-1/4 px-2 py-2 mx-auto mt-3 text-sm text-white transition-all duration-300 bg-teal-400 rounded-full disabled:cursor-not-allowed disabled:bg-red-200 hover:bg-teal-500"
      >
        提交
      </button>
    </div>
  </div>
</template>

<script setup>
// TODO:根据传入props的值确认类型,不传入props但是解析了props会发生什么？
import { reactive, ref } from "vue";
import { SendVerifyCode, verifyPhoneNumber } from "@/request/api/auth";
import { resetUserInfo } from "@/request/api/info";

const { funType, hasPhone, token } = defineProps([
  "funType",
  "hasPhone",
  "token",
]);
const showPhone = funType === "phone" && !hasPhone; // 绑定手机功能
console.log(funType, hasPhone, showPhone);

// 输入信息
const inputData = reactive({
  password: "",
  passwordAgain: "",
  phoneNumber: "",
});
// 手机号验证所需信息
const verifyInfo = reactive({
  code: "",
  tempKey: "",
  hasSent: false,
});

const emit = defineEmits(["alert", "toggleShow", "updateToken"]);
const sendCodeBtn = ref("60s 后重试");
// 发送验证码
async function sendCode() {
  try {
    if (inputData.phoneNumber.length !== 11) {
      emit("alert", "请输入正确的手机号", "error");
      return;
    }
    let { data } = await SendVerifyCode(inputData.phoneNumber);
    verifyInfo.tempKey = data.data;
    verifyInfo.hasSent = true;
    let waitCodeSec = 60;
    let timer = setInterval(() => {
      sendCodeBtn.value = `${--waitCodeSec}s 后重试`;
      if (waitCodeSec < 0) {
        sendCodeBtn.value = "获取验证码";
        clearInterval(timer);
      }
    }, 1000);
  } catch {
    verifyInfo.hasSent = false;
    return;
  }
}

async function handleSet() {
  try {
    // 重置信息校验
    if (!showPhone) {
      // 检验非空
      let allValuesNotEmpty = Object.values(inputData).every(
        (item) => item !== ""
      );
      if (!allValuesNotEmpty) {
        emit("alert", "请填写完毕所有内容", "error");
        return;
      }
      // 检验两次密码是否一致
      if (inputData.password !== inputData.passwordAgain) {
        emit("alert", "两次密码不一致", "error");
        return;
      }
    }
    // 绑定手机校验
    else {
      if (inputData.phoneNumber === "") {
        emit("alert", "请填写完毕所有内容", "error");
        return;
      }
    }

    // 校验验证码
    let { data } = await verifyPhoneNumber(
      verifyInfo.code,
      verifyInfo.tempKey,
      inputData.phoneNumber
    );
    let codeToken = data?.data;
    // 绑定手机号
    if (showPhone) {
      await resetUserInfo(token, inputData.phoneNumber);
      emit("alert", "绑定成功！", "success");
      emit("toggleShow", inputData.phoneNumber);
    }
    // 重置用户密码
    else {
      await resetUserInfo(codeToken, inputData.phoneNumber, inputData.password);
      emit("alert", "重置成功！", "success");
      emit("toggleShow");
    }
  } catch {
    emit("toggleShow");
    return;
  }
}
</script>