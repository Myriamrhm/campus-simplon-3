<template>
    <div id="admin">
        <h1 id="title" class="title">Admin</h1>
        <nav id="nav">
            <ul>
                <li>
                    <router-link to="/admin/dashboard">dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'list-products'}">all products</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'add-product'}">add product</router-link>
                </li>
            </ul>
        </nav>
        <p id="intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        <router-view id="sub_page"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#admin {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
#title {
    grid-column: 1 / 5;
}
#nav {
    grid-column: 1 / 3;
}
#intro,
#sub_page {
    grid-column: 3 / 5;
    text-align: left;
}
</style>
