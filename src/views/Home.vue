<template>
  <div>
    {{ number }}
    <div>
      <el-button type="primary">点击</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["number"]),
  },
};
</script>

<style>
</style>