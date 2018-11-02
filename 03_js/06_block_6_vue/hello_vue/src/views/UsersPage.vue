<template>
    <div class="users page">
      <!-- <custom-message></custom-message> -->
      <h1 class="title">{{ title }} </h1>
      <users></users>
    </div>
</template>
<script>
import Users from "@/components/users/Users.vue";
// import CustomMessage from "@/components/CustomMessage.vue";

export default {
  data() {
    return {
      title: "Page users !"
    }
  },
  components: {
    // CustomMessage,
    Users,
  },
};
</script>
<style lang="scss" scoped>

</style>
