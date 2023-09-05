<template>
  <div class="w-full bg-zinc-100 overflow-hidden">
    <!-- 标题栏 -->
    <HeadTopNav id="top" class="title">方 向 介 绍</HeadTopNav>
    <!-- 导航栏 -->
    <div
      class=" nav fixed  text-sm xl:w-44 2xl:w-52 2xl:left-20 left-10 text-slate-400 lg:text-lg "
      :class="{list: isshow }" 
    >
      <p class="py-2 border-b text-sky-400 border-sky-400 cursor-pointer z-10"  @click="isshow=!isshow">📖 目录</p>
      <ul v-show=isshow >
        <li
          v-for="(item, index) in projectName"
          :key="index"
          class="overflow-hidden leading-loose hover:text-sky-400 whitespace-nowrap text-ellipsis"
        >
          <a :href="`#${item}`" @click="changeshow()">{{ item }}</a>
        </li>
        <li class="overflow-hidden leading-loose hover:text-sky-400 whitespace-nowrap text-ellipsis">
          <a href="#top" @click="changeshow()">返回顶部</a>
        </li>
      </ul>
    </div>
    <!-- 方向介绍正文 -->
    <div
      class="main leading-loose xl:w-[65%] w-3/5 p-4 px-6 mt-8 transition-all duration-300 bg-white  xl:mr-52 myShadow mx-auto" 
      v-for="(item, index) in projectInfo"
      :key="index"
      :id="`${item.name}`"
    >
      <!-- 标题 -->
      <h1 class="text-2xl font-bold tracking-wider text-sky-400">
        {{ item.name }}
      </h1>
      <!-- 负责人介绍 -->
      <div class="p-2 mt-2 border-t border-b">
        <!-- 头衔与联系方式 -->
        <div class="flex justify-between">
          <p class="font-bold tracking-widest leader-name">{{ item?.leader?.name }}</p>
          <p class="flex items-center gap-4">
            <span class="px-2 text-sm bg-teal-200 rounded-full">{{
              item?.leader?.title
            }}</span>
            <span class="px-2 text-sm bg-pink-200 rounded-full">{{
              item?.leader?.grade
            }}</span>
          </p>
          <p v-show="wid>980">
            QQ:
            <span class="border-b text-sky-400 border-sky-400">{{
              item?.leader?.contact
            }}</span>
          </p>
        </div>
        <!-- 个人经历 -->
        <p class="mt-1 text-slate-500">
          {{ item?.leader?.experience }}
        </p>
      </div>
      <!-- 方向简介 -->
      <div class="pb-1 mt-2 border-b">
        <h1 class="pb-1 text-xl font-bold text-sky-400">🎨 方向简介</h1>
        <p
          class="my-1 indent-4"
          v-for="(directionItem, index) in item.directionIntroduction"
          :key="index"
        >
          {{ directionItem }}
        </p>
      </div>
      <!-- 项目简介 -->
      <div class="pb-1 mt-2 border-b">
        <div class="flex items-center justify-between">
          <h1 class="pb-1 text-xl font-bold text-sky-400">📝 项目简介</h1>
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
            class="pb-1"
          >
            <!-- 小标题 -->
            <p v-if="projectItem.title">
              <span class="inline-block w-2 h-2 bg-teal-400 rounded-lg"></span
              >&nbsp; {{ projectItem.title }}
            </p>
            <!-- 内容 -->
            <div v-if="projectItem.content.length">
              <p
                v-for="(content, index) in projectItem.content"
                :key="index"
                class="my-1 whitespace-pre-wrap indent-4 text-slate-500"
              >
                {{ content }}
              </p>
            </div>
          </li>
        </ul>
        <p class="my-1 indent-4" v-if="item?.projectIntroduction?.overview">
          {{ item?.projectIntroduction?.overview }}
        </p>
      </div>
      <!-- FAQ -->
      <div class="mt-2">
        <h1 class="pb-1 text-xl font-bold text-sky-400">🎯 常见问题</h1>
        <div v-for="(FAQItem, index) in item.FAQ" :key="index">
          <h2 class="pt-1 pb-1 font-bold">Q: {{ FAQItem.question }}</h2>
          <p class="text-slate-600">
            <span class="font-bold">A:</span> {{ FAQItem.answer }}
          </p>
        </div>
      </div>
      <!-- 注意事项 -->
      <div
        v-if="item?.notice"
        class="p-2 mt-4 bg-teal-100 border-2 border-teal-500 rounded"
      >
        <p><span class="font-bold">🔔 注意事项: </span>{{ item?.notice }}</p>
      </div>
    </div>
    <CopyRights></CopyRights>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isshow:true,
            wid:document.documentElement.clientWidth
        }
    },
    created(){
      if(this.wid<980){
        this.isshow=false
      }
    },
    methods:{
      changeshow(){
        if(this.wid<980){
          this.isshow=!this.isshow
        }
      }
    },
}

</script>
<script setup>

import HeadTopNav from "@/components/HeadTopNav.vue";
import CopyRights from "@/components/CopyRights.vue";

const projectName = [
  "分布式系统与云计算",
  "编译原理",
  "处理器设计",
  "计算机视觉与机器学习",
  "操作系统",
];

const projectInfo = [
  {
    name: "分布式系统与云计算",
    leader: {
      name: "林涵远",
      title: "微光工作室副主席",
      grade: "2021级嵌入式方向",
      experience:
        "目前在字节跳动视频架构部门实习，主要方向为分布式系统、云计算与运维开发。项目成果有CubeUniverse云原生存储平台、MiniDocker、GlimmerMeeting等。曾获第十三届、第十四届中国大学生服务外包创新创业大赛全国二等奖，在创新创业类、算法类、多媒体类等竞赛中拥有获奖经历。",
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
        {
          title: "什么是并行计算",
          content: [
            "简单来说，就是把一个完整的计算任务交给多个计算机完成，以此提高效率。一种简单的实现就是把大任务拆成多个小任务，分派给不同计算机执行，再合并执行结果。",
          ],
        },
        {
          title: "首先我们要实现一个mapreduce并行计算框架",
          content: [
            "mapreduce是什么嘞，简单来说它是一个谷歌提出来的一种实现分布式计算的方法，它实现起来相对简单，通过master和worker的形式组织集群成员，把任务拆分分派，最后收集合并。我们会学习google当年的论文，尝试实现能让计算并行化的简单框架。",
          ],
        },
        {
          title: "其次呢我们要实现一个选主机制，来完成master的高可用",
          content: [
            "什么意思呢，我们实现的master只有一只，而worker有一堆，论文中也讲了worker挂了会怎么处理。那么如果master挂了呢？我们将再使用分布式系统的一些常用方法，比如选主机制，来完成master的高可用。",
          ],
        },
      ],
      overview:
        "总而言之，我们会通过实现项目目标和论文学习的方式，逐步去尝试mapreduce之类一些简单的分布式系统的设计思想，实现一个简单能跑的小系统。总体而言不会很困难，但也需要一定时间的论文学习和调试过程。",
    },
    notice:
      "本项目基于go语言实现，考虑到同学可能没有接触过go语言，本方向的前期工作将围绕语言基础做一些准备，因此不需要担心因为没学过go而影响项目进度。同时go语言本身足够简单，且它的应用也很广泛，所以也不用怕学不懂或是学了没用。总之，大一0基础的小伙伴尝试也是没问题的。",
    FAQ: [
      {
        question: "学习本方向项目能让我获得什么？",
        answer:
          "除了光点计划给予的免试加入工作室和其他奖励，可以用实践的方式收获一个分布式方向的小项目，为未来申请各种东西打基础，且能提高go语言的代码水平，并对本方向涉及的内容作一个初探。而且我觉得本方向实践起来非常有意思，做出一个能实际利用的东西也非常有成就感。",
      },
      {
        question: "项目大概需要多久来完成？",
        answer: "使用课余时间完成，三个星期到一个月内应该可以搞定",
      },
      {
        question: "项目如何提交？",
        answer:
          "和光点计划要求一致，实现的代码通过PR的形式上传到github或国产开源平台，同时在学习过程中记录下自己的心得体会、实现思路和测试截图等，以项目笔记的方式上传。",
      },
    ],
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
        {
          title: "编译前端",
          content: [
            "1. 读懂文法，完成自定义语言的词法分析、语法分析。可选择flex+bison（C/C++）或者Antlr（Java）完成",
            "2. 设计你需要的简单的数据结构，比如符号表、基本块、函数等，推荐参照llvm的设计方式，当然也可以用简单的三代码设计。",
            "3. 遍历语法树，实现中间代码生成。",
          ],
        },
        {
          title: "编译中端",
          content: [
            "1. SSA化（可选择完成）",
            "2. 中间代码优化（常量传播、公共子表达式、死代码删除、函数内联等等），优化是没有尽头的，欢迎同学们深入尝试。",
          ],
        },
        {
          title: "编译后端",
          content: [
            "1. 将中间代码翻译成目标汇编代码，架构的话默认选择ARM架构，对RISCV很感兴趣的同学，也可使用RISCV架构。",
            "2. 寄存器分配（可选，如果时间紧迫但又想尝试，比起图着色，我们更推荐线性扫描分配）",
          ],
        },
      ],
      overview: "",
    },
    notice:
      "本项目不要求大家完全杀穿，可选择的完成语言有C、C++、Java。在完成编译前端生成中间代码之后，可选择编译中端、编译后端两个方向中的一个继续完成即可（不了解ARM或RISCV架构的同学推荐完成部分中端代码优化，也可以选择只完成编译后端的寄存器分配），不要求全部做完，尽力就好。希望同学们通过该项目对编译有一个整体上的认识，当然，期待同学们的大展身手。",
    FAQ: [
      {
        question: "学习本方向项目能让我获得什么？",
        answer:
          "除了光点计划给予的免试加入工作室和其他奖励，可以深入编译世界的奥秘，大二上恰好有编译原理的课程，能完成这个项目的同学相信可以薄纱学校的课程了。此外，这个从0开始完成的项目能锻炼你项目构建的能力、提高你的数据结构设计能力，且能提高所选语言的代码水平。当然，最希望你能从这个项目中收获成就感与快乐。",
      },
      {
        question: "项目大概需要多久来完成？",
        answer:
          "使用课余时间完成，大约一个月的时间，尽力完成即可，毕竟优化是没有尽头的。",
      },
      {
        question: "项目如何提交？",
        answer:
          "和光点计划要求一致，实现的代码通过PR的形式上传到github或国产开源平台，同时在学习过程中记录下自己的心得体会、实现思路和测试截图等，以项目笔记的方式上传。",
      },
    ],
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
        {
          title:
            "电路描述语言学习:可以选择verilog或者是chisel硬件描述语言。尝试学习使用硬件描述语言描述多路选择器以及加法器。",
          content: [],
        },
        {
          title:
            "仿真环境的使用:学习使用verilator，用仿真环境运行上面两个设计，通过观察波形检查实现的正确性。",
          content: [],
        },
        {
          title:
            "ISA以及微架构学习:学习了解将要设计的ISA特性，以及单周期处理器的架构。",
          content: [],
        },
        {
          title: "设计处理器:通过硬件描述语言设计该处理器。",
          content: [],
        },
        {
          title:
            "仿真验证:自己编写测试用汇编代码，用仿真器进行仿真，检测处理器实现的正确性。",
          content: [],
        },
      ],
      overview: "",
    },
    notice:
      "作为一个项目来说，需要培养自主学习能力。对软件工程的学生来说，数字电路相关知识了解很少。虽然但是，网上的学习资源很多，可以查找学习，同时该项目涉及的深度不深，只要花时间就可以学会。仿真环境是该项目唯一涉及软件的部分，需要大家对C++有一定的了解，会一些基础的C++编程。当然你也可以用C，但是需要正确处理verilator的C++部分。",
    FAQ: [
      {
        question: "学习本方向项目能让我获得什么？",
        answer:
          "除了光点计划给予的免试加入工作室和其他奖励，可以用实践的方式收获一个 处理器方向的小项目，为未来申请各种东西打基础。其次，让你从一个全新视角观察一个计算机是如何工作，对软件的执行有着更加深刻的认识。或许，对以后如果想学习嵌入式会有所帮助。",
      },

      {
        question: "项目大概需要多久来完成？",
        answer:
          "视相关基础而定，基础很好甚至可以一天完成；对0基础来说，一个月内也是可以完成的。",
      },
      {
        question: "如何炫耀我强大的模型？",
        answer:
          "和光点计划要求一致，实现的代码通过PR的形式上传到github或国产开源平台，同时在学习过程中记录下自己的心得体会、实现思路和测试截图等，以项目笔记的方式上传。",
      },
    ],
  },
  {
    name: "计算机视觉与机器学习",
    leader: {
      name: "陈佳华",
      title: "微光工作室副主席",
      grade: "2021级系统与技术方向",
      experience:
        "目前主要的研究方向是NLP、推荐系统。于2023年完成景点推荐平台的设计与实现，于2022年服务创新创业大赛中协助完成垃圾智能分类识别的项目。同时在众多比赛中独立完成了全栈的开发任务。",
      contact: "1370172202",
    },
    directionIntroduction: [
      "图像分类顾名思义即给定一个图像，判断这个图像属于什么类别。对于强大的人类视觉系统来说，表现为从人眼看到某个画面，产生的视觉信号传导到大脑视觉神经中枢，在与之前已经学习到经验知识的大脑神经元之间的交流和计算后，意识上形成结论。而对于计算机而言，其没有感觉器官，只能通过一个个像素的数值，对该图像进行判断。进行判断的个体抽象为一个模型，和人类一样，模型要在学习各种类别的图像有什么特征后才有可能正确地对一个新的图像进行类别判断。这个学习的过程是人们重点研究的，本质上是寻找一个函数关系，让这个函数关系能够将这些像素的数值映射到一个具体的类别（类别可以用某个数值表示）。",
      "在计算机视觉（CV）领域，图像分类任务占有较大的份额。目前有大量的研究人员都在专注于这个领域，并已经有广泛且深厚的研究成果，其中不少成果是能够被真正运用在实际生活中。在早期，大部分的方法都是利用 SVM 、随机森林等分类器进行分类，但随着 Alex Krizhevsky 在 2012 年 ILSVRC 提出的 CNN 模型 AlexNet 在表现上相较于传统方法取得了历史性突破后，越来越多的研究者都开始创新使用卷积神经网络如 VGG（Visual Geometry Group，2014）、GoogLeNet（2014）、ResNet（Residual Network，2015）进行图像分类，让模型的辨别能力在 ImageNet 数据集上逐渐超越了人类。",
      "与图像分类有关的业务在日常生活中也比较普遍，且表现效果和性能优异，极大地便捷了人类的生活，也促进了 AI 技术的落地实践和蓬勃发展，例如：",
      "1. 人脸识别技术：目前通过摄像头拍摄人脸识别人物身份的应用已经非常成熟。无人售货机前扫脸支付、场所门禁系统人脸通行、公安监控犯罪分子身份捕获等等都是人脸识别技术的应用场景。",
      "2. 医疗诊断技术：人工读片具备主观性高、重复性低、定量及信息利用度不足、耗时及劳动强度和知识经验的传承困难等问题。而通过图像识别进行病理诊断，效率就会大大提高。比如消化道穿孔的特征是膈下游离气体；肠梗阻的特征是小肠管扩张积气积液；阑尾增粗伴周围脂肪组织模糊对应急性阑尾炎。计算机通过算法，以及相对应的模式，识别出这样的区域和特征，就可以很精确的判断是什么病症。",
      "3. 智能交通技术：在自动驾驶中，路牌的识别是非常重要的，包含着之后行驶路径的各种信息，从而产生下一步较合理的决策。通过将视觉技术应用于不同交通场景的交通标志分割，并采用深度学习算法对交通标志进行识别和分类，就能根据路况信息帮助驾驶员或者机器人更好地进行后续操作，实现交通的智能化发展。",
    ],
    projectIntroduction: {
      name: "图像分类任务打榜挑战",
      foreword: "选择好的模型并添加一点微妙改动来达到尽可能高的名次！",
      paragraph: [
        {
          title: "数据集背景: （敬请期待）",
          content: [],
        },
        {
          title: "做题流程:",
          content: [
            "利用各种搜索引擎，查阅各种论文选择你要使用的模型，通过自己复现或者是在 github 上直接 clone 的方式得到模型主要文件。下载我们提供的数据集（必要），修改模型文件以便能利用该数据集进行训练，保存模型训练后的参数。还需要创建平台测评需要的脚本文件，按照流程编写代码以便平台能够正确地进行指标测量。最后则是整理上传文件到我们的测评平台，得到对应的表现分数和排名。",
          ],
        },
        {
          title: "题目要求:",
          content: [
            "1.数据集下载和上传模型全部文件请前往测评平台，平台会展示表现 top5 的名单",
            "2.请在上传文件的文件夹根目录下创建测评脚本 platform_test.py 格式敬请期待",
            "3.请将模型全部文件（包括模型文件、模型训练好的参数、测评脚本）放在一个命名为 mymodel 的文件夹中，上传时请选择 mymodel 文件夹直接上传。",
            "4.在上传了合法且符合要求的文件后，最终会生成此次提交的评测指标以及排名。排名依据为模型正确率（80%）+ 模型计算时间（20%）",
          ],
        },
      ],
      overview: "",
    },
    notice: "测评平台 URL （尚未开放）",
    FAQ: [
      {
        question: "学习本方向项目能让我获得什么？",
        answer:
          "本题类似于不太正规的打榜任务，完成本题可以初步体会如何进行指标类的评测，感受到刺激的活动氛围和排名上升的喜悦感，为后续进行正规、大型的比赛做铺垫。在技术上，能够在不断优化过程中了解更多的图像分类模型，并逐渐熟练掌握模型的训练流程和技巧，是一次难得的代码训练机会。",
      },
      {
        question: "完成本题与免试进入工作室有什么关联？",
        answer:
          "实现本题可以不用完成常规 ML 招新题来获得面试机会，且我们参考纳入面试名单的因素有很多，不限制于排名。如果你成功进入面谈环节，请熟悉自己使用的模型以应对面试可能进行的相关提问。最后会综合考量比拼和面谈的表现来选择获得免试进入工作室资格的人选。",
      },
      {
        question: "项目大概需要多久来完成？",
        answer: "在光点计划开展的时间段内尽力完成即可，毕竟优化是没有尽头的。",
      },
      {
        question: "如何炫耀我强大的模型？",
        answer:
          "本着光点计划是一个开源项目计划，且本题为招新趣味题，测评者可以将自己的使用的模型、调整的参数、 md 介绍文件上传至自己的 GitHub 仓库，然后在测评平台的备注中写入自己的仓库链接供大家参考",
      },
    ],
  },
  {
    name: "操作系统",
    leader: {
      name: "李佳轩",
      title: "微光工作室成员",
      grade: "2021级系统与技术方向",
      experience:
        "主要研究方向是计算机体系结构，操作系统。代表项目有GlimmerOS操作系统。曾获2022C4网络挑战赛全国一等奖。",
      contact: "1206370306",
    },
    directionIntroduction: [
      "说到操作系统，不知道大家对挂在嘴边的windows是否有所了解，它就是我们最广为熟知操作系统。操作系统是计算机系统中至关重要的组成部分，负责管理计算机的各种资源，以及协调不同程序之间的执行，就连你目前查看我们官网的硬件屏幕也离不开操作系统的管理。通过学习操作系统设计，你将了解到你的计算机是如何工作的：任务调度，硬件的抽象……，同时可以给你对于计算机的学习带来一个崭新的思考角度。",
    ],
    projectIntroduction: {
      name: "操作系统简易功能设计",
      foreword:
        "根据xv6的简易操作系统，增加一些格外系统功能，并自己编译检验功能实现的正确性.",
      paragraph: [
        {
          title: "下载一个自己的linux虚拟机（装主机上也可以）",
          content: [],
        },
        {
          title: "下载一个自己的IDE并配置",
          content: [],
        },
        {
          title: "下载qemu并且下载xv6源码",
          content: [],
        },
        {
          title: "根据题目实现目标功能",
          content: [],
        },
      ],
      overview: "",
    },
    notice: "",
    FAQ: [
      {
        question: "学习本方向项目能让我获得什么？",
        answer:
          "除了光点计划给予的免试加入工作室和其他奖励，可以让你对操作系统有一个入门级的认识，并且可以当作一个小项目，为未来申请各种东西打基础。其次，让你从一个全新视角观察一个计算机是如何工作，对软件的执行有着更加深刻的认识。",
      },
      {
        question: "项目难嘛，我应该如何去学习它？",
        answer:
          "项目本身是很有难度的，但是如果能实现它，会给你带来很多收获。并且对自身的设计能力也是有巨大的提升。为了学习它，需要你自己寻找相关书籍和课程进行学习，同时，我也会给一些相关架构的资料。",
      },
      {
        question: "项目如何提交？",
        answer:
          "和光点计划要求一致，实现的代码通过PR的形式上传到github或国产开源平台，同时在学习过程中记录下自己的心得体会、实现思路和测试截图等，以项目笔记的方式上传",
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.myShadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3),
    -4px -4px 4px rgba(255, 255, 255, 0.7);
}
.main:hover{
  scale: 1.02;
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
background-clip: text;}
@media (max-width: 980px) {
    .nav{
      left: 2%;
      transition: all 0.2s ease
    }
    .list{
      border-radius: 10px;
      padding: 5px;
      background-color: #fff;
      width: 80%;
      z-index: 999;
      left: 10%;
    }
    .leader-name{
      width: 24px;
      padding-right: 2rem;
    }
    .main{
      width: 80%;
      :hover{
        scale: 1;
      }
    }
}
</style>