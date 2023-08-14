<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showMessage">点击我</button>
  </div>
</template>

<script setup>
import { MessageCreator } from "../components/message/index";

const message = new MessageCreator();
let count = 1;
function showMessage() {
  message.present({
    message: `这是第 ${count++} 个消息提示框`,
    duration: 3000,
  });
}
</script>
