<template>
  <div class="w-full bg-zinc-100">
    <!-- 标题栏 -->
    <div
      class="container flex items-center justify-between pt-16 pb-2 mx-auto font-serif border-b-2 border-blue-400"
    >
      <!-- 标题 -->
      <h1 class="flex items-center w-full tracking-widest lg:text-3xl">
        关于光点计划
        <span class="inline-block w-24 h-0.5 mx-5 bg-black"></span> 方 向 介 绍
      </h1>
      <!-- 返回按钮 -->
      <div
        class="flex items-center gap-2 px-2 transition-all group shrink-0 text-zinc-400 lg:hover:-translate-y-1 lg:hover:scale-105"
      >
        <svg
          class="icon fill-zinc-400 group-hover:fill-sky-400"
          aria-hidden="true"
        >
          <use xlink:href="#icon-home"></use>
        </svg>
        <button class="group-hover:text-sky-400">返回首页</button>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="fixed w-32 text-sm lg:left-10 text-slate-400">
      <p class="py-2 border-b text-sky-400 border-sky-400">目录</p>
      <ul>
        <li
          v-for="(item, index) in projectName"
          :key="index"
          class="overflow-hidden leading-loose hover:text-sky-400 whitespace-nowrap text-ellipsis"
        >
          <a :href="`#project${index}`">{{ item }}</a>
        </li>
      </ul>
    </div>

    <!-- 方向介绍正文 -->
    <div
      class="w-4/5 p-4 mt-8 transition-all bg-white hover:scale-[1.02] lg:ml-48 myShadow"
      v-for="(item, index) in projectInfo"
      :key="index"
      :id="`project${index}`"
    >
      <!-- 标题 -->
      <h1 class="text-2xl font-bold tracking-wider text-sky-400">
        {{ item.name }}
      </h1>
      <!-- 负责人介绍 -->
      <div class="p-2 mt-2 border-t border-b">
        <!-- 头衔与联系方式 -->
        <div class="flex justify-between">
          <p class="font-bold tracking-widest">{{ item?.leader?.name }}</p>
          <p class="flex gap-4">
            <span class="px-2 bg-teal-200 rounded-full">{{
              item?.leader?.title
            }}</span>
            <span class="px-2 bg-pink-200 rounded-full">{{
              item?.leader?.grade
            }}</span>
          </p>
          <p>
            QQ:
            <span class="border-b text-sky-400 border-sky-400">{{
              item?.leader?.contact
            }}</span>
          </p>
        </div>
        <!-- 个人经历 -->
        <p class="text-slate-500">
          {{ item?.leader?.experience }}
        </p>
      </div>
      <!-- 方向简介 -->
      <div class="mt-2 border-b">
        <h1 class="text-lg text-sky-400">🎨 方向简介</h1>
        <p
          class="my-1 indent-4"
          v-for="(directionItem, index) in item.directionIntroduction"
          :key="index"
        >
          {{ directionItem }}
        </p>
      </div>
      <!-- 项目简介 -->
      <div class="mt-2">
        <div class="flex items-center justify-between p-2">
          <h1 class="text-lg text-sky-400">📝 项目简介</h1>
          <p class="font-bold">
            {{ item?.projectIntroduction?.name }}
          </p>
        </div>
        <p class="my-1 indent-4" v-if="item?.projectIntroduction?.foreword">
          {{ item?.projectIntroduction?.foreword }}
        </p>
        <ul>
          <li
            v-for="(projectItem, index) in item?.projectIntroduction?.paragraph"
            :key="index"
          >
            <p v-if="index % 2 === 0">
              <span class="inline-block w-2 h-2 bg-teal-400 rounded-lg"></span
              >&nbsp; {{ projectItem }}
            </p>
            <p v-else class="my-1 whitespace-pre-wrap indent-4 text-slate-500">
              {{ projectItem }}
            </p>
          </li>
        </ul>
        <p class="my-1 indent-4" v-if="item?.projectIntroduction?.overview">
          {{ item?.projectIntroduction?.overview }}
        </p>
      </div>
      <!-- 注意事项 -->
      <div class="p-2 mt-2 bg-teal-100 border-2 border-teal-500 rounded">
        <p><span class="font-bold">🔔 注意事项: </span>{{ item?.notice }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const projectName = [
  "分布式系统与云计算",
  "编译原理",
  "处理器设计",
  "机器学习与 AI",
  "操作系统",
  "Q&A",
];

const projectInfo = [
  {
    name: "分布式系统与云计算",
    leader: {
      name: "林涵远",
      title: "微光工作室副主席",
      grade: "2021级嵌入式方向",
      experience:
        "目前在字节跳动视频架构部门实习，主要方向为分布式系统、云计算与运维开发。项目成果有CubeUniverse云原生海量数据存储、MiniDocker、GlimmerMeeting等。曾获第十三届中国大学生服务外包创新创业大赛全国二等奖，在创新创业类、算法类、多媒体类等竞赛中拥有获奖经历。",
      contact: "2071594767",
    },
    directionIntroduction: [
      "云计算、集群、分布式、虚拟化、高可用...... 这些名词你是否耳熟？",
      "分布式系统是由一组通过网络进行通信、为了完成共同的任务而协调工作的计算机节点组成的系统。面对互联网技术与应用的爆炸式发展，分布式系统已经成为了现代化信息系统的必备支撑。无论是天猫双十一秒杀、抖音视频流业务还是云原神负载均衡，分布式系统的思想已然涉及现代互联网业务的方方面面。",
      "分布式系统的天然特性决定了其在各类互联网业务中的地位。一秒千金的高价值业务需要的不可撼动的高可靠性、大规模机器学习GPU集群所协调汇集的海量智能算力、不惧千军万马随时弹性扩充的灵活可扩展性，都是互联网企业在分布式领域投入研发力量的重要原因。",
      "更进一步，随着处理器资源、存储资源、网络资源的虚拟化进展，云计算这种基于互联网和虚拟化技术的新型计算模式正在蓬勃生长。无形的“云”正在用有形的架构承载越来越多的行业应用，“云”上生活触手可及。",
    ],
    projectIntroduction: {
      name: "基于选主机制的master高可用mapreduce并行计算框架",
      foreword: "不要觉得这个项目很难，我们拆开来看",
      paragraph: [
        "什么是并行计算",
        "简单来说，就是把一个完整的计算任务交给多个计算机完成，以此提高效率。一种简单的实现就是把大任务拆成多个小任务，分派给不同计算机执行，再合并执行结果。",
        "首先我们要实现一个mapreduce并行计算框架",
        "mapreduce是什么嘞，简单来说它是一个谷歌提出来的一种实现分布式计算的方法，它实现起来相对简单，通过master和worker的形式组织集群成员，把任务拆分分派，最后收集合并。我们会学习google当年的论文，尝试实现能让计算并行化的简单框架。",
        "其次呢我们要实现一个选主机制，来完成master的高可用",
        "什么意思呢，我们实现的master只有一只，而worker有一堆，论文中也讲了worker挂了会怎么处理。那么如果master挂了呢？我们将再使用分布式系统的一些常用方法，比如选主机制，来完成master的高可用。",
      ],
      overview:
        "总而言之，我们会通过实现项目目标和论文学习的方式，逐步去尝试mapreduce之类一些简单的分布式系统的设计思想，实现一个简单能跑的小系统。总体而言不会很困难，但也需要一定时间的论文学习和调试过程。",
    },
    notice:
      "本项目基于go语言实现，考虑到同学可能没有接触过go语言，本方向的前期工作将围绕语言基础做一些准备，因此不需要担心因为没学过go而影响项目进度。同时go语言本身足够简单，且它的应用也很广泛，所以也不用怕学不懂或是学了没用。总之，大一0基础的小伙伴尝试也是没问题的。",
  },
  {
    name: "编译原理",
    leader: {
      name: "刘诗月",
      title: "微光工作室副主席",
      grade: "2021级卓中卓方向",
      experience:
        "于2023年参加全国大学生计算机系统能力大赛编译系统设计赛（华为毕昇杯）（比赛结果暂未出）。项目成果有sysy语言编译器设计与实现、标准元数据资源库与异构信息系统映射关系的建立等。曾获第十三届中国大学生服务外包创新创业大赛全国二等奖，第十四届中国大学生服务外包创新创业大赛全国三等奖，在校成绩优异，曾获2022年国家奖学金。",
      contact: "1216754835",
    },
    directionIntroduction: [
      "你是否好奇在你编写的代码中所使用的函数、变量和逻辑是如何被翻译成计算机能够执行的指令的呢？你是否好奇编译世界中的前后中端是什么？你听说过LLVM吗？你是否想从上层应用走下底层，探索编译与汇编的奥秘？",
      "欢迎来到编译的世界，编译原理的主要目标是实现高级语言到机器代码的自动转换过程，以实现程序的执行。编译步骤主要由词法分析、语法分析、语义分析、中间代码生成、中间代码优化、目标代码生成、目标代码优化等组成，其中涉及到很多数据结构的设计与很多优化算法的实现，是一个有难度有挑战性的方向。",
      "掌握编译原理后，你可以设计使用自己的新语言。此外，编译原理在数据库底层实现、人工智能领域也都有应用，深度学习编译器已成为未来有前景的新方向。作为底层方向之一，编译的优化还远远没有尽头，与线性代数等高等数学相结合的多面体优化，更针对多核处理器的并行优化等等，都期待着未来更耀眼的发展。",
    ],
    projectIntroduction: {
      name: "自定义语言编译器设计",
      foreword: "",
      paragraph: [
        "编译前端",
        "1. 读懂文法，完成自定义语言的词法分析、语法分析。可选择flex+bison（C/C++）或者Antlr（Java）完成\n2. 设计你需要的简单的数据结构，比如符号表、基本块、函数等，推荐参照llvm的设计方式，当然也可以用简单的三代码设计。\n3. 遍历语法树，实现中间代码生成。",
        "编译中端",
        "1. SSA化（可选择完成）\n2. 中间代码优化（常量传播、公共子表达式、死代码删除、函数内联等等），优化是没有尽头的，欢迎同学们深入尝试。",
        "编译后端",
        "1. 将中间代码翻译成目标汇编代码，架构的话默认选择ARM架构，对RISCV很感兴趣的同学，也可使用RISCV架构。\n2. 寄存器分配（可选，如果时间紧迫但又想尝试，比起图着色，我们更推荐线性扫描分配）",
      ],
      overview: "",
    },
    notice:
      "本项目不要求大家完全杀穿，可选择的完成语言有C、C++、Java。在完成编译前端生成中间代码之后，可选择中间代码优化、后端代码翻译两个方向中的一个继续完成即可，不要求全部做完，尽力就好。希望同学们通过该项目对编译有一个整体上的认识，当然，期待同学们的大展身手。",
  },
  {
    name: "处理器设计",
    leader: {
      name: "孟沛",
      title: "微光工作室副主席",
      grade: "2021级系统与技术方向",
      experience:
        "主要研究方向是计算机体系结构，操作系统。代表项目有GlimmerOS操作系统、NPC单周期处理器，GlimmerMeeting智能会议室管理系统。曾获第14届蓝桥杯软件人才大赛C++程序设计组省级二等奖。",
      contact: "2398696309",
    },
    directionIntroduction: [
      "在《三体》科幻小说中，描述了这样一个计算机：人列计算机。该计算机由3000万士兵组成，规模之大。如今的计算机芯片，同样也是由百万级的元件构成。但是我们只看一个元件的话，它们其实就是简单的与门，或门等元件；在小说中也描述只需要三个士兵就可以构成这样一个元件。当大量元件组合成一个系统的时候，就可以完成一些非常复杂的运算，比如加减乘除。",
      "处理器设计就是如何利用这些元件通过连接组合一个可以完成复杂计算任务的解决过程。然后就是对设计进行优化，使用最少的元件，最小的延迟完成一个计算任务。",
      "通过学习处理设计，你将了解到计算机最底层的工作原理：二进制数据处理，同时你可以了解到一个处理器设计可能对上层软件性能带来的影响。",
    ],
    projectIntroduction: {
      name: "简易处理器设计",
      foreword:
        "根据ISA设计一个简易处理器，并自己编写汇编代码检测设计的处理器实现的正确性。",
      paragraph: [
        "电路描述语言学习:可以选择verilog或者是chisel硬件描述语言。尝试学习使用硬件描述语言描述多路选择器以及加法器。",
        "",
        "仿真环境的使用:学习使用verilator，用仿真环境运行上面两个设计，通过观察波形检查实现的正确性。",
        "",
        "ISA以及微架构学习:学习了解将要设计的ISA特性，以及单周期处理器的架构。",
        "",
        "设计处理器:通过硬件描述语言设计该处理器。",
        "",
        "仿真验证:自己编写测试用汇编代码，用仿真器进行仿真，检测处理器实现的正确性。",
        "",
      ],
      overview: "",
    },
    notice:
      "作为一个项目来说，需要培养自主学习能力。对软件工程的学生来说，数字电路相关知识了解很少。虽然但是，网上的学习资源很多，可以查找学习，同时该项目涉及的深度不深，只要花时间就可以学会。仿真环境是该项目唯一涉及软件的部分，需要大家对C++有一定的了解，会一些基础的C++编程。当然你也可以用C，但是需要正确处理verilator的C++部分。",
  },
];
</script>

<style lang="less" scoped>
.myShadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3),
    -4px -4px 4px rgba(255, 255, 255, 0.7);
}
</style>