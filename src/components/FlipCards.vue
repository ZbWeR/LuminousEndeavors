<template>
  <div class="h-full overflow-hidden" id="flip-cards-root-box">
    <div
      class="relative w-full h-full text-center transition-all duration-700 text-[#2dd4bf]"
      id="card-box"
    >
      <div
        class="border-2 border-[#0ea5e9] absolute flex items-center justify-center w-full h-full bg-transparent rounded-md backface-hidden"
      >
        <p class="text-xl">{{ cardContent.project }}</p>
      </div>
      <div style="background-color: rgba(123,214,207,0.9)"
        class="absolute w-full h-full bg-[#97e6de] text-white border border-[#86d6cf] rounded rotateY-180 backface-hidden"
      >
        <p class="my-5 text-2xl text-center">{{ cardContent.leader }}</p>
        <p class="px-2 text-base break-all line-clamp-6">
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
</style>