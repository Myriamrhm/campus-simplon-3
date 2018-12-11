<template>
  <form id="form" @submit="$event.preventDefault()" ref="form">
    <h1>register</h1>
    <ul id="logs_list" class="logs" :class="logLevel">
      <li v-for="(log, i) in logs" :key="i">{{log}}</li>
    </ul>
    <input type="text" name="name" v-model="user.name" class="input"
      :class="{warning: !user.name.length}">

    <input type="email" name="mail" v-model="user.mail" class="input"
      :class="{warning: !user.mail.length}">

    <input type="password" name="password" v-model="user.password"
      class="input" :class="{warning: !user.password.length}">

    <input type="password" name="passwordConfirm" v-model="user.confirmPassword" class="input"
      :class="{warning: user.password !== user.confirmPassword}">

    <button @click="register" class="btn">register</button>
  </form>
</template>

<script>
import formUtils from "@/utils/forms.js";

export default {
  data() {
    return {
      logs: {},
      logLevel: null,
      passwordMinLength: 8,
      user: {
        mail: "guillaume@owlab.io",
        name: "guillaume",
        password: "123Soleil",
        confirmPassword: "123Soleil"
      }
    };
  },
  methods: {
    checkRegister() {
      return true;
      this.logs = [];
      const fd = new FormData(this.$refs.form);

      const isFormValueOk = function isFormValueOk() {
        let errors = 0;
        for (let arr of fd) {
          if (!arr[1]) errors += 1;
        }
        const res = errors === 0;

        if (!res) {
          this.logs.push("please fill all the fields");
        }
        return res;
      }.bind(this);

      const isPassMatch = function isPassMatch() {
        const res = this.user.password === this.user.confirmPassword;
        if (!res) {
          this.logs.push("the confirm-password doesn't match password");
        }
        return res;
      }.bind(this);

      const isPassLengthValid = function isPassLengthValid() {
        const res = this.user.password.length >= this.passwordMinLength;
        if (!res) {
          this.logs.push(
            `the password is too short (${this.passwordMinLength} chars min)`
          );
        }
        return res;
      }.bind(this);

      const isPassSequenceOk = function isPassSequenceOk() {
        return true;
      };

      const runTestsSuite = function runTestsSuite(acc, fn) {
        acc += fn() === false ? 1 : 0;
        return acc;
      };

      // const tests = [isPassSequenceOk];
      const tests = [
        isFormValueOk,
        isPassMatch,
        isPassLengthValid,
        isPassSequenceOk
      ];

      this.logs.errorCount = tests.reduce(runTestsSuite, 0);

      this.logLevel = !this.logs.errorCount ? null : "warning";
      const data = !this.logs.errorCount
        ? formUtils.convertFormDataToObject(fd)
        : null;

      return {
        errors: this.logs.errorCount !== 0,
        data
      };
    },
    register() {
      const check = this.checkRegister();

      // if (!check.errors) {
      if (check) {
        // console.log(check.data);
        this.$store
          // .dispatch("user/register", check.data)
          .dispatch("user/register", this.user)
          .then(res => {
            console.log("res@ajax-register", res);
            this.logLevel = "success";
            this.logs = ["all good"];
          })
          .catch(err => {
            console.error("error@ajax-register", err);
            this.logLevel = "error";
            this.logs = [err];
          });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
#form {
  display: flex;
  flex-direction: column;
}
.logs {
  list-style: none;
}
</style>
