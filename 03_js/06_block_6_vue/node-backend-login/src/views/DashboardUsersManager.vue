<template>
  <div>
    <h1 class="title">Users manager</h1>
    <Tabler :dataList="users"></Tabler>
  </div>
</template>

<script>
import Tabler from "@/components/Tabler.vue";
export default {
  created() {
        this.$store.dispatch("user/getAll")
  },
  computed: {
     users() {
        return this.$store.getters["user/all"];
     }
  },
  components: {
    Tabler
  }
};
</script>

<style lang="scss" scoped>
</style>
