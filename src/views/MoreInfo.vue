<template>
  <div
    class="flex flex-col items-center justify-between w-screen min-h-screen bg-zinc-100"
    style="border: 20px solid;
border-image-source: 
					repeating-linear-gradient(-45deg, 
						cyan 0, 
						cyan 15px,
						transparent 15px,
                        transparent 30px,
                        tomato 30px,
                        tomato 45px,
                        transparent 45px,
                        transparent 60px);

border-image-slice: 20;"
  >
    <!-- 标题栏 -->
    <HeadTopNav class="title">更 多 信 息</HeadTopNav>
    <div class="flex w-4/5 p-4 mt-8 bg-white shadow-md h-auto lg:mx-auto relative">
      <!-- QQ群 -->
      <div class="mr-6 ml-3 text-center" style="width: 300px;position: fixed;left: 180px;">
        <h1 class="font-bold leading-8">详情可入群821363686了解</h1>
      <img src="../assets/QQ.png" alt=""  >
      </div>
      <!-- 分隔 -->
      <div class="h-auto w-1 bg-[#f4f4f5] rounded-lg" style="margin-left: 30%;"></div>
      <!-- 正文 -->
      <div class="main-text">
        <p><span class="font-w">大型活动名称：</span>光点计划-开源主题项目实践活动</p>
        <p><span class="font-w">活动主办：</span>软件学院创新工坊</p>
        <p><span class="font-w">活动承办：</span>微光工作室、一路工作室</p>
        <p><span class="font-w">活动介绍：</span>为响应创新工坊有关开源项目活动号召、强化同学们面向计算机基础与底层架构的知识，
          微光工作室携手一路工作室，联合各方向实力强悍的学长学姐推出「光点计划」开源主题项目实践活动，面向全院邀请有志于学习计算机基础与底层关键技术、
          渴望参与实验式实践学习、希望收获项目经验的同学们开放多方向的实践项目，并在知识学习、项目构思和代码实现等方面提供全方位指导。</p>
        
        <p class="font-w">活动开设方向：</p>
        <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in options"
                  :key="index"
                >
                  <!-- <span
                    class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> -->
                  {{ item.project}}:{{ item.leader }}
                </li>
              </ul>
        <p class="font-w">面向人群：</p>
        <p>项目实践题目面向全院同学公开，但限于指导力量有限，进展指导、统一进度评估、线下结题见面会和证书颁发等环节仅面向<span class="font-w">新大一</span>、
          <span class="font-w">新大二</span>同学开放，敬请见谅。</p>
        <p class="font-w">活动规则：</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in rules"
                  :key="index"
                >
                  <span
                    class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span>
                  {{ item }}
                </li>
              </ul>
        <p class="font-w">活动流程细则：</p>
        <!-- 方向负责人部分 -->
        <p class="font-w">方向负责人流程</p>
        <p>命题阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 材料准备</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in preparations"
                  :key="index"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  {{ item }}
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 命题</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in setquestions"
                  :key="index"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  {{ item }}
                </li>
              </ul>
        </ul>
        <p>项目进行阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 答疑与辅导</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in dayifudao"
                  :key="index"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  {{ item }}
                </li>
              </ul>
        </ul>
        <p>统一进度评估阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 项目内进度评估</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span> 根据同学提交的相应代码/学习笔记等资料，对选择自己项目的同学进行进度评估，选出活动任务完成度较高的同学，
                  向活动策划组提交名单。活动策划组汇总后公布通过统一进度评估的同学名单。统一进度评估应留下评估笔记等可追溯记录。
                </li>
              </ul>
        </ul>
        <p>线下结题见面会阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 约定见面会</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in meeting"
                  :key="index"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  {{ item }}
                </li>
              </ul>
        </ul>
<!-- 同学部分 -->
        <p class="font-w">同学参与流程</p>
        <p>宣讲阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 参与线下活动宣讲会，了解活动流程和方向细节（非必须参加）</p>
        </ul>
        <p>报名阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 选择一个感兴趣的项目</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  阅读各方向项目介绍，了解各方向涉及领域和技术，选择一个自己最感兴趣的方向，期间可以通过联系方式与方向负责人交流咨询
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 提交报名表</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                  v-for="(item, index) in baomingbiao"
                  :key="index"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  {{ item }}
                </li>
              </ul>
        </ul>
        <p>项目进行阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 知识学习与方案研究</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  根据方向负责人提供的详细指引和项目信息，学习相关知识并着手研究项目解决方案设计
                </li>
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  可积极与方向负责人交流，扩展思路并收获更多知识
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 代码实现与测试</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  根据设计的解决方案进行代码实现，完成可能的测试要求，在开源平台提交代码
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 学习历程与设计思路记录</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  在知识学习和方案设计及具体实现过程中完成一定的随笔记录，留下学习的收获和进度评估的依据
                </li>
              </ul>
        </ul>
        <p>统一评估阶段：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 按方向要求提交进度评估材料</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  根据不同方向的不同要求，提交项目进度相关的学习记录和实现代码等给方向负责人
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 等待统一进度评估通过</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  方向负责人评估后汇总给活动策划组，统一发布通过名单。
                </li>
              </ul>
        </ul>
        <p>线下结题见面会：</p>
        <ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 参与见面会</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  与方向负责人约定彼此空闲时间见面交流，分享项目解决方案的设计和实现经历，交流心得与相关领域知识，并当场颁发结题证书
                </li>
              </ul>
          <p><span class="inline-block w-2 h-2 mr-1 rounded-full bg-sky-500"
                  ></span> 获得免试进入工作室资格</p>
          <ul class="mt-1 ml-4">
                <li
                  class="leading-loose tracking-widest list-none indent-1"
                >
                  <span style="border: 1px solid; border-color:rgb(14 165 233) ;"
                    class="inline-block w-2 h-2 mr-1 rounded-full"
                  ></span>
                  结合线下见面交流会表现，活动策划组授予免试加入工作室资格。
                </li>
              </ul>
        </ul>
      </div>
    </div>
    <CopyRights></CopyRights>
  </div>
</template>

<script setup>
import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";


const options = [
  {
    project: "处理器设计",
    leader: "孟沛",
    
  },
  {
    project: "编译原理",
    leader: "刘诗月",
    
  },
  {
    project: "计算机视觉与机器学习",
    leader: "陈佳华",
   
  },
  {
    project: "分布式系统与云计算",
    leader: "林涵远",
  
  },
  {
    project: "操作系统",
    leader: "李佳轩",
  },
];
const rules=[
  "实践题目开放后，同学可以从开设的方向中任选其一，提交报名表正式开始参与「光点计划」",
"根据所选方向题目要求，同学完成对应的知识学习与项目实现，期间可以根据提供的联系方式与方向负责人友好交流、寻求指导",
"项目实践时间结束，同学按方向要求提交项目进度自我评估表及开源代码仓库，活动承办方完成统一进度评估",
"活动承办方通知统一进度评估完成度较高的同学参与线下结题见面会",
"同学参与线下结题见面会，与方向负责人面对面交流项目心得与进展历程，获得活动项目结题证书",
"在活动项目进展中完成度较高且结题见面会表现良好的同学，根据工作室情况和各方向的特殊考量综合考虑同意，可获得免试进入微光工作室和一路工作室的资格"
]
const preparations=[
  "自我介绍（100-200字左右），简单介绍自己重点学习的方向、取得的成果等，附带QQ等联系方式，以便同学提前熟悉",
  "活动方向简介（400字左右），介绍项目对应的技术方向，可以从方向概念、涉及领域/技术、应用场景、发展前景等角度出发，吸引同学们的研究兴趣",
  "项目简介（200-300字左右），概要性阐述项目要做什么、可以学到什么，分为哪几个阶段，加深同学对项目的兴趣和理解",
  "QA、Tips、适合人群或学习建议，回答一些可能的问题，提出建议和帮助",
 "提交方式和进度评估/考核方式，由于各方向的开展形式可能不同，统一进度评估和线下结题见面会的开展形式会有所不同，应提前向同学说明",
  "字数和形式不作强制要求，起介绍和说明作用即可"
]
const setquestions=[
  "与活动主题对应，应当采取完成一个或一系列与方向相关的项目的形式来编排命题。项目推进应当循序渐进，可从同学较熟悉的基础知识开始，采用分模块等方式逐步深入，最终完成整个项目的搭建",
  "原则上活动对方向命题结构和作答要求不做限制，方向负责人可自由选择作答形式和提交方法。活动提倡采取“参与开源贡献”、“在国产开源平台提交代码”的方式完成项目提交，同时建议要求同学提交项目解决思路/学习随笔等，作为统一进度评估和线下结题见面会的考察依据",
  "考虑到活动背景和面向对象，同学的主要任务内容应是解决方案设计与代码实现，可适当减少知识性问答",
  "命题的整体工作量应考虑同学空余时间控制在一个月内完成"
]
const dayifudao=[
  "与参与自己项目的同学积极交流，解答同学的疑问，给予适当指导，但不应向同学透露项目具体实现方案",
  "如果导师（方向负责人）与参与同学有规则或项目评估上的意见冲突，可上诉活动策划组再评估"
]
const meeting=[
  "对通过统一进度评估的同学，由方向负责人约定彼此空闲时间做见面交流，活动策划组可陪同交流。过程中向同学面对面了解项目解决方案的设计和实现经历，交流心得与相关领域知识，并当场颁发结题证书",
  "结合线下见面交流会表现与活动策划组讨论，决定最终获得免试进入工作室资格名单"
]
const baomingbiao=[
  "在活动Q群下载报名表并填写提交到活动策划组统一邮箱",
  "报名表主要作用是让方向负责人熟悉将要指导的同学，不作考核依据",
  "活动策划组会将报名表转发给对应负责人，并公布报名名单以供确认"
]
</script>
<style>
.main-text{
  font-size: 16px;
  width: 1200px;
  padding: 16px;
  padding-left: 3rem;
  line-height: 2rem;
}
.main-text .font-w{
  font-weight: 700;
  font-size: 17px;
}
.title{
  color: transparent;
 background:
            repeating-linear-gradient(-45deg,
            transparent,
            transparent 25%,
            tomato 0,
            tomato 50%),
            repeating-linear-gradient(45deg,
            transparent,
            transparent 25%,
            dodgerblue 0,
            dodgerblue 50%), wheat;
background-size: 50px 50px;
background-blend-mode: multiply;
-webkit-background-clip: text;
background-clip: text;
}
</style>