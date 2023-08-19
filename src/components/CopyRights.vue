<template>
  <div class="w-full pb-10 mt-8 text-sm text-center text-slate-500">
    <p class="w-3/4 h-px mx-auto my-5 bg-slate-500"></p>
    <p>&copy; Copyrights 2023 一路&微光 All rights By Reserved</p>
    <a v-show="record" href="https://beian.miit.gov.cn/">{{ record }}</a>
  </div>
</template>

<script setup>
const record = "";
</script>