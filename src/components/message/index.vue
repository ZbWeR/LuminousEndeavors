<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="
      msgType === 'success'
        ? 'border-teal-500 bg-teal-100/75 text-teal-400'
        : 'border-red-500 bg-red-100/75 text-red-400'
    "
    class="box-border inline-block px-4 py-3 transition-all border rounded-md"
  >
    {{ props.message }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  message: String,
  msgType: {
    type: String,
    default: "success",
  },
});
//TODO:样式类别字符串 type['success'] = 'bg-sky-500'
</script>