<template>
    <div class="users page">
      <h1 class="title">{{ title }} </h1>
      <users></users>
    </div>
</template>
<script>
import Users from "@/components/users/Users.vue";

export default {
  data() {
    return {
      title: "Page users !"
    }
  },
  components: {
    Users,
  },
};
</script>
<style lang="scss" scoped>

</style>
