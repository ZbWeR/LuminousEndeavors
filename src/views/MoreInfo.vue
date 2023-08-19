<template>
  <div
    class="flex flex-col items-center justify-between w-screen min-h-screen bg-zinc-100"
  >
    <!-- 标题栏 -->
    <HeadTopNav>更 多 信 息</HeadTopNav>
    <div class="w-4/5 p-4 mt-8 bg-white shadow-md h-72 lg:mx-auto">
      正文内容
    </div>
    <CopyRights></CopyRights>
  </div>
</template>

<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";
</script>