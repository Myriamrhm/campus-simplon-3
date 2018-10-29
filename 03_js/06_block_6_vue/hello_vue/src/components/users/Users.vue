<template>
    <div class="users">
        <h2 class="title">{{ title }}</h2>
        <p>
          effectif de la promo: {{ users.length }}<br>
          limite d'effectif de la promo: {{ limit }}
        </p>
        <input type="range" min="0" max="30" v-model="limit"> 
        <UserForm @create-user="addUser"></UserForm>
        <UsersList :limit="limit" :users="users"></UsersList>
    </div>
</template>
<script>
import UserForm from "./UserForm.vue";
import UsersList from "./UsersList.vue";

export default {
  data() {
    return {
      title: "Promo: Aulnay P3",
      limit: 25,
      users: [
        { name: "Jim", astro: "leo" },
        { name: "Joe", astro: "virgo" },
        { name: "Jack", astro: "scorpio" },
        { name: "Constance", astro: "pisces" },
        { name: "Habib", astro: "sagitarius" },
        { name: "Te Hau", astro: "balance" },
        { name: "Brendan", astro: "taurus" },
        { name: "Alexandre", astro: "cap gemini" },
      ]
    };
  },
  components: {
    UserForm,
    UsersList
  },
  methods: {
    addUser(newUser) {
      this.users.push(newUser); // on push users@this.data
    }
  }
};
</script>
