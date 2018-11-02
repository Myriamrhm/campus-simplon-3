<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <comprendre-axios></comprendre-axios>
    </div>
</template>
<script>

import ComprendreAxios from "@/components/ComprendreAxios.vue";

export default {
    components: {
        ComprendreAxios
    },
    data() {
        return {
            title: "Page Ajax"
        }
    }
}
</script>
