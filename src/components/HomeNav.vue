<template>
  <div
    class="opacity-80 box-border fixed top-0 z-10 w-screen h-16 text-white shadow-[0_2px_5px_rgba(255,255,255,.3)] bg-gradient-to-r from-[#257afa] to-[#2a303a]"
  >
    <div class="flex justify-between w-10/12 h-full mx-auto">
      <div class="flex items-center h-full">
        <img src="../assets/logo.png" alt="" class="h-full py-2" />
        <h1 class="font-sans text-2xl">&ensp;光 点 计 划</h1>
      </div>
      <div class="flex items-center h-full gap-4">
        <button
          @click="$router.push({ name: 'userCenter' })"
          class="h-full px-4 transition-all hover:scale-110 hover:bg-teal-400"
        >
          立即报名
        </button>
        <button
          @click="$router.push({ name: 'about' })"
          class="h-full px-4 transition-all hover:scale-110 hover:bg-teal-400"
        >
          查看方向
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>

@media (max-width: 980px) {
    h1{
      font-size: 1rem;
    }
    button{
      padding:0 0;
    }
}
</style>