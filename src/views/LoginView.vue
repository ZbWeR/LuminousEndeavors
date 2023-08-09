<template>
  <div class="flex items-center justify-center w-screen h-screen bg-sky-50">
    <div
      class="flex w-3/5 overflow-hidden bg-sky-100 rounded-xl h-2/3 rootShadow"
    >
      <!-- 登录 -->
      <div class="flex flex-col w-1/3 h-full bg-sky-50">
        <form
          action=""
          method="post"
          class="flex flex-col items-center justify-center w-full h-full"
        >
          <h1
            class="mb-20 font-mono text-4xl font-bold tracking-widest text-center"
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
      <div class="w-2/3 h-full bg-sky-50">
        <form
          action=""
          method="post"
          class="flex flex-col items-center justify-center w-full h-full"
        >
          <h1
            class="mb-20 font-mono text-4xl font-bold tracking-widest text-center"
          >
            Sign Up
          </h1>
          <input
            class="block w-1/2 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none placeholder:text-sm inputShadow bg-sky-50"
            type="text"
            placeholder="UserName"
          />
          <input
            class="block w-1/2 px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <!-- 年龄与性别 -->
          <div class="flex justify-between w-1/2 gap-4 mt-4">
            <!-- 年龄 -->
            <input
              class="w-16 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
              type=""
              placeholder="Age"
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
                  v-model="checkedValue"
                  :checked="checkedValue.index === index"
                />
                <span
                  class="relative z-10 flex items-center justify-center h-full text-sm transition-all rounded-lg cursor-pointer text-slate-400 peer-checked:text-white"
                  >{{ item }}</span
                >
              </label>
              <div
                :style="{
                  left: `${(checkedValue.index * 100) / 3}%`,
                }"
                class="absolute flex items-center justify-center w-1/3 h-full transition-all rounded-lg bg-sky-400"
              ></div>
            </div>
          </div>
          <!-- 电话号码 -->
          <input
            class="block w-1/2 px-4 py-2 mt-4 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
            type="text"
            placeholder="PhoneNumber"
          />
          <div
            class="flex items-center justify-between w-1/2 py-2 pl-4 pr-2 mt-4 duration-300 rounded-lg outline-none inputShadow bg-sky-50"
          >
            <input
              class="flex-1 tracking-wider outline-none placeholder:text-sm bg-sky-50"
              type="text"
              placeholder="请输入验证码..."
            />
            <!-- TODO:节流处理 -->
            <button
              class="text-sm shrink-0 disabled:cursor-not-allowed disabled:text-slate-400"
            >
              获取验证码
            </button>
          </div>
          <!-- 验证码 -->
          <!-- <div class="flex justify-between w-1/2 mt-4">
            <input
              class="w-3/5 px-4 py-2 tracking-wider duration-300 rounded-lg outline-none inputShadow bg-sky-50 placeholder:text-sm"
              type="text"
              placeholder="请输入验证码..."
            />
            <button
              class="box-border w-1/3 py-2 text-sm text-white transition-all rounded-lg shadow-md hover:bg-sky-500 hover:scale-95 bg-sky-300"
            >
              发送验证码
            </button>
          </div> -->

          <button
            @click.prevent="
              console.log(((checkedValue.value.index + 1) * 100) / 3)
            "
            class="shadow-md box-border w-1/4 px-1 py-3 mt-12 tracking-[0.5em] indent-[0.5em] text-white transition-all rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400"
          >
            注册
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const checkedValue = ref({ value: "", index: 1 });
console.log(checkedValue.value.index);
</script>

<style scoped>
.rootShadow {
  box-shadow: 6px 6px 8px #d1d9e6, -6px -6px 8px rgba(220, 220, 220, 0.7);
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