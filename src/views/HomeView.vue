<template>
  <!-- TODO:整体样式修改,白底 -->
  <!-- TODO:考虑增加一个过渡动画 -->
  <div>
    <div v-show="isScrollDown"><HomeNav></HomeNav></div>
  <div
    class="w-full h-screen overflow-x-hidden overflow-y-auto select-none"
    ref="fullPage"
    @scroll="controlHeadNav"
  >
    <!-- 首屏内容: 动态背景 / 标题 / slogan -->
    <div
      class="relative flex items-center justify-center w-full h-full"
      @wheel="handleScroll"
    >
      <!-- TODO:loader -->
      <!-- 动态背景 -->
      <video
        src="../assets/bg.mp4"
        autoplay
        preload
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
            @click="router.push({ name: 'userCenter' })"
            class="font-serif hover:shadow-[5px_5px_4px_#79bbad] hover:-skew-x-12 box-border px-4 py-1 text-xl transition-all border border-zinc-400 text-zinc-400 hover:bg-teal-400 hover:border-none group-hover:text-white group-hover:border-white"
          >
            立即报名
          </button>

          <button
            class="font-serif hover:shadow-[5px_5px_4px_#79bbad] hover:-skew-x-12 box-border px-4 py-1 text-xl transition-all border border-zinc-400 text-zinc-400 hover:bg-teal-400 hover:border-none group-hover:text-white group-hover:border-white"
            @click="router.push({ name: 'about' })"
          >
            查看方向
          </button>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="relative w-full pt-20 main-bg" ref="mainContent">
      <div class="w-4/5 mx-auto">
        <!-- 活动介绍&参与获得 -->
        <section class="relative flex justify-between" id="info">
          <!-- 活动内容 -->
          <div
            style="background-color: #fff"
            class="w-3/5 overflow-hidden rounded-lg shadow"
            id="content"
          >
            <!-- 你将参与 -->
            <div class="p-3">
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
            <!-- 分隔符 -->
            <div class="flex justify-center">
              <div
                class="inline-block w-2 h-2 my-2 bg-teal-400 rounded-lg"
              ></div>
              <div
                class="inline-block w-4/5 h-2 mx-4 my-2 bg-teal-400 rounded-lg"
              ></div>
              <div
                class="inline-block w-2 h-2 my-2 bg-teal-400 rounded-lg"
              ></div>
            </div>
            <!-- 你将获得 -->
            <div class="p-3">
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
          <!-- 活动介绍 & logo-->
          <div class="flex flex-col items-center justify-between w-1/3 " id="introduce">
            <h1 class="font-sans text-2xl xl:text-3xl 2xl:text-4xl mobile-hide">
              /* 开源项目主题活动 */
            </h1>

            <!-- 活动介绍 -->
            <div
              class="transition-all duration-500 overflow-hidden cursor-pointer h-fit w-full max-h-96 p-3 text-white rounded-lg bg-gradient-to-br to-[#5dd589] from-[#87cefa] shadow"
             
            >
              <h1 class="h-8 text-2xl">🎨 活动介绍</h1>
              <p class="mt-1 overflow-hidden text-base tracking-wider indent-4">
                为响应创新工坊有关开源项目活动号召、强化同学们面向计算机基础与底层架构的知识，<span
                  class="text-lg font-semibold text-slate-800"
                  >微光</span
                >工作室携手<span class="text-lg font-semibold text-slate-800"
                  >一路</span
                >工作室，联合各方向实力强悍的学长学姐推出<b class="text-lg"
                  >「光点计划」</b
                >开源主题项目实践活动，面向全院邀请有志于学习计算机基础与底层关键技术、渴望参与实验式实践学习、希望收获项目经验的同学们开放多方向的实践项目，并在知识学习、项目构思和代码实现等方面提供全方位指导。
              </p>
            </div>
            <!-- logo -->
            <div class="flex flex-col items-center justify-center 2xl:flex-row">
              <img
                src="../assets/yilu-logo.png"
                class="h-28 xl:h-32 2xl:h-36"
              />
              <img
                src="../assets/wei-logo1.png"
                class="h-28 xl:h-32 2xl:h-36"
                alt=""
              />
            </div>
          </div>
        </section>

        <!-- 开设方向 -->
        <div class="w-full p-8 mt-10 bg-white rounded-lg shadow text-slate-950">
          <h1
            class="font-mono lg:text-3xl -tracking-widest"
            style="font-weight: bolder"
          >
            # 开 设 方 向
          </h1>
          <div
            class="flex justify-around w-full h-56 gap-5 mx-auto mt-5"
            style="border-color: #0ea5e9"
          >
            <FlipCards
              @click="$router.push({ name: 'about' })"
              class="w-[15%] cursor-pointer"
              :cardContent="item"
              v-for="(item, index) in options"
              :key="index"
            ></FlipCards>
          </div>
        </div>
        <!-- 活动流程 -->
        <div class="w-full pl-8 pr-8 mt-10 text-black">
          <h1
            class="font-mono font-bold lg:text-3xl -tracking-widest"
            style="font-weight: bolder"
          >
            # 活 动 流 程
          </h1>
          <img
            class="w-full mx-auto xl:w-4/5"
            src="../assets/graph3.png"
            alt=""
          />
        </div>
        <!-- 版权与备案信息 -->
        <CopyRights></CopyRights>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import FlipCards from "@/components/FlipCards.vue";
import CopyRights from "@/components/CopyRights.vue";
import HomeNav from "@/components/HomeNav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// import { debounce } from "@/utils/debounce";

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
    abstract:
      "你是否好奇在计算机中，如何利用元件的连接和组合来完成复杂的计算任务呢？处理器设计就是解决这个问题的过程。通过学习处理器设计，你将了解到计算机最底层的工作原理：二进制数据处理。同时，你还可以了解到一个处理器设计可能对上层软件性能带来的影响。",
  },
  {
    project: "编译原理",
    leader: "刘诗月",
    abstract:
      "你是否好奇在你编写的代码中所使用的函数、变量和逻辑是如何被翻译成计算机能够执行的指令的呢？你是否好奇编译世界中的前后中端是什么？你听说过LLVM吗？你是否想从上层应用走下底层，探索编译与汇编的奥秘？",
  },
  {
    project: "计算机视觉与机器学习",
    leader: "陈佳华",
    abstract:
      "无人售货机前扫脸支付,场所门禁系统人脸通行,公安监控犯罪分子身份捕获,自动驾驶路牌识别,图像识别病理诊断,这些强大科技背后的原理是什么呢？欢迎来到图像分类的世界",
  },
  {
    project: "分布式系统与云计算",
    leader: "林涵远",
    abstract:
      "云计算、集群、分布式、虚拟化、高可用...... 这些名词你是否耳熟？无论是天猫双十一秒杀、抖音视频流业务还是云原神负载均衡，分布式系统已然涉及现代互联网业务的方方面面",
  },
  {
    project: "操作系统",
    leader: "李佳轩",
    abstract:
      "说到操作系统，不知道大家对挂在嘴边的windows是否有所了解，它就是我们最广为熟知操作系统。操作系统是计算机系统中至关重要的组成部分，负责管理计算机的各种资源，以及协调不同程序之间的执行，就连你目前查看我们官网的硬件屏幕也离不开操作系统的管理。",
  },
];

const fullPage = ref(null);
const mainContent = ref(null);

// TODO:防抖处理
function handleScroll(e) {
  const isDown = e?.deltaY > 0 ? true : false;
  const targetHeight = mainContent.value.offsetTop;
  if (isDown) {
    fullPage.value.scrollTo({
      top: targetHeight,
      behavior: "smooth",
    });
  }
}

let oldScroll = 0;
const isScrollDown = ref(false);

function controlHeadNav(e) {
  let scrollTop = e.target.scrollTop;
  isScrollDown.value = scrollTop > oldScroll;
  oldScroll = scrollTop;
}
</script>

<style lang="less" scoped>
.time-title {
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: #fff;
}
.group:hover .time-title {
  text-shadow: 6px 6px #42b8aa;
}

.main-bg {
  background-repeat: no-repeat;
  background-position: center -187px;
  background-size: 100% 50%;
  background-color: #f2f3f5;
}
.shadow {
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: all 0.1s ease-in;
}
.shadow:hover {
  transform: translate3d(0, 0, 0);
  scale: 1.01;
}
@media (max-width: 980px) {
  #info{
    display: block;
     #content{
      width: 100%;
     }
     .mobile-hide{
      display: none;
     }
  }
  #introduce{
    margin-top: 2em;
      width: 100%;
     }
}
</style>