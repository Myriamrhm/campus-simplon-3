<template>
    <div class="box" :class="css" v-if="msg">
        <span>{{ msg }}</span>
        <span class="clickable close" @click="msg = ''">X</span>
    </div>
</template>
<script>
export default {
    created() {
        this.$ebus.$on("custom-message", payload => {
            this.msg = payload.msg;
            this.css = payload.css;
        });
    },
    data() {
        return {
            msg: "",
            css: ""
        }
    }
}
</script>
<style lang="scss" scoped>
.box {
  align-items: center;
  border: 1px solid;
  border-radius: .4rem;
  display:flex;
  justify-content: center;
  max-width: 30%;
  min-height: 90px;
  min-width: 220px;
  padding: 2px 10px;
  position: relative;
  text-align: center;
}
.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
.close {
    position: absolute;
    top: 2px;
    right: 10px;
}
</style>
