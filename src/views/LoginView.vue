<template>
  <!-- TODO:登录方式切换显示 -->
  <div class="flex items-center justify-center w-screen h-screen bg-zinc-100" >
    <div
      class="relative flex w-3/5 overflow-hidden bg-slate-50 rounded-xl h-2/3 rootShadow mobile-view"
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
            class="mb-16 font-sans text-4xl font-bold tracking-widest text-center "
          >
            登 录
          </h1>
          <!-- 账号密码登录 -->
          <div
            class="flex flex-col items-center wid"
            v-show="loginInfo.loginWay === 'password'"
          >
            <input
              class="block w-full px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow bg-sky-50"
              type="text"
              v-model="loginInfo.userName"
              placeholder="PhoneNumber"
            />
            <input
              class="block w-full px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
              type="password"
              v-model="loginInfo.password"
              placeholder="Password"
            />
            <!-- TODO:忘记密码功能 -->
            <div class="relative w-full mt-3 cursor-pointer">
              <p
                @click="resetShow = true"
                class="absolute right-0 inline-block text-sm transition-all border-b select-none border-slate-400 hover:text-black text-slate-400"
              >
                忘记密码?
              </p>
            </div>
            <button
              :disabled="
                LoginRunning ||
                loginInfo.userName === '' ||
                loginInfo.password.length < 6
              "
              @click.prevent="handleLogin"
              class= "disabled:bg-sky-200 disabled:cursor-not-allowed shadow-md box-border w-1/2 px-1 py-3 mt-12 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400 disabled:hover:scale-100"
            >
              登录
            </button>
          </div>
          <!-- 微信登录 -->
          <div class="w-1/2" v-show="loginInfo.loginWay === 'weChat'">
            <img
              class="w-3/4 mx-auto"
              :class="wxQrCodeInfo.tempUserId ? '' : 'blur-[2px]'"
              :src="wxQrCodeInfo.src"
              alt=""
            />
          </div>
          <!-- 手机验证码登录 -->
          <div class="wid" v-show="loginInfo.loginWay === 'phoneNumber'">
            <input
              class="block w-full px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow bg-sky-50"
              type="text"
              v-model="loginInfo.userName"
              placeholder="PhoneNumber"
            />
            <!-- 验证码 -->
            <div
              class="items-center justify-between py-2 pl-4 pr-2 mt-4 overflow-hidden duration-300 rounded-lg outline-none bg-sky-50 inputShadow"
            >
              <input
                class=" tracking-wider outline-none placeholder:text-sm bg-sky-50"
                type="text"
                v-model="phoneCodeInfo.verifyCode"
                placeholder="请输入验证码..."
              />
            </div>
            <button
                @click.prevent="getVerifyCode(loginInfo.userName)"
                :disabled="!loginInfo.userName || verifyCodeBtn.disabled"
                class=" text-sm shrink-0 disabled:cursor-not-allowed disabled:text-slate-400"
              >
                {{ verifyCodeBtn.content }}
              </button>
            <button
              :disabled="
                LoginRunning ||
                loginInfo.userName === '' ||
                phoneCodeInfo.verifyCode.length < 6
              "
              @click.prevent="handleLogin"
              class="mx-auto mt-12 block disabled:bg-sky-200 disabled:cursor-not-allowed shadow-md box-border w-1/2 px-1 py-3 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400 disabled:hover:scale-100"
            >
              登录
            </button>
          </div>
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
                v-show="loginInfo.loginWay !== 'weChat'"
                @click="changeLoginWay('weChat')"
                class="cursor-pointer w-9 h-9 icon fill-emerald-400"
                title="微信"
                aria-hidden="true"
              >
                <use xlink:href="#icon-weChat"></use>
              </svg>
              <!-- 账号密码登录 -->
              <svg
                v-show="loginInfo.loginWay !== 'password'"
                @click="changeLoginWay('password')"
                class="cursor-pointer w-9 h-9 icon fill-sky-400"
                aria-hidden="true"
              >
                <use xlink:href="#icon-password"></use>
              </svg>
              <!-- 验证码登录 -->
              <svg
                v-show="loginInfo.loginWay !== 'phoneNumber'"
                @click="changeLoginWay('phoneNumber')"
                class="cursor-pointer w-9 h-9 icon fill-orange-400"
                aria-hidden="true"
              >
                <use xlink:href="#icon-phoneNumber"></use>
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
            class=" mb-16 font-sans text-4xl font-bold tracking-widest text-center "
          >
            注 册
          </h1>
          <!-- 用户名 -->
          <input
            v-model="registerInfo.nickName"
            @change="nickNameTest"
            class="block wid px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow"
            :class="
              registerInfo.nickName === '' || errorInput.code === 'nickName'
                ? 'bg-pink-50'
                : 'bg-sky-50'
            "
            type="text"
            placeholder="NickName"
          />
          <!-- 密码 -->
          <!-- TODO:显示密码功能 -->
          <input
            v-model="registerInfo.password"
            @change="passWordTest"
            :class="registerInfo.password ? 'bg-sky-50' : 'bg-pink-50'"
            class="block wid px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <!-- 年龄与性别 -->
          <div class="flex justify-between wid gap-4 mt-4">
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
                v-for="(item, index) in Object.keys(genderOptions)"
                :key="index"
                class="flex-1 h-full text-center"
              >
                <input
                  type="radio"
                  class="hidden peer"
                  name="sex"
                  :value="{ value: genderOptions[item], index }"
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
            class="block wid px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow placeholder:text-sm"
            type="text"
            placeholder="PhoneNumber"
            @change="phoneNumberTest(registerInfo.phoneNumber)"
            v-model="registerInfo.phoneNumber"
          />
          <!-- 验证码 -->
          <div
            :class="phoneCodeInfo.verifyCode ? 'bg-sky-50' : 'bg-pink-50'"
            class="flex items-center justify-between wid py-2 pl-4 pr-2 mt-4 overflow-hidden duration-300 rounded-lg outline-none inputShadow"
          >
            <input
              :class="phoneCodeInfo.verifyCode ? 'bg-sky-50' : 'bg-pink-50'"
              class="flex-1 w-0 tracking-wider outline-none placeholder:text-sm"
              type="text"
              v-model="phoneCodeInfo.verifyCode"
              placeholder="请输入验证码..."
            />
            <button
              @click.prevent="getVerifyCode(registerInfo.phoneNumber)"
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
            :disabled="registerRunning || phoneCodeInfo.verifyCode === ''"
            class="w-1/2 center disabled:cursor-not-allowed disabled:bg-sky-200 shadow-md box-border  px-1 py-3 mt-6 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400"
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
          <h1 class="font-sans font-bold tracking-wider lg:text-xl">
            🎉欢迎来到光点计划🚀
          </h1>
          <img class="w-1/2 mt-6" src="../assets/logo.png" alt="" />
          <p class="mt-6 text-sm select-none text-slate-400">
            已有账号？<span
              class="text-base cursor-pointer text-sky-400"
              @click="activeBlock = 'login'"
              >点击登录！</span
            >
          </p>
        </div>
        <!-- 去注册 -->
        <div
          :class="activeBlock === 'login' ? '' : 'opacity-0 invisible absolute'"
          class="flex flex-col items-center justify-center transition-all duration-1000"
        >
          <h1 class="font-sans font-bold tracking-wider lg:text-xl">
            ✨Welcome Back!✨
          </h1>
          <img class="w-1/2 mt-6" src="../assets/register.png" alt="" />
          <p class="mt-6 text-sm select-none text-slate-400">
            没有账号？<span
              class="text-base cursor-pointer text-sky-400"
              @click="activeBlock = 'register'"
              >点击注册！</span
            >
          </p>
        </div>
      </div>
    </div>
    <ResetPassword
      v-show="resetShow"
      @toggleShow="toggleShow"
      @alert="messageAlert"
    ></ResetPassword>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  userLoginByPassword,
  SendVerifyCode,
  verifyPhoneNumber,
  userRegister,
  getWxQr,
  getScanStatus,
} from "@/request/api/auth";
import { MessageCreator } from "@/components/message";
import { useMapMutations } from "@/utils/useVuex";
import ResetPassword from "@/components/ResetPassword.vue";

// token相关
const { updateToken, updateLoginState } = useMapMutations([
  "updateToken",
  "updateLoginState",
]);

// 滑动切换样式相关
const activeBlock = ref("register");

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
});
const genderOptions = { Male: "男", "N/A": "无", Female: "女" };

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
    return true;
  }
  errorInput.code = "nickName";
  return false;
}
// 检查电话合法性
function phoneNumberTest(phoneNumber) {
  const regexPhone = /^((\+|00)86)?1\d{10}$/;
  if (phoneNumber === "") {
    errorInput.message = "电话号码不能为空哦~";
  } else if (!regexPhone.test(phoneNumber)) {
    errorInput.message = "电话号码格式有误";
  } else {
    errorInput.message = "";
    errorInput.code = "";
    return true;
  }
  errorInput.code = "phoneNumber";
  return false;
}
// 密码长度校验
function passWordTest() {
  const regexPassWord = /.{6}/;
  const { password } = registerInfo;
  if (password === "") {
    errorInput.message = "密码不能为空哦~";
  } else if (!regexPassWord.test(password)) {
    errorInput.message = "密码至少需要6位哦";
  } else {
    errorInput.message = "";
    errorInput.code = "";
    return true;
  }
  errorInput.code = "password";
  return false;
}

const registerRunning = ref(false); // 节流

import { useRouter } from "vue-router";
const router = useRouter();

// 提交注册信息
async function handleRegister() {
  try {
    // 检验注册信息是否合法
    if (
      !nickNameTest() ||
      !passWordTest() ||
      !phoneNumberTest(registerInfo.phoneNumber)
    ) {
      return;
    }
    // 校验注册信息是否填写完毕
    errorInput.code = "";
    let keysArr = Object.keys(registerInfo);
    for (let item of keysArr) {
      if (registerInfo[item] === "") {
        errorInput.code = item;
        errorInput.message = `请输入 ${item}`;
        return;
      }
    }
    if (errorInput.code) return;

    registerRunning.value = true; // 节流处理
    // 验证码校验,校验未通过的会抛出错误从而中止执行
    await verifyPhoneNumber(
      // 不传入电话号码就是仅验证
      phoneCodeInfo.verifyCode,
      phoneCodeInfo.verifyCodeTempKey
    );
    // 调用注册接口
    let { data } = await userRegister({
      ...registerInfo,
      gender: registerInfo.gender.value,
    });
    // 注册成功保存token
    updateToken(data.data.token);
    updateLoginState(true);
    // 跳转个人中心
    router.replace({ name: "userCenter" });
  } catch (err) {
    phoneCodeInfo.verifyCode = "";
    return;
  } finally {
    // 节流处理
    setTimeout(() => {
      registerRunning.value = false;
    }, 500);
  }
}
// 获取短信验证码
const phoneCodeInfo = reactive({
  verifyCode: "",
  verifyCodeTempKey: "1692496534217",
});
const verifyCodeBtn = reactive({
  disabled: false,
  content: "获取验证码",
});

async function getVerifyCode(phoneNumber) {
  if (!phoneNumberTest(phoneNumber)) {
    messageAlert("请输入正确的电话号码", "error");
    return;
  }
  try {
    let { data } = await SendVerifyCode(phoneNumber);
    phoneCodeInfo.verifyCodeTempKey = data.data;
    let waitCodeSec = 60;
    verifyCodeBtn.content = `${waitCodeSec}s 后重试`;
    verifyCodeBtn.disabled = true;
    let timer = setInterval(() => {
      verifyCodeBtn.content = `${--waitCodeSec}s 后重试`;
      if (waitCodeSec < 0) {
        verifyCodeBtn.content = "获取验证码";
        verifyCodeBtn.disabled = false;
        clearInterval(timer);
      }
    }, 1000);
  } catch {
    return;
  }
}

// 登录信息对象
const loginInfo = reactive({
  userName: "",
  password: "",
  loginWay: "password",
});

const messageInstance = new MessageCreator();
function messageAlert(message, msgType) {
  messageInstance.present({
    message,
    msgType,
    duration: 2000,
  });
}

const wxQrCodeInfo = reactive({
  src: "/QRCode.png",
  tempUserId: "",
});
// 200 成功登录 204 成功扫码 500 错误
// 变换登录方式
async function changeLoginWay(clickType) {
  loginInfo.loginWay = clickType;
  if (clickType === "weChat") {
    // 开启扫码轮询
    loginByWeChat();
  } else {
    clearInterval(loginTimer);
  }
}

var loginTimer = null;
// 微信登录
async function loginByWeChat() {
  try {
    // 获取二维码src
    let { data } = await getWxQr();
    wxQrCodeInfo.src = data?.data?.qrUrl;
    wxQrCodeInfo.tempUserId = data?.data?.tempUserId;
    // 轮询扫码状态
    // TODO:500状态码未测试过,二维码有效时间
    loginTimer = setInterval(async () => {
      let { data } = await getScanStatus(wxQrCodeInfo.tempUserId);
      if (data?.code === 200) {
        clearInterval(loginTimer);
        updateToken(data?.data?.token);
        updateLoginState(true);
        router.replace({ name: "userCenter" });
      }
    }, 2000);
  } catch {
    clearInterval(loginTimer);
    return;
  }
}

//  提交登录信息
async function handleLogin() {
  if (loginInfo.loginWay === "password") loginByPassWord();
  else if (loginInfo.loginWay === "phoneNumber") loginByPhoneNumber();
}

// 账号密码登录
const LoginRunning = ref(false); // 节流
async function loginByPassWord() {
  try {
    // 发送登录请求
    LoginRunning.value = true;
    let { data } = await userLoginByPassword(loginInfo);
    // 登录成功保存token
    updateLoginState(true);
    updateToken(data?.data?.token);
    // 跳转个人中心
    router.replace({ name: "userCenter" });
  } catch {
    return;
  } finally {
    // 节流处理
    setTimeout(() => {
      LoginRunning.value = false;
    }, 500);
  }
}
// 手机验证码登录
async function loginByPhoneNumber() {
  try {
    let { data } = await verifyPhoneNumber(
      phoneCodeInfo.verifyCode,
      phoneCodeInfo.verifyCodeTempKey,
      loginInfo.userName
    );
    messageAlert("登陆成功", "success");
    updateLoginState(true);
    updateToken(data?.data);
    router.replace({ name: "userCenter" });
  } catch {
    return;
  }
}

// 忘记密码显隐
const resetShow = ref(false);
function toggleShow() {
  resetShow.value = !resetShow.value;
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
  width: 180px;
  height: 180px;
  top: -90px;
  right: -90px;
  box-shadow: inset 6px 2px 4px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(220, 220, 220, 0.8);
}
.circleSwitchLeft {
  width: 220px;
  height: 220px;
  bottom: -110px;
  left: -110px;
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
  appearance: none;
  -moz-appearance: textfield;
}
/* 移动端适配 */
.wid{
  width: 50%;
}
/* 标题变色 */
@media (max-width: 980px) {
  .mobile-view{
    height: 70vh;
    width: 100vw;
  }
  .wid{
    width: 80%;
  }
}
</style>