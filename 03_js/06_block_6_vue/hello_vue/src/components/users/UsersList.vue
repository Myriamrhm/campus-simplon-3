<template>
    <!-- https://fr.vuejs.org/v2/guide/list.html -->
    <!-- https://fr.vuejs.org/v2/guide/class-and-style.html -->
    <ul id="users_list" :class="{full: users.length >= limit}" class="users list">
        <li class="item" v-for="(user, n) in users" :key="n" 
            @click="getUserNameLength(user)">
            {{ user.name }} is {{ user.astro }}
        </li>
    </ul>
</template>
<script>

export default {
    methods: {
        getUserNameLength(user) {
            console.log("longueur du nom =>", user.name.length);
            return user.name.length;
        }
    },
    props: ["limit", "users"]
}
</script>
<style lang="scss" scoped>
#users_list {
    background:darkgrey;
    border-radius: .3rem;
    padding: 20px 20px 20px 40px;
    max-width: 340px;
}
.full {
    color: red;
}
</style>
