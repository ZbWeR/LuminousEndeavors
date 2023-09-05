<template>
  <div class="h-full overflow-hidden" id="flip-cards-root-box">
    <div
      class="relative w-full h-full text-center transition-all duration-700 text-[#2dd4bf]"
      id="card-box"
    >
      <div
        class="border-2 border-[#0ea5e9] absolute flex items-center justify-center w-full h-full bg-transparent rounded-md backface-hidden"
      >
        <!-- 标题 -->
        <p class="text-base" id="title">{{ cardContent.project }}</p>
      </div>
      <div
        style="background-color: rgba(123, 214, 207, 0.9)"
        class="absolute w-full h-full bg-[#97e6de] text-white border border-[#86d6cf] rounded rotateY-180 backface-hidden"
      >
        <!-- 负责人 -->
        <p class="my-3 text-lg text-center xl:my-4 xl:text-2xl">
          {{ cardContent.leader }}
        </p>
        <!-- 简介 -->
        <p
          class="px-2 text-sm break-all xl:text-base line-clamp-[8] xl:line-clamp-6"
        >
          {{ cardContent.abstract }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { cardContent } = defineProps(["cardContent"]);
</script>

<style lang="less" scoped>
#flip-cards-root-box:hover #card-box {
  transform: rotateY(180deg);
}
#card-box {
  transform-style: preserve-3d;
}
.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.rotateY-180 {
  transform: rotateY(180deg);
}
@media (max-width: 980px) {
    #title{
      font-size: 1rem;
      line-height: 1.25rem;
    }
}
</style>