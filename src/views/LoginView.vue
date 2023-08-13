<template>
  <!-- TODO:登录方式切换显示 -->
  <div class="flex items-center justify-center w-screen h-screen bg-zinc-100">
    <div
      class="relative flex w-3/5 overflow-hidden bg-slate-50 rounded-xl h-2/3 rootShadow"
    >
      <!-- 登录 -->
      <div
        :class="activeBlock === 'login' ? 'w-2/3' : 'w-1/3 opacity-0 invisible'"
        class="flex flex-col h-full transition-all duration-1000 bg-sky-50"
      >
        <form
          action=""
          method="post"
          class="flex flex-col items-center justify-center w-full h-full"
        >
          <h1
            class="mb-16 font-mono text-4xl font-bold tracking-widest text-center"
          >
            Log In
          </h1>
          <input
            class="block w-1/2 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow bg-sky-50"
            type="text"
            placeholder="Number"
          />
          <input
            class="block w-1/2 px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <div class="relative w-1/2 mt-3 cursor-pointer">
            <p
              class="absolute right-0 inline-block text-sm transition-all border-b select-none border-slate-400 hover:text-black text-slate-400"
            >
              忘记密码?
            </p>
          </div>
          <button
            class="shadow-md box-border w-1/4 px-1 py-3 mt-12 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400"
          >
            登录
          </button>
          <!-- 切换登录方式 -->
          <div class="w-3/5 mt-14">
            <div class="flex items-center justify-around">
              <i class="w-1/3 h-px bg-slate-300"></i>
              <p class="text-sm text-slate-400 shrink-0">其他登录方式</p>
              <i class="w-1/3 h-px bg-slate-300"></i>
            </div>
            <div class="flex justify-center gap-5 mt-4">
              <!-- 微信登陆 -->
              <svg
                class="cursor-pointer w-9 h-9 icon fill-emerald-400"
                title="微信"
                aria-hidden="true"
              >
                <use xlink:href="#icon-weixindenglu"></use>
              </svg>
              <!-- 验证码登录 -->
              <svg
                class="cursor-pointer w-9 h-9 icon fill-sky-400"
                aria-hidden="true"
              >
                <use xlink:href="#icon-account_sms"></use>
              </svg>
            </div>
          </div>
        </form>
      </div>
      <!-- 注册 -->
      <div
        :class="
          activeBlock === 'register' ? 'w-2/3' : 'w-1/3 opacity-0 invisible'
        "
        class="h-full transition-all duration-1000 bg-sky-50"
      >
        <form
          action=""
          method="post"
          class="flex flex-col items-center justify-center w-full h-full transition-all"
        >
          <h1
            class="mb-16 font-mono text-4xl font-bold tracking-widest text-center"
          >
            Sign Up
          </h1>
          <!-- 用户名 -->
          <input
            v-model="registerInfo.nickName"
            @change="nickNameTest"
            class="block w-1/2 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow"
            :class="
              registerInfo.nickName === '' || errorInput.code === 'nickName'
                ? 'bg-pink-50'
                : 'bg-sky-50'
            "
            type="text"
            placeholder="NickName"
          />
          <!-- 密码 -->
          <input
            v-model="registerInfo.password"
            :class="registerInfo.password ? 'bg-sky-50' : 'bg-pink-50'"
            class="block w-1/2 px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <!-- 年龄与性别 -->
          <div class="flex justify-between w-1/2 gap-4 mt-4">
            <!-- 年龄 -->
            <input
              class="w-16 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none inputShadow placeholder:text-sm"
              type="number"
              :class="registerInfo.age ? 'bg-sky-50' : 'bg-pink-50'"
              placeholder="Age"
              v-model="registerInfo.age"
            />
            <!-- 性别 -->
            <div
              class="relative flex flex-1 overflow-hidden rounded-lg shadow-sm radioBoxShadow"
            >
              <label
                v-for="(item, index) in ['Male', 'N/A', 'Female']"
                :key="index"
                class="flex-1 h-full text-center"
              >
                <input
                  type="radio"
                  class="hidden peer"
                  name="sex"
                  :value="{ value: item, index }"
                  v-model="registerInfo.gender"
                  :checked="registerInfo.gender.index === index"
                />
                <span
                  class="relative z-10 flex items-center justify-center h-full text-sm transition-all duration-500 rounded-lg cursor-pointer text-slate-400 peer-checked:text-white"
                  >{{ item }}</span
                >
              </label>
              <div
                :style="{
                  left: `${(registerInfo.gender.index * 100) / 3}%`,
                }"
                class="absolute flex items-center justify-center w-1/3 h-full transition-all duration-500 rounded-lg bg-sky-400"
              ></div>
            </div>
          </div>
          <!-- 电话号码 -->
          <input
            :class="
              registerInfo.phoneNumber === '' ||
              errorInput.code === 'phoneNumber'
                ? 'bg-pink-50'
                : 'bg-sky-50'
            "
            class="block w-1/2 px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow placeholder:text-sm"
            type="text"
            placeholder="PhoneNumber"
            @change="phoneNumberTest"
            v-model="registerInfo.phoneNumber"
          />
          <!-- 验证码 -->
          <div
            :class="registerInfo.verifyCode ? 'bg-sky-50' : 'bg-pink-50'"
            class="flex items-center justify-between w-1/2 py-2 pl-4 pr-2 mt-4 duration-300 rounded-lg outline-none inputShadow bg-sky-50"
          >
            <input
              :class="registerInfo.verifyCode ? 'bg-sky-50' : 'bg-pink-50'"
              class="flex-1 tracking-wider outline-none placeholder:text-sm"
              type="text"
              v-model="registerInfo.verifyCode"
              placeholder="请输入验证码..."
            />
            <button
              @click="getVerifyCode"
              :disabled="verifyCodeBtn.disabled"
              class="text-sm shrink-0 disabled:cursor-not-allowed disabled:text-slate-400"
            >
              {{ verifyCodeBtn.content }}
            </button>
          </div>
          <!-- 非法输入提示 -->
          <p
            :class="errorInput.code ? '' : ' invisible'"
            class="mt-4 text-xs text-red-400"
          >
            {{ errorInput.message }}
          </p>
          <button
            @click.prevent="handleRegister"
            class="shadow-md box-border w-1/4 px-1 py-3 mt-6 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400"
          >
            注册
          </button>
        </form>
      </div>
      <!-- 滑动层 -->
      <div
        :style="`transform: translateX(${
          activeBlock === 'login' ? '200' : '0'
        }%)`"
        class="absolute flex items-center justify-center w-1/3 h-full overflow-hidden transition-all duration-1000 bg-sky-50 scrollShadow"
      >
        <!-- 圆 -->
        <div
          class="absolute transition-all duration-1000 rounded-full bg-sky-50 circleSwitchRight"
          :style="`transform: translateX(${
            activeBlock === 'login' ? '-100' : '0'
          }%)`"
        ></div>
        <div
          class="absolute transition-all duration-1000 rounded-full bg-sky-50 circleSwitchLeft"
          :style="`transform: translateX(${
            activeBlock === 'login' ? '25' : '0'
          }%)`"
        ></div>
        <!-- 去登录 -->
        <div
          :class="
            activeBlock === 'register' ? '' : 'opacity-0 invisible absolute'
          "
          class="flex flex-col items-center justify-center transition-all duration-1000"
        >
          <h1 class="font-sans text-xl font-bold tracking-wider">
            ✨Welcome Back!✨
          </h1>
          <img class="w-1/2 mt-6" src="../assets/register.png" alt="" />
          <p class="mt-6 text-sm select-none text-slate-400">
            已有账号？<span
              class="cursor-pointer text-sky-400"
              @click="activeBlock = 'login'"
              >快去登录吧！</span
            >
          </p>
        </div>
        <!-- 去注册 -->
        <div
          :class="activeBlock === 'login' ? '' : 'opacity-0 invisible absolute'"
          class="flex flex-col items-center justify-center transition-all duration-1000"
        >
          <h1 class="font-sans text-xl font-bold tracking-wider">
            🎉欢迎来到光点计划🚀
          </h1>
          <img class="w-1/2 mt-6" src="../assets/logo.png" alt="" />
          <p class="mt-6 text-sm select-none text-slate-400">
            没有账号？<span
              class="cursor-pointer text-sky-400"
              @click="activeBlock = 'register'"
              >点击注册！</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  verifyCaptchaImage,
  SendVerifyCode,
  verifyPhoneNumber,
} from "@/request/api/auth";

// 滑动切换样式相关
const activeBlock = ref("login");

// 注册非法输入提示信息
const errorInput = reactive({
  message: "",
  code: "",
  // code为空表示所有信息均合法
});

// 注册信息对象
const registerInfo = reactive({
  nickName: "",
  password: "",
  gender: { value: "N/A", index: 1 },
  age: "",
  phoneNumber: "",
  verifyCode: "",
  verifyCodeTempKey: "",
});

// 检查昵称合法性
function nickNameTest() {
  const regexNickName = /^[\u4E00-\u9FA5a-zA-Z0-9_]{4,10}$/;
  const { nickName } = registerInfo;
  if (nickName === "") {
    errorInput.message = "用户名不能为空哦~";
  } else if (nickName.length < 4) {
    errorInput.message = "用户名太短啦!";
  } else if (nickName.length > 10) {
    errorInput.message = "用户名太长啦!";
  } else if (!regexNickName.test(nickName)) {
    errorInput.message = "用户名中含有非法字符";
  } else {
    errorInput.message = "";
    errorInput.code = "";
    return;
  }
  errorInput.code = "nickName";
}
// 检查电话合法性
function phoneNumberTest() {
  const regexPhone = /^((\+|00)86)?1\d{10}$/;
  const { phoneNumber } = registerInfo;
  if (phoneNumber === "") {
    errorInput.message = "电话号码不能为空哦~";
  } else if (!regexPhone.test(phoneNumber)) {
    errorInput.message = "电话号码格式有误";
  } else {
    errorInput.message = "";
    errorInput.code = "";
    return;
  }
  errorInput.code = "phoneNumber";
}

// 提交注册信息
async function handleRegister() {
  console.log(registerInfo);
  // 校验注册信息是否填写完毕
  let keysArr = Object.keys(registerInfo);
  for (let item of keysArr) {
    if (registerInfo[item] === "") {
      errorInput.code = item;
      // TODO:未测试
      errorInput.message =
        item !== "verifyCodeTempKey" ? `请输入 ${item}` : "请先获取验证码";
      return;
    }
  }
  if (errorInput.code) return;
  alert("注册成功");
  // 验证码校验
  let { data } = await verifyPhoneNumber();
  if (data.code === 200) {
    // 调用注册接口
  }

  // let res = await verifyCaptchaImage();
  // console.log(res.data);
}
// 获取短信验证码
const verifyCodeBtn = reactive({
  disabled: false,
  content: "获取验证码",
});
async function getVerifyCode() {
  // TODO:调用获取验证码的api
  // 展示遮罩信息，封装遮罩组件.
  SendVerifyCode(registerInfo.phoneNumber).then((res) => {
    console.log(res);
  });
  let waitCodeSec = 5;
  verifyCodeBtn.disabled = true;
  let timer = setInterval(() => {
    verifyCodeBtn.content = `${waitCodeSec}s 后重试`;
    waitCodeSec--;
    if (waitCodeSec < 0) {
      verifyCodeBtn.content = "获取验证码";
      verifyCodeBtn.disabled = false;
      clearInterval(timer);
    }
  }, 1000);
}
</script>

<style scoped>
* {
  user-select: none;
}
.rootShadow {
  box-shadow: 6px 6px 8px #d1d9e6, -6px -6px 8px rgba(250, 250, 250, 1);
}
.inputShadow {
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3),
    inset -3px -3px 6px rgba(220, 220, 220, 0.7);
}
.inputShadow:focus,
.inputShadow:active,
.inputShadow:focus-within {
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.5),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}
.radioBoxShadow {
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3),
    inset -3px -3px 6px rgba(220, 220, 220, 0.7);
}
.scrollShadow {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #d1d9e6;
}

.circleSwitchRight {
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  box-shadow: inset 6px 2px 4px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(220, 220, 220, 0.8);
}
.circleSwitchLeft {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -150px;
  box-shadow: inset -4px 2px 4px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(220, 220, 220, 0.8);
}

/* 去除数字input的自带样式 */
/* 在Chrome浏览器下 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 在Firefox浏览器下 */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>