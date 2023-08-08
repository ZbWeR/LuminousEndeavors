<template>
  <div class="w-full bg-zinc-100">
    <!-- 标题栏 -->
    <HeadTopNav>更 多 信 息</HeadTopNav>
    <div
      class="h-72 w-4/5 p-4 mt-8 transition-all bg-white hover:scale-[1.02] lg:mx-auto"
    >
      正文内容
    </div>
    <CopyRights></CopyRights>
  </div>
</template>

<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";
</script>