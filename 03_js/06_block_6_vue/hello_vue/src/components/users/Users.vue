<template>
    <div class="users">
        <h2 class="title">{{ title }}</h2>
        <p>
          effectif de la promo: {{ users.length }}<br>
          limite d'effectif de la promo: {{ limit }}
        </p>
        <custom-message></custom-message>
        <input type="range" min="0" max="30" v-model="limit" @input="checkLimit"> 
        <UserForm @create-user="addUser"></UserForm>
        <UsersList :limit="limit" :users="users"></UsersList>
    </div>
</template>
<script>
import UserForm from "./UserForm.vue";
import UsersList from "./UsersList.vue";
        
import CustomMessage from "@/components/CustomMessage.vue";
    
export default {
  data() {
    return {
      title: "Promo: Aulnay P3",
      limit: 25,
      users: [
        { id: 1, name: "Jim", astro: "leo" },
        { id: 3, name: "Jack", astro: "scorpio" },
        { id: 3, name: "Constance", astro: "pisces" },
        { id: 4, name: "Habib", astro: "sagitarius" },
        { id: 5, name: "Te Hau", astro: "balance" },
        { id: 6, name: "Brendan", astro: "taurus" },
        { id: 7, name: "Alexandre", astro: "cap gemini" },
      ]
    };
  },
  components: {
    CustomMessage,
    UserForm,
    UsersList,
  },
  methods: {
    addUser(newUser) {
      this.users.push(newUser); // on push users@this.data
    },
    checkLimit(evt) {
      console.log(evt.target.value >= this.limit)
      if (evt.target.value >= this.limit) {
        this.$ebus.$emit("custom-message", {
          msg: "olala y'a du monde",
          css: "warning"
        });
      } else {
        console.log("else")
          this.$ebus.$emit("custom-message", {
            msg: "",
            css: ""
          });
      }
    }
  }
};
</script>
