<template>
    <div id="form">
        <h2 class="title">Create new user:</h2>
        <custom-message></custom-message>
        <label for="name" class="label">name</label>
        <input id="name" type="text" class="input name" v-model="user.name">
        <label for="name" class="label">astro</label>
        <input id="astro" type="text" class="input astro" v-model="user.astro">
        <input type="submit" class="btn" @click="emitUser">
    </div>
</template>
<script>
      
import CustomMessage from "@/components/CustomMessage.vue";
    
export default {
  components: {
    CustomMessage
  },
  data() {
    return {
      valid: true,
      user: {
        name: "",
        astro: ""
      }
    };
  },
  methods: {
    checkUser() {
      return Boolean(this.user.name) && Boolean(this.user.astro);
    },
    emitUser() {
      this.valid = this.checkUser();
      if (this.valid) {
        // si succès
        // on passe le nouvel user au parent pour l'ajouter à la liste d'users
        this.$emit("create-user", this.user);
        // on utilise eventBus pour passer un message au composant customMessage
        this.$ebus.$emit("custom-message", {
          msg: "user succesfully created",
          css: "success"
        });
        // réinitialisation de l'user
        return (this.user = {
          name: "",
          astro: ""
        });
      } else {
        // si erreur ...
        // On utilise le bus d'event pour envoyer un message d'erreur au composant CustomMessage
        this.$ebus.$emit("custom-message", {
          msg: "please fill name and astro properties",
          css: "warning"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#form {
  align-self: flex-start;
  background: darkgrey;
  border: 2px solid inherit;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  max-width: 320px;
  padding: 10px;
}
#form .label {
  align-self: flex-start;
  cursor: pointer;
}
#form .input {
  margin-top: 3px;
  outline: none;
}
#form .btn {
  align-items: center;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  margin-top: 12px;
  outline: none;
  width: 120px;
  &:hover {
    background: darkorange;
    color: white;
  }
}
</style>
