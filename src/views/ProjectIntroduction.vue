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
    <div class="flex justify-evenly">
      <!-- 导航栏 -->
      <div class="text-sm text-slate-400">
        <p class="py-2 border-b border-sky-200">目录</p>
        <ul>
          <li
            v-for="(item, index) in projectName"
            :key="index"
            class="leading-loose hover:text-sky-400"
          >
            <a :href="`#project${index}`">{{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- 方向介绍正文 -->
      <div
        class="w-4/5 p-3 mt-8 transition-all bg-white grow-0 myShadow bg-sky"
        id="project0"
      >
        <!-- 标题 -->
        <!-- bg-teal-100 border-2 border-teal-500 rounded -->
        <h1 class="text-2xl font-bold tracking-wider text-sky-400">
          分布式系统与云计算
        </h1>
        <!-- 负责人介绍 -->
        <div class="p-2 mt-2 border-t border-b">
          <!-- 头衔与联系方式 -->
          <div class="flex justify-between">
            <p class="font-bold tracking-widest">林涵远</p>
            <p class="flex gap-4">
              <span class="px-2 bg-teal-200 rounded-full"
                >微光工作室副主席</span
              >
              <span class="px-2 bg-pink-200 rounded-full"
                >2021级嵌入式方向</span
              >
            </p>
            <p>
              QQ:
              <span class="border-b text-sky-400 border-sky-400"
                >2071594767</span
              >
            </p>
          </div>
          <!-- 个人经历 -->
          <p class="text-slate-500">
            目前在字节跳动视频架构部门实习，主要方向为分布式系统、云计算与运维开发。项目成果有CubeUniverse云原生海量数据存储、MiniDocker、GlimmerMeeting等。曾获第十三届中国大学生服务外包创新创业大赛全国二等奖，在创新创业类、算法类、多媒体类等竞赛中拥有获奖经历。
          </p>
        </div>
        <!-- 方向简介 -->
        <div class="mt-2 border-b">
          <h1 class="text-lg text-sky-400">🎨 方向简介</h1>
          <p class="my-1 indent-4">
            云计算、集群、分布式、虚拟化、高可用...... 这些名词你是否耳熟？
          </p>
          <p class="my-1 indent-4">
            分布式系统是由一组通过网络进行通信、为了完成共同的任务而协调工作的计算机节点组成的系统。面对互联网技术与应用的爆炸式发展，分布式系统已经成为了现代化信息系统的必备支撑。无论是天猫双十一秒杀、抖音视频流业务还是云原神负载均衡，分布式系统的思想已然涉及现代互联网业务的方方面面。
          </p>
          <p class="my-1 indent-4">
            分布式系统的天然特性决定了其在各类互联网业务中的地位。一秒千金的高价值业务需要的不可撼动的高可靠性、大规模机器学习GPU集群所协调汇集的海量智能算力、不惧千军万马随时弹性扩充的灵活可扩展性，都是互联网企业在分布式领域投入研发力量的重要原因。
          </p>
          <p class="my-1 indent-4">
            更进一步，随着处理器资源、存储资源、网络资源的虚拟化进展，云计算这种基于互联网和虚拟化技术的新型计算模式正在蓬勃生长。无形的“云”正在用有形的架构承载越来越多的行业应用，“云”上生活触手可及。
          </p>
        </div>
        <!-- 项目简介 -->
        <div class="mt-2">
          <div class="flex items-center justify-between p-2">
            <h1 class="text-lg text-sky-400">📝 项目简介</h1>
            <p class="font-bold">
              基于选主机制的master高可用mapreduce并行计算框架
            </p>
          </div>
          <p class="my-1 indent-4">
            什么意思呢，不要觉得这个项目很难，我们拆开来看
          </p>
          <ul>
            <li>
              <p>
                <span class="inline-block w-2 h-2 bg-teal-400 rounded-lg"></span
                >&nbsp; 什么是并行计算
              </p>
              <p class="my-1 indent-4 text-slate-500">
                简单来说，就是把一个完整的计算任务交给多个计算机完成，以此提高效率。一种简单的实现就是把大任务拆成多个小任务，分派给不同计算机执行，再合并执行结果。
              </p>
            </li>
            <li>
              <p>
                <span class="inline-block w-2 h-2 bg-teal-400 rounded-lg"></span
                >&nbsp; 首先我们要实现一个mapreduce并行计算框架
              </p>
              <p class="my-1 indent-4 text-slate-500">
                mapreduce是什么嘞，简单来说它是一个谷歌提出来的一种实现分布式计算的方法，它实现起来相对简单，通过master和worker的形式组织集群成员，把任务拆分分派，最后收集合并。我们会学习google当年的论文，尝试实现能让计算并行化的简单框架。
              </p>
            </li>
            <li>
              <p>
                <span class="inline-block w-2 h-2 bg-teal-400 rounded-lg"></span
                >&nbsp; 其次呢我们要实现一个选主机制，来完成master的高可用
              </p>
              <p class="my-1 indent-4 text-slate-500">
                什么意思呢，我们实现的master只有一只，而worker有一堆，论文中也讲了worker挂了会怎么处理。那么如果master挂了呢？我们将再使用分布式系统的一些常用方法，比如选主机制，来完成master的高可用。
              </p>
            </li>
          </ul>
          <p class="my-1 indent-4">
            总而言之，我们会通过实现项目目标和论文学习的方式，逐步去尝试mapreduce之类一些简单的分布式系统的设计思想，实现一个简单能跑的小系统。总体而言不会很困难，但也需要一定时间的论文学习和调试过程。
          </p>
        </div>
        <!-- 注意事项 -->
        <div class="p-2 mt-2 bg-teal-100 border-2 border-teal-500 rounded">
          <p>
            <span class="font-bold">🔔 注意事项: </span
            >本项目基于go语言实现，考虑到同学可能没有接触过go语言，本方向的前期工作将围绕语言基础做一些准备，因此不需要担心因为没学过go而影响项目进度。同时go语言本身足够简单，且它的应用也很广泛，所以也不用怕学不懂或是学了没用。总之，大一0基础的小伙伴尝试也是没问题的。
          </p>
        </div>
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
</script>

<style lang="less" scoped>
.myShadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3),
    -4px -4px 4px rgba(255, 255, 255, 0.7);
}
</style>