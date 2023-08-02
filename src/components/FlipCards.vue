<template>
  <div class="h-full overflow-hidden" id="flip-cards-root-box">
    <div
      class="relative w-full h-full text-center transition-all duration-700 text-[#E7CD79]"
      id="card-box"
    >
      <!-- bg-[url('../assets/tarot/card.jpg')] bg-no-repeat bg-cover -->
      <div
        class="border-[#E7CD79] absolute flex items-center justify-center w-full h-full bg-transparent border rounded-md backface-hidden"
      >
        <p class="text-lg">{{ cardContent.project }}</p>
      </div>
      <div
        class="absolute w-full h-full bg-[#E7CD79] text-slate-800 border border-[#E7CD79] rounded rotateY-180 backface-hidden"
      >
        <p class="my-5 text-lg text-center">{{ cardContent.leader }}</p>
        <p class="px-2 text-sm break-all line-clamp-6">
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