<template>
  <div id="form_login">
    <ul id="logs">
      <li v-for="(log, k) in logs" :key="k">{{log}}</li>
    </ul>
    <form id="form" ref="form" @submit="$event.preventDefault()">
      <input
        type="email"
        name="mail"
        v-model="user.mail"
        class="input"
        :class="{warning: !user.mail.length}"
      >
      <input
        type="password"
        name="password"
        v-model="user.password"
        class="input"
        :class="{warning: !user.password.length}"
      >
      <button @click="login($event)" class="btn">log in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: {},
      passwordPattern: {
        regex: null,
        hint:
          "8 caractère minimum dont au moins 1 majuscule, 1 nombre et 1 caractère spécial"
      },
      user: {
        mail: "guillaume@owlab.io",
        password: "123Soleil"
      }
    };
  },
  methods: {
    checkLogin() {
      const checkMail = function checkMail(mail) {
        const res = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          mail
        );
        if (!res) this.logs["mailFormat"] = "Please enter a valid mail address";
        return res;
      };

      const checkPass = function checkPass(password) {
        // const res = ta regex ici :D;
        const res = true;
        if (!res)
          this.logs["passwordFormat"] = `Required password pattern: ${
            this.passwordPattern.hint
          }`;
        return res;
      };

      const runTestsSuite = function runTestsSuite(acc, fn) {
        acc += fn() ? 0 : 1;
        return acc;
      };

      const tests = [
        checkMail.bind(this, this.user.mail),
        checkPass.bind(this, this.user.password)
      ];

      const errors = tests.reduce(runTestsSuite, 0);

      console.log("@checkLogin", errors, this.logs);

      return errors === 0;
    },
    login(evt) {
      const status = this.checkLogin();
      if (status) {
        this.$store
          .dispatch("user/login", this.user)
          .then(res => {
            this.$router.push({ path: `/dashboard/me` });
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>
<style scoped lang="scss">
#form {
    display: flex;
    justify-content: center;
}
</style>
