<template>
  <div
    @click.self="$emit('changeVis')"
    class="absolute z-40 flex items-center justify-center w-screen h-screen overflow-hidden bg-black/50"
  >
    <form
      class="w-1/3 p-3 bg-white rounded-md"
      id="uploadForm"
      method="post"
      ref="uploadForm"
      enctype="multipart/form-data"
    >
      <div class="flex items-center justify-between">
        <label>项目 PR 链接:</label
        ><input
          class="text-sm w-2/3 rounded-sm placeholder:text-slate-300 focus:shadow-[0_0_0_1px_#409eff] shadow-[0_0_0_1px_#dcdfe6] py-1 px-2 outline-none transition-all duration-300"
          type="text"
          name="prUrl"
        />
      </div>
      <div class="mt-4">
        <label for="">上传文件：</label>
        <div
          @click="handleUpload"
          class="relative flex items-center justify-center w-full h-32 mt-2 border border-dashed rounded-sm cursor-pointer text-sky-400 border-sky-400"
        >
          <p class="text-xl select-none">{{ fileName || "添加文件..." }}</p>
          <!-- 加载动画 -->
          <div
            v-show="loading"
            class="absolute flex flex-col items-center w-full h-full overflow-hidden justify-evenly bg-black/50"
          >
            <p class="text-xl text-white">{{ loading }}%</p>
            <div
              class="relative w-4/5 py-1 overflow-hidden bg-white rounded-full"
            >
              <p
                :style="`transform:translateX(${loading}%)`"
                class="absolute top-0 inline-block w-full py-1 -left-full bg-sky-400"
              ></p>
            </div>
            <p class="text-xl text-white">文件上传中...</p>
          </div>
        </div>
        <input
          @change="getFileInfo($event)"
          ref="uploadBtn"
          class="hidden"
          type="file"
          name="upFiles"
          multiple="multiple"
        />
      </div>
      <div class="flex justify-center gap-4 mt-4">
        <button
          @click.prevent="cancelUpload"
          class="block w-1/5 py-1 tracking-widest text-white transition-all bg-red-400 hover:bg-red-500"
        >
          取消</button
        ><button
          @click.prevent="runUpload"
          class="block w-1/5 py-1 tracking-widest text-white transition-all bg-emerald-500 hover:bg-emerald-600"
        >
          提 交
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMapState } from "@/utils/useVuex";
import { uploadFile } from "@/request/api/info";

const emit = defineEmits(["alert", "changeVis"]);
const { token } = useMapState(["token"]);

const uploadBtn = ref(null);
const fileName = ref("");
const uploadForm = ref(null);

// 点击提交按钮
function handleUpload() {
  uploadBtn.value.click();
}
// 获取上传文件的信息
function getFileInfo(e) {
  const { target } = e;
  if (target?.files?.length === 0) return;
  const { name, size, type } = target.files[0];
  if (size > 150 * 1024 * 1024) {
    emit("alert", "文件太大啦!", "error");
    return;
  }
  let fileNameType = name.split(".")[1];
  if (fileNameType !== "zip" || type !== "application/x-zip-compressed") {
    emit("alert", "文件格式只能为zip", "error");
    return;
  }
  fileName.value = name;
}

// 处理进度条事件
const loading = ref(0);
function handleProgress(progressEvent) {
  let present = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
  loading.value = present;
}

const uploadSignal = ref(null);
// 取消上传
function cancelUpload() {
  uploadSignal.value && uploadSignal.value.abort();
  emit("changeVis");
}

// 提交文件信息
async function runUpload() {
  try {
    const fileData = new FormData(uploadForm.value);
    const prUrl = fileData.get("prUrl");
    const upFiles = fileData.get("upFiles");
    if (!prUrl || upFiles.name === "") {
      emit("alert", "请填写所有内容!", "error");
      return;
    }

    uploadSignal.value && uploadSignal.value.abort();
    const controller = new AbortController();
    uploadSignal.value = controller;

    await uploadFile(token.value, fileData, handleProgress, controller.signal);

    emit("alert", "上传成功!", "success");
    emit("changeVis");

    uploadBtn.value = "";
    fileName.value = "";
    loading.value = 0;
  } catch {
    return;
  }
}
</script>