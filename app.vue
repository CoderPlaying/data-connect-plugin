<script setup lang="ts">
import { bitable } from "@base-open/connector-api";
const state = reactive({
  userId: "",
  tenantKey: "",
  value: "",
});
onMounted(() => {
  if (typeof window !== "undefined") {
    bitable.getConfig().then((config) => {
      console.log("srcTablePath client", config);
      state.value = config.value;
    });
    bitable.getUserId().then((id) => {
      state.userId = id;
    });
    bitable.getTenantKey().then((key) => {
      state.tenantKey = key;
    });
  }
});
const onClick = () => {
  bitable.saveConfigAndGoNext({ key: state.userId });
};
</script>
<template>
  <div>
    <div>
      <span>userId:{{ state.userId }}</span>
      <span>tenantKey:{{ state.tenantKey }}</span>
    </div>
    <el-button @click="onClick">Default</el-button>
  </div>
</template>
