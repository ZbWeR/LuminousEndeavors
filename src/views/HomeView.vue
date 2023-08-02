<template>
  <div class="w-full h-screen overflow-x-hidden overflow-y-auto select-none">
    <!-- 首屏内容: 动态背景 / 标题 / slogan -->
    <div class="relative flex items-center justify-center w-full h-full">
      <!-- 动态背景 -->
      <video
        src="../assets/bg.mp4"
        autoplay
        muted
        disablepictureinpicture
        playsinline
        loop
        style="width: 100%; height: 100vh; object-fit: fill"
        class="absolute top-0 left-0 -z-10 brightness-50"
      ></video>
      <!-- 展示内容 -->
      <div class="relative flex flex-col items-center py-10 text-white group">
        <i
          class="absolute top-0 w-0 h-1 transition-all -rotate-45 -translate-x-1/2 bg-teal-400 shadow-md shadow-teal-200 -left-3 group-hover:w-1/4"
        ></i>
        <i
          class="absolute bottom-0 w-0 h-1 transition-all -rotate-45 translate-x-1/2 bg-teal-400 shadow-md -right-3 group-hover:w-1/4 shadow-teal-200"
        ></i>
        <h1
          class="font-mono text-transparent transition-all lg:text-8xl time-title"
        >
          2 0 2 3
        </h1>
        <h1
          class="font-mono lg:text-6xl group-hover:drop-shadow-[2px_2px_4px_#31a697]"
        >
          Luminous Endeavors.
        </h1>
        <div
          class="flex items-center w-4/5 mt-5 transition-all justify-evenly text-zinc-400 group-hover:text-white"
        >
          <i class="w-0 h-px transition-all bg-zinc-400 group-hover:w-1/4"></i>
          <p class="font-serif tracking-widest lg:text-2xl">
            &bull;&nbsp;光 点 计 划&nbsp;&bull;
          </p>
          <i class="w-0 h-px transition-all bg-zinc-400 group-hover:w-1/4"></i>
        </div>
        <!-- 按钮 -->
        <div class="flex justify-around w-1/2 my-3">
          <button
            class="font-serif hover:shadow-[5px_5px_4px_#79bbad] hover:-skew-x-12 box-border px-4 py-1 text-xl transition-all border border-zinc-400 text-zinc-400 hover:bg-teal-400 hover:border-none group-hover:text-white group-hover:border-white"
          >
            立即报名
          </button>

          <button
            class="font-serif hover:shadow-[5px_5px_4px_#79bbad] hover:-skew-x-12 box-border px-4 py-1 text-xl transition-all border border-zinc-400 text-zinc-400 hover:bg-teal-400 hover:border-none group-hover:text-white group-hover:border-white"
          >
            查看方向
          </button>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="w-full pt-20 bg-slate-800">
      <div class="container mx-auto">
        <!-- 活动介绍 -->
        <div
          class="p-3 text-white rounded bg-gradient-to-r to-[#37ecba] from-[#72afd3]"
        >
          <h1 class="text-2xl">🎨 活动介绍</h1>
          <p class="mt-1 indent-4">
            为响应创新工坊有关开源项目活动号召、强化同学们面向计算机基础与底层架构的知识，<span
              class="text-lg text-slate-800"
              >微光</span
            >工作室携手<span class="text-lg text-slate-800">一路</span
            >工作室，联合各方向实力强悍的学长学姐推出<b class="text-lg"
              >「光点计划」</b
            >开源主题项目实践活动，面向全院邀请有志于学习计算机基础与底层关键技术、渴望参与实验式实践学习、希望收获项目经验的同学们开放多方向的实践项目，并在知识学习、项目构思和代码实现等方面提供全方位指导。
          </p>
        </div>
        <div
          class="flex justify-between mt-10 overflow-hidden rounded bg-slate-100"
        >
          <!-- 你将参与 -->
          <div class="w-1/2 p-3 bg-slate-100">
            <h1 class="text-2xl">🚀 你将参与</h1>
            <ul class="mt-1 ml-4">
              <li
                class="leading-loose tracking-widest list-none indent-1"
                v-for="(item, index) in missionsText"
                :key="index"
              >
                <span
                  class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                ></span>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="w-1 mx-1 my-10 bg-teal-400"></div>
          <!-- 你将获得 -->
          <div class="w-1/2 p-3 bg-slate-100">
            <h1 class="text-2xl">🎯 你将获得</h1>
            <ul class="mt-1 ml-4">
              <li
                class="leading-loose tracking-widest list-none indent-1"
                v-for="(item, index) in advantages"
                :key="index"
              >
                <span
                  class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                ></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 开设方向 -->
        <div class="w-full mt-10 text-white">
          <h1 class="font-mono lg:text-3xl -tracking-widest"># 开 设 方 向</h1>
          <div class="flex justify-around w-full h-56 gap-5 mx-auto mt-5">
            <FlipCards
              class="w-[15%]"
              :cardContent="item"
              v-for="(item, index) in options"
              :key="index"
            ></FlipCards>
          </div>
        </div>
        <!-- 活动流程 -->
        <div class="w-full mt-10 text-white">
          <h1 class="font-mono lg:text-3xl -tracking-widest"># 活 动 流 程</h1>
          <img src="../assets/111.png" alt="" />
        </div>
        <!-- 版权与备案信息 -->
        <CopyRights>京ICP备18012699号-3</CopyRights>
      </div>
    </div>
  </div>
</template>

<script setup>
import FlipCards from "@/components/FlipCards.vue";
import CopyRights from "@/components/CopyRights.vue";

const missionsText = [
  "从开设的多个项目方向中选择感兴趣的方向，了解学科关键知识与行业前沿实践；",
  "参与实验学习式项目实践，亲身体验相关方向的学长学姐精心设计的实验和指引；",
  "从简单基础渐入佳境，不占用太多课余时间的同时循序渐进探索行业技术内幕；",
  "从0开始，用自己的代码实践整个项目历程，为简历添加高质量项目经验",
];
const advantages = [
  "一段能够点亮简历的高质量项目经历；",
  "一次大创计划和学科竞赛的完美预备；",
  "一次针对感兴趣关键领域的深入学习；",
  "与相关方向大牛学长学姐的交流机会；",
  "活动项目结题证书、单项优秀奖状和定制小礼品；",
  "完整完成项目流程者可以免除笔试及面试加入微光工作室和一路工作室。",
  "...",
];
const options = [
  {
    project: "处理器设计",
    leader: "孟沛",
    abstract: "...",
  },
  {
    project: "编译技术",
    leader: "刘诗月",
    abstract: "...",
  },
  {
    project: "机器学习与AI",
    leader: "陈佳华",
    abstract: "...",
  },
  {
    project: "分布式系统与云计算",
    leader: "林涵远",
    abstract:
      "该项目是一个基于选主机制的master高可用mapreduce并行计算框架。它旨在实现一个能够将计算任务并行化的简单框架，并通过选主机制实现master的高可用性。项目的核心是实现mapreduce并行计算框架，这是一种谷歌提出的分布式计算方法，通过拆分任务、分派给不同计算机执行并最后合并结果来提高效率。另外，为了保证系统的高可用性，项目还将实现选主机制，确保当master节点挂掉时能够自动选举新的master节点。整体而言，该项目不算困难，但需要进行论文学习和调试工作。",
  },
  {
    project: "操作系统",
    leader: "李佳轩",
    abstract: "...",
  },
];
// let activeIndex = 3;
// function handleScroll(e) {
//   console.log(e);
// }
</script>

<style lang="less" scoped>
.time-title {
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: #fff;
}
.group:hover .time-title {
  text-shadow: 6px 6px #42b8aa;
}
</style>