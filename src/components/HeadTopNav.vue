<template>
  <!-- 标题栏 -->
  <div
    class="flex items-center justify-between w-4/5 pt-12 pb-2 mx-auto border-b-2 border-blue-400"
  >
    <!-- 标题 -->
    <h1
      class="flex items-center w-full text-2xl font-bold tracking-widest lg:text-3xl"
    >
      关于光点计划
      <span class="inline-block w-24 h-1 mx-5 bg-black"></span> <slot></slot>
    </h1>

    <div class="flex shrink-0">
      <!-- 主页按钮 -->
      <div
        class="flex items-center gap-2 px-2 transition-all group shrink-0 text-zinc-400 lg:hover:-translate-y-1 lg:hover:scale-105"
      >
        <svg
          class="icon fill-zinc-400 group-hover:fill-sky-400"
          aria-hidden="true"
        >
          <use xlink:href="#icon-home"></use>
        </svg>
        <button
          class="group-hover:text-sky-400"
          @click="router.push({ name: 'home' })"
        >
          返回首页
        </button>
      </div>
      <!-- 立即报名 -->
      <div
        v-if="routeName != 'userCenter'"
        class="flex items-center gap-2 px-2 transition-all group shrink-0 text-zinc-400 lg:hover:-translate-y-1 lg:hover:scale-105"
      >
        <svg
          class="icon fill-zinc-400 group-hover:fill-sky-400"
          aria-hidden="true"
        >
          <use xlink:href="#icon-zhuce"></use>
        </svg>
        <button
          @click="router.push({ name: 'userCenter' })"
          class="group-hover:text-sky-400"
        >
          立即报名
        </button>
      </div>
      <!-- 查看更多 -->
      <div
        v-if="routeName != 'more'"
        class="flex items-center gap-2 px-2 transition-all group shrink-0 text-zinc-400 lg:hover:-translate-y-1 lg:hover:scale-105"
      >
        <svg
          class="icon fill-zinc-400 group-hover:fill-sky-400"
          aria-hidden="true"
        >
          <use xlink:href="#icon-gengduo"></use>
        </svg>
        <button
          class="group-hover:text-sky-400"
          :disabled="routeName === 'more'"
          @click="router.push({ name: 'more' })"
        >
          查看更多
        </button>
      </div>
      <!-- 方向介绍 -->
      <div
        v-if="routeName != 'about'"
        class="flex items-center gap-2 px-2 transition-all group shrink-0 text-zinc-400 lg:hover:-translate-y-1 lg:hover:scale-105"
      >
        <svg
          class="icon fill-zinc-400 group-hover:fill-sky-400"
          aria-hidden="true"
        >
          <use xlink:href="#icon-about"></use>
        </svg>
        <button
          class="group-hover:text-sky-400"
          :disabled="routeName === 'about'"
          @click="router.push({ name: 'about' })"
        >
          方向介绍
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const routeName = route.name;
</script>